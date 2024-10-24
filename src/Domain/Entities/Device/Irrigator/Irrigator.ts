import ActionPermission from "../ActionPermission";
import { PermissionsType } from "../UserPermission";
import IrrigatorModel from "./IrrigatorModel";

type irrigatorData = {
    position: number,
    model: IrrigatorModel,
    actionPermissions?: ActionPermission[]
}

export default class Irrigator {
    public readonly irrigatorModel: IrrigatorModel;
    public readonly position: number;
    public readonly actionPermissions: ActionPermission[] = [];

    constructor({ position, model, actionPermissions = [] }: irrigatorData) {
        this.position = position;
        this.irrigatorModel = model;
        this.actionPermissions = actionPermissions;
    }

    public getPosition(): number {
        return this.position;
    }

    public getModel(): IrrigatorModel {
        return this.irrigatorModel;
    }

    public hasAction(action: string): boolean {
        return this.irrigatorModel.hasAction(action);
    }

    public canPerformAction(action: string, userId: string, permission: PermissionsType): boolean {
        const actionPermission = this.actionPermissions.find(actionPermission => actionPermission.action.name === action);
        return actionPermission ? actionPermission.thisUserHasPermissionTo(userId, permission) : false;
    }

    public listAllowedUsersToListenAction(action: string): string[] {
        const actionPermission = this.actionPermissions.find(actionPermission => actionPermission.action.name === action);
        return actionPermission ? actionPermission.getUsersAllowedsTo('listen') : [];
    }
}