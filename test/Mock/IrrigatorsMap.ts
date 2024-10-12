import Action from "../../src/Domain/Entities/Device/Action";
import ActionPermission from "../../src/Domain/Entities/Device/ActionPermission";
import Irrigator from "../../src/Domain/Entities/Device/Irrigator/Irrigator";
import IrrigatorModel from "../../src/Domain/Entities/Device/Irrigator/IrrigatorModel";
import actionPermissionMap from "./ActionPermissionsMap";
import actionsMap from "./ActionsMap";

let irrigatorMap = new Map<string, Irrigator>();

let irrigatorModel = new IrrigatorModel({
    name: "Irrigator One",
    type: "Irrigator",
    actions: [
        actionsMap.get("action-one") as Action,
        actionsMap.get("action-two") as Action
    ]
})

let irrigator1 = new Irrigator({
    position: 1,
    model: irrigatorModel,
    actionPermissions: [
        actionPermissionMap.get("action-one") as ActionPermission, 
        actionPermissionMap.get("action-two") as ActionPermission  
    ]
});

let irrigator2 = new Irrigator({
    position: 2,
    model: irrigatorModel,
    actionPermissions: [
        actionPermissionMap.get("action-one") as ActionPermission
    ]
});

irrigatorMap.set("Irrigator One", irrigator1);
irrigatorMap.set("Irrigator Two", irrigator2);

export default irrigatorMap;

