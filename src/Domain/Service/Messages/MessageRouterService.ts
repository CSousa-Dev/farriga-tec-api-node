import 'reflect-metadata';
import { injectable } from "inversify";
import Connection from "../../Entities/Connections/Connection";
import MessageProcessor from "../../Entities/Messages/MessageProcessor";
import { MessageType, MessageTypes } from "../../Entities/Messages/Types";

@injectable()
export default class MessageRouterService {
    private readonly processors: Map<MessageTypes, MessageProcessor> = new Map<MessageTypes, MessageProcessor>();

    constructor() {
        
    }   

    public route(connection: Connection, message: MessageType): void {
        const processorFound = this.processors.get(message.type);
        if (processorFound) {
            processorFound.process(connection, message);
        }
    }

    public registerProcessor(type: MessageTypes, processor: MessageProcessor): void {
        this.processors.set(type, processor);
    }
}