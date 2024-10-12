import Action from "../../src/Domain/Entities/Device/Action";
import SensorModel from "../../src/Domain/Entities/Device/Sensor/SensorModel";
import actionsMap from "./ActionsMap";

let sensorModelMap = new Map<string, SensorModel>();

let sensorModel1 = new SensorModel({
    name: "Sensor One",
    actions: [
        actionsMap.get("action-one") as Action,
        actionsMap.get("action-two") as Action
    ],
    min: 0,
    max: 100,
    measureUnit: "Celsius",
    type: "Temperature" 
});


let sensorModel2 = new SensorModel({
    name: "Sensor Two",
    actions: [],
    min: 0,
    max: 100,
    measureUnit: "Celsius",
    type: "Soil Moisture"
});


sensorModelMap.set(sensorModel1.name, sensorModel1);
sensorModelMap.set(sensorModel2.name, sensorModel2);

export default sensorModelMap;