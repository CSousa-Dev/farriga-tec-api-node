import UserPermission from "../../src/Domain/Entities/Device/UserPermission";

let userPermissionMap = new Map<string, UserPermission>();  

let userOnePermissionExecuteAndListen = new UserPermission({
    userId: '1', 
    permissions: ["execute", "listen"]
});


let userTwoPermissionListen = new UserPermission({
    userId: '2',
    permissions: ["listen"]
});


userPermissionMap.set('one-listen-execute', userOnePermissionExecuteAndListen);
userPermissionMap.set('two-listen', userTwoPermissionListen);

export default userPermissionMap;

