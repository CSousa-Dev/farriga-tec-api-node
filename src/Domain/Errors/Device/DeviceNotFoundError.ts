export default class DeviceNotFoundError extends Error {
    constructor(macAddress: string) {
        super(`Device with mac address ${macAddress} not found`);
        this.name = "DeviceNotFoundError";
    }
}