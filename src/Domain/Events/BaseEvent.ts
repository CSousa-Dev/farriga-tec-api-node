export default interface BaseEvent {
    type: string;
    timestamp: Date;
    payload: any;
}