import Action from "../Action";

type irrigatorData = {
    type: string,
    name: string,
    actions: Action[]
}

export default class IrrigatorModel {
    public readonly type: string;
    public readonly name: string;
    public readonly actions: Action[];

    constructor(irrigatorData: irrigatorData) {
        this.type = irrigatorData.type;
        this.name = irrigatorData.name;
        this.actions = irrigatorData.actions;
    }

    hasAction(name: string): boolean {
        return this.actions.some(irrigatorAction => irrigatorAction.name === name);
    }
}