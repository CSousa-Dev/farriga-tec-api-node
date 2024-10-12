import Action from "../../src/Domain/Entities/Device/Action";
import ActionPermission from "../../src/Domain/Entities/Device/ActionPermission";
import UserPermission from "../../src/Domain/Entities/Device/UserPermission";
import actionsMap from "./ActionsMap";
import userPermissionMap from "./UserPermissionsMap";

let actionPermissionMap = new Map<string, ActionPermission>();

let actionOnePermission = new ActionPermission({
    action:         actionsMap.get("action-one") as Action,
    permissions:    [
        userPermissionMap.get("one-listen-execute") as UserPermission, 
        userPermissionMap.get("two-listen") as UserPermission
    ]
})

let actionTwoPermission = new ActionPermission({
    action:         actionsMap.get("action-two") as Action,
    permissions:    [
        userPermissionMap.get("two-listen") as UserPermission
    ]
})

actionPermissionMap.set("action-one", actionOnePermission);
actionPermissionMap.set("action-two", actionTwoPermission);

export default actionPermissionMap;