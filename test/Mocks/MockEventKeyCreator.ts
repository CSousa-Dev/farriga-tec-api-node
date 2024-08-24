import EventKeyCreatorInterface from "../../src/Application/EventKeyCreatorInterface";

export default class MockEventKeyCreator implements EventKeyCreatorInterface {
    private counter = 0;
    createKey(): string {
        return (this.counter++).toString();
    }
}