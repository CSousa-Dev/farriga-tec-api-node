import Action from "../../src/Domain/Entities/Device/Action";
import ActionPermission from "../../src/Domain/Entities/Device/ActionPermission";
import Device from "../../src/Domain/Entities/Device/Device";
import DeviceModel from "../../src/Domain/Entities/Device/DeviceModel";
import Sensor from "../../src/Domain/Entities/Device/Sensor/Sensor";
import actionPermissionMap from "./ActionPermissionsMap";
import actionsMap from "./ActionsMap";
import SensorMap from "./SensorsMap";
import irrigatorMap from "./IrrigatorsMap";
import Irrigator from "../../src/Domain/Entities/Device/Irrigator/Irrigator";

let DevicesMap = new Map<string, Device>();

let deviceModel = new DeviceModel({
    name: "Test Model",
    actions: [
        actionsMap.get("action-one") as Action,
        actionsMap.get("action-two") as Action
    ]
});

let device1 = new Device({
    macAddress: "1",
    name: "Device One",
    deviceModel: deviceModel,
    actionPermissions: [
        actionPermissionMap.get("action-one") as ActionPermission, 
        actionPermissionMap.get("action-two") as ActionPermission    
    ],
    sensors: [
        SensorMap.get("Sensor One") as Sensor,
        SensorMap.get("Sensor Two") as Sensor
    ],
    irrigators: [
        irrigatorMap.get("Irrigator One") as Irrigator,
        irrigatorMap.get("Irrigator Two") as Irrigator
    ]
});


let device2 = new Device({
    macAddress: "2",
    name: "Device Two",
    deviceModel: deviceModel,
    sensors: []
});

DevicesMap.set(device1.macAddress, device1);
DevicesMap.set(device2.macAddress, device2);

export default DevicesMap;