import Device from "../../Entities/Device/Device";

export default interface DeviceRepositoryInterface {
    add(device: Device): Promise<void>;
    remove(deviceMacAddress: string): Promise<void>;
    find(deviceMacAddress: string): Promise<Device | null>;

    saveNewConnection(device: Device): Promise<void>;
}