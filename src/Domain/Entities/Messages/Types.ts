import DeviceConnection from "./Device/DeviceConnection";
import SensorMeasure from "./Device/SensorMeasure"

export type MessageType = 
    SensorMeasure
    | DeviceConnection
    ;
    
export type MessageTypes = MessageType['type'];