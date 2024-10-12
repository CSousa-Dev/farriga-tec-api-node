import Sensor from "../../src/Domain/Entities/Device/Sensor/Sensor";
import SensorModel from "../../src/Domain/Entities/Device/Sensor/SensorModel";
import sensorModelMap from "./SensorsModelMap";
import actionPermissionMap from "./ActionPermissionsMap";
import ActionPermission from "../../src/Domain/Entities/Device/ActionPermission";

let SensorMap = new Map<string, Sensor>();

let sensor1 = new Sensor({
    position: 1,
    model: sensorModelMap.get("Sensor One") as SensorModel,
    actionPermissions: [
        actionPermissionMap.get("action-one") as ActionPermission, 
        actionPermissionMap.get("action-two") as ActionPermission
    ]
});

let sensor2 = new Sensor({
    position: 2,
    model: sensorModelMap.get("Sensor Two") as SensorModel,
    actionPermissions: [
        actionPermissionMap.get("action-one") as ActionPermission,
    ]
});

SensorMap.set("Sensor One", sensor1);
SensorMap.set("Sensor Two", sensor2);


export default SensorMap;

