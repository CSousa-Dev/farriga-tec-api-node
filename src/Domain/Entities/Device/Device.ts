type deviceData = {
    macAddress: string,
    name: string,
}

export default class Device {
    public readonly macAddress: string;
    public readonly name: string

    constructor(deviceData: deviceData){
        this.macAddress = deviceData.macAddress;
        this.name = deviceData.name;
    }
}

