import BaseEvent from "./BaseEvent";

export default interface SensorMeasureEvent extends BaseEvent {
    type: 'sensor-measure';
    data: {
        sensor: 'umidity' | 'temperature' | 'soilMoisture' | 'rain';
        position: string;
        measure: number;
    }
} 
