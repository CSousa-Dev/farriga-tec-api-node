
type actionData = {
    name: string,
}

export default class Action {
    public readonly name: string;

    constructor(actionData: actionData){
        this.name = actionData.name;
    }
}