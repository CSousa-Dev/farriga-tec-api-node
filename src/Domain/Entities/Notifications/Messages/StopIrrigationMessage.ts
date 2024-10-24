export default interface StopIrrigationMessage {
    type: 'stop-irrigation-message';
    payload: {
        deviceMacAddress: string;
        irrigatorPosition: string;
        time: Date;
    }
}