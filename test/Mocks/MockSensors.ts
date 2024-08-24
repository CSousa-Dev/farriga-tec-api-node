import Sensor from "../../src/Domain/Entities/Sensor/Sensor";

const Sensors: Sensor[] = [
    new Sensor({
        type: 'umidity',
        position: 1,
        measure: null,
        threshold: 50,
        isActive: true
    }),
    new Sensor({
        type: 'temperature',
        position: 1,
        measure: null,
        threshold: 25,
        isActive: true
    }),
    new Sensor({
        type: 'soilMoisture',
        position: 1,
        measure: null,
        threshold: 30,
        isActive: true
    }),
    new Sensor({
        type: 'rain',
        position: 1,
        measure: null,
        threshold: 10,
        isActive: true
    }),
];

export default Sensors
