export default interface BaseEvent {
    id: string;
    type: string;
    time: Date;
    data: any;
}