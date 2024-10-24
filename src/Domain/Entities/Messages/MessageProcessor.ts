import Connection from "../Connections/Connection";
import { MessageType } from "./Types";

export default interface MessageProcessor {
    process(connection: Connection, message: MessageType ): void;
}