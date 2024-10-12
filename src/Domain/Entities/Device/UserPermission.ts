export type PermissionsType = "listen" | "admin" | "execute";

type userPermissionData = {
    userId: string,
    permissions: PermissionsType[]
}

export default class UserPermission {
    public readonly userId: string;
    public readonly permissions: PermissionsType[] = [];
    
    constructor(userPermissionData: userPermissionData){
        this.userId = userPermissionData.userId;
        this.permissions = userPermissionData.permissions;
    }

    public hasPermissionTo(permission: PermissionsType): boolean {
        return this.permissions.includes(permission);
    }
}