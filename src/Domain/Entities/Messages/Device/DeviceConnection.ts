export default interface SensorMeasure {
    type: 'device-connection';
    data: {
        macAddress: string;
    }
}