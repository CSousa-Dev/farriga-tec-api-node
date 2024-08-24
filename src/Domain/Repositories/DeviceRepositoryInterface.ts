import Device from "../Entities/Device";

export default interface DeviceRepositoryInterface {
    get(deviceMacAddress: string): Device | null;
    add(device: Device): void;
    remove(deviceMacAddress: string): void;
}