import Action from "./Action";
import UserPermission from "./UserPermission";
import { PermissionsType } from "./UserPermission";

type actionPermissionsData = {
    action: Action,
    permissions: UserPermission[]
};

export default class ActionPermission {
    public readonly action: Action;
    public readonly permissions: UserPermission[] = [];
    
    constructor(actionPermissionsData: actionPermissionsData){
        this.action         = actionPermissionsData.action;
        this.permissions    = actionPermissionsData.permissions;
    }

    public thisUserHasPermissionTo(userId: string, permission: PermissionsType): boolean {
        const userPermission = this.permissions.find(permission => permission.userId == userId);
        return userPermission ? userPermission.hasPermissionTo(permission) : false;
    }

    public getUsersAllowedsTo(permission : PermissionsType): string[] {
        return this.permissions
            .filter(userPermission => userPermission.hasPermissionTo(permission))
            .map(userPermission => userPermission.userId);
    }
}