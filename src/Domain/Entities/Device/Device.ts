import Sensor from "./Sensor/Sensor";
import { PermissionsType } from "./UserPermission";
import DeviceModel from "./DeviceModel";
import ActionPermission from "./ActionPermission";
import Irrigator from "./Irrigator/Irrigator";

type deviceData = {
    deviceModel: DeviceModel,
    macAddress: string,
    name: string,
    sensors?: Sensor[] | null
    irrigators?: Irrigator[] | null
    actionPermissions?: ActionPermission[]
}

type actionPermissionQuestion = {
    position?: number,
    action: string,
    userId: string,
    permission: PermissionsType,
    type: string
}

export default class Device {
    public  readonly macAddress: string;
    public  readonly deviceModel: DeviceModel;
    public  readonly actionPermissions: Map<string, ActionPermission> = new Map();
    private sensors: Sensor[] = [];
    private irrigators: Irrigator[] = [];

    constructor(deviceData: deviceData){
        this.macAddress = deviceData.macAddress;
        this.deviceModel = deviceData.deviceModel;
        this.sensors = deviceData.sensors || [];
        this.irrigators = deviceData.irrigators || [];

        if(deviceData.actionPermissions){
            deviceData.actionPermissions.forEach(actionPermission => {
                this.actionPermissions.set(actionPermission.action.name, actionPermission
                );
            });
        }
    }

    public addSensor(sensor: Sensor): void {
        this.sensors.push(sensor);
    }

    public getSensorByPosition(position: number): Sensor | null {
        return this.sensors.find(sensor => sensor.getPosition() === position) || null;
    }

    public getIrrigatorByPosition(position: number): Irrigator | null {
        return this.irrigators.find(irrigator => irrigator.getPosition() === position) || null;
    }

    public hasAction(action: string): boolean {
        return this.deviceModel.hasAction(action);
    }

    public canPerformAction(actionPermissionQuestion: actionPermissionQuestion): boolean {
        if(actionPermissionQuestion.type === "sensor") return this.canPerformSensorAction(actionPermissionQuestion.action, actionPermissionQuestion.userId, actionPermissionQuestion.permission, actionPermissionQuestion.position);

        if(actionPermissionQuestion.type === "device") return this.canPerformDeviceAction(actionPermissionQuestion.action, actionPermissionQuestion.userId, actionPermissionQuestion.permission);

        if(actionPermissionQuestion.type === "irrigator") return this.canPerformIrrigatorAction(actionPermissionQuestion.action, actionPermissionQuestion.userId, actionPermissionQuestion.permission, actionPermissionQuestion.position);
        
        return false;
    }

    private canPerformSensorAction(action: string, userId: string, permission: PermissionsType, position?: number): boolean {
        if(position === undefined) return false;

        const sensor = this.getSensorByPosition(position);
        return sensor ? sensor.canPerformAction(action, userId, permission) : false;
    }

    private canPerformDeviceAction(action: string, userId: string, permission: PermissionsType): boolean {
        const actionPermission = this.actionPermissions.get(action);
        return actionPermission ? actionPermission.thisUserHasPermissionTo(userId, permission) : false;
    }

    private canPerformIrrigatorAction(action: string, userId: string, permission: PermissionsType, position?: number): boolean {
        if(position === undefined) return false;

        const irrigator = this.irrigators.find(irrigator => irrigator.getPosition() === position);

        return irrigator ? irrigator.canPerformAction(action, userId, permission) : false;
    }
}

