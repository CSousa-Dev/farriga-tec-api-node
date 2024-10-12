import Action from "../../src/Domain/Entities/Device/Action";

let actionsMap = new Map<string, Action>();

let action1 = new Action({
    name: "action-one"
});

let action2 = new Action({
    name: "action-two"
});

actionsMap.set(action1.name, action1);
actionsMap.set(action2.name, action2);

export default actionsMap;