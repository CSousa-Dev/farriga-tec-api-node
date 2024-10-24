import BaseMessage from "./BaseMessage";

export default interface SensorMeasureMessage extends BaseMessage {
    type: 'sensor-measure-message';
    payload : {
        deviceMacAddress: string;
        sensorPosition: string;
        measuredAt: Date;
        measure: {
            value: number;
            unit: string;
        }   
    }
}