import ActionPermission from "../ActionPermission";
import { PermissionsType } from "../UserPermission";
import SensorModel from "./SensorModel";

type sensorData = {
    position: number,
    model: SensorModel,
    actionPermissions?: ActionPermission[]
}

export default class Sensor {
    private readonly position: number;
    private readonly model: SensorModel;
    private actionPermissions: Map<string, ActionPermission> = new Map();
    
    constructor(sensorData: sensorData){
        this.position = sensorData.position;
        this.model    = sensorData.model;

        if(sensorData.actionPermissions === undefined){
            return;
        }

        sensorData.actionPermissions.forEach(actionPermission => {
            this.actionPermissions.set(actionPermission.action.name, actionPermission);
        });
    }

    public getPosition(): number {
        return this.position;
    }

    public getModel(): SensorModel {
        return this.model;
    }

    public hasAction(action: string): boolean {
        return this.model.hasAction(action);
    }

    public canPerformAction(action: string, userId: string, permission: PermissionsType): boolean {
        const actionPermission = this.actionPermissions.get(action);
        return actionPermission ? actionPermission.thisUserHasPermissionTo(userId, permission) : false;
    }

    public listAllowedUsersToListenAction(action: string): string[] {
        const actionPermission = this.actionPermissions.get(action);
        return actionPermission ? actionPermission.getUsersAllowedsTo('listen') : [];
    }
}