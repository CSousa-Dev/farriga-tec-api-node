import Action from "../Action";

type sensorModelData = {
    type: string,
    measureUnit: string | null,
    min: number | null,
    max: number | null,
    name: string,
    actions: Action[]
}

export default class SensorModel {
    public readonly type: string;
    public readonly measureUnit: string | null;
    public readonly min: number | null;
    public readonly max: number | null;
    public readonly name: string;
    public readonly actions: Action[];

    constructor(sensorModelData: sensorModelData){
        this.type           = sensorModelData.type;
        this.measureUnit    = sensorModelData.measureUnit;
        this.min            = sensorModelData.min;
        this.max            = sensorModelData.max;
        this.name           = sensorModelData.name;
        this.actions        = sensorModelData.actions;
    }

    hasAction(name: string): boolean {
        return this.actions.some(sensorAction => sensorAction.name === name);
    }
}