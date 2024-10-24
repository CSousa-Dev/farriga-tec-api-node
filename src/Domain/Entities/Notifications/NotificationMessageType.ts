import DeviceConnectionMessage from "./Messages/DeviceConnectionMessage";
import DeviceDisconnectionMessage from "./Messages/DeviceDisconnectionMessage";
import SensorMeasureMessage from "./Messages/SensorMeasureMessage";
import StartIrrigationMessage from "./Messages/StartIrrigationMessage";
import StopIrrigationMessage from "./Messages/StopIrrigationMessage";

export type NotificationMessageType =
    | StartIrrigationMessage
    | SensorMeasureMessage
    | StopIrrigationMessage
    | DeviceConnectionMessage
    | DeviceDisconnectionMessage
    ;

export type NotificationMessageTypes = NotificationMessageType['type'];