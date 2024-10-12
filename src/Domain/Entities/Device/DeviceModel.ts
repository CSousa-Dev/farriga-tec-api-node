import Action from "./Action"

type deviceModelData = {
    name: string,
    actions: Action[]
}

export default class DeviceModel {
    public readonly name: string;
    public readonly actions: Action[];

    constructor(deviceModelData: deviceModelData){
        this.name       = deviceModelData.name;
        this.actions    = deviceModelData.actions;
    }

    hasAction(name: string): boolean {
        return this.actions.some(deviceAction => deviceAction.name === name);
    }    
}