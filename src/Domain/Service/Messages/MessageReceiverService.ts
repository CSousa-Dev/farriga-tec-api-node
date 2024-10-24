import { inject } from "inversify";
import BaseMessage from "../../Entities/Messages/BaseMessage";
import { MessageType } from "../../Entities/Messages/Types";
import { domainServiceTypes } from "../../../Types/domainServiceTypes";
import MessageRouterService from "./MessageRouterService";
import { repositoryTypes } from "../../../Types/repositoryTypes";

export default class MessageReceiverService {

    constructor(
        @inject(domainServiceTypes.MessageRouterService)
        private messageRouterService: MessageRouterService,
        @inject(repositoryTypes.ConnectionRepositoryInterface)
        private connectionRepository: ConnectionRepositoryInterface
    ) {}

    public receive(connectionIdentifier: string , incomingMessage: any): void {
        if (!this.isMessageType(incomingMessage)) {
            throw new Error('Invalid message type');
        }

        let connection = this.connectionRepository.find(connectionIdentifier);

        if (!connection) {
            throw new Error('Connection not found');

        this.messageRouterService.route(connection, incomingMessage);
    }
    
    private isMessageType(message: any): message is MessageType {
        if (!message || typeof message !== 'object') {
            return false;
        }

        return 'type' in message && 'data' in message;
    }
}