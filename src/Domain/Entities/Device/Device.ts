import Sensor from "./Sensor/Sensor";
import { PermissionsType } from "./UserPermission";
import DeviceModel from "./DeviceModel";
import ActionPermission from "./ActionPermission";
import Irrigator from "./Irrigator/Irrigator";
import Connection from "./Connection";

type deviceData = {
    deviceModel: DeviceModel,
    macAddress: string,
    name: string,
    lastConnection?: Connection,
    sensors?: Sensor[] | null
    irrigators?: Irrigator[] | null
    actionPermissions?: ActionPermission[]
}

type actionTarget = "device" | "sensor" | "irrigator";

type listAllowedUsersToListenActionData = {
    action: string,
    target: actionTarget,
    position?: number
}

type actionPermissionQuestion = {
    position?: number,
    action: string,
    userId: string,
    permission: PermissionsType,
    type: actionTarget
}

export default class Device {
    public  readonly macAddress: string;
    public  readonly deviceModel: DeviceModel;
    public  readonly actionPermissions: Map<string, ActionPermission> = new Map();
    private lastConnection: Connection | null = null;  
    private sensors: Sensor[] = [];
    private irrigators: Irrigator[] = [];

    constructor(deviceData: deviceData){
        this.macAddress = deviceData.macAddress;
        this.deviceModel = deviceData.deviceModel;
        this.sensors = deviceData.sensors || [];
        this.irrigators = deviceData.irrigators || [];
        this.lastConnection = deviceData.lastConnection || null;

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

    public listAllowedUsersToListenAction(listAllowedUsersToListenActionData: listAllowedUsersToListenActionData): string[] {
        if(listAllowedUsersToListenActionData.target === "sensor") return this.listAllowedUsersToListenSensorAction(listAllowedUsersToListenActionData.action, listAllowedUsersToListenActionData.position);

        if(listAllowedUsersToListenActionData.target === "device") return this.listAllowedUsersToListenDeviceAction(listAllowedUsersToListenActionData.action);

        if(listAllowedUsersToListenActionData.target === "irrigator") return this.listAllowedUsersToListenIrrigatorAction(listAllowedUsersToListenActionData.action, listAllowedUsersToListenActionData.position);

        return [];
    }

    private listAllowedUsersToListenSensorAction(action: string, position?: number): string[] {
        if(position === undefined) return [];

        const sensor = this.getSensorByPosition(position);
        return sensor ? sensor.listAllowedUsersToListenAction(action) : [];
    }

    private listAllowedUsersToListenDeviceAction(action: string): string[] {
        const actionPermission = this.actionPermissions.get(action);
        return actionPermission ? actionPermission.permissions.map(permission => permission.userId) : [];
    }

    private listAllowedUsersToListenIrrigatorAction(action: string, position?: number): string[] {
        if(position === undefined) return [];

        const irrigator = this.irrigators.find(irrigator => irrigator.getPosition() === position);
        return irrigator ? irrigator.listAllowedUsersToListenAction(action) : [];
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

    public startConnection(): void {

        if(this.lastConnection == null){
            this.lastConnection = new Connection({ isConnected: true, connectedAt: new Date()}); 
            return;
        }

        if(this.lastConnection?.getDisconnectedAt() === null) return;

        this.lastConnection = new Connection({ isConnected: true, connectedAt: new Date(), disconnectedAt: new Date() }); 
    }
}

