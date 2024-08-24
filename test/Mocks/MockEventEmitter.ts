import CustomEventEmitter, { EventMap } from "../../src/Application/CustomEventEmitter";

// Mocks para CustomEventEmitter e EventKeyCreatorInterface
export default class MockEventEmitter extends CustomEventEmitter {
    emit<K extends keyof EventMap>(event: K, data: EventMap[K]): boolean {
        return true;
    }

    on<K extends keyof EventMap>(event: K, listener: (data: EventMap[K]) => void): this {
        return this;
    }

    off<K extends keyof EventMap>(event: K, listener: (data: EventMap[K]) => void): this {
        return this;
    }

    once<K extends keyof EventMap>(event: K, listener: (data: EventMap[K]) => void): this {
        return this;
    }
}
