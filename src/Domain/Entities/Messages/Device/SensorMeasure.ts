export default interface SensorMeasure {
    type: 'sensor-measure';
    data: {
        sensor: string;
        position: number;
        measure: number;
    }
}