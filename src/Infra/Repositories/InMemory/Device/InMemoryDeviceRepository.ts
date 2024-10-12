import "reflect-metadata";
import { injectable } from "inversify";
import Device from "../../../../Domain/Entities/Device/Device";
import DeviceRepositoryInterface from "../../../../Domain/Repositories/Device/DeviceRepositoryInterface";

@injectable()
export default class InMemoryDeviceRepository implements DeviceRepositoryInterface {
    private devices: Map<string, Device> = new Map();
    
    
    saveNewConnection(device: Device): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async add(device: Device): Promise<void> {
        this.devices.set(device.macAddress, device);
    }

    async remove(deviceMacAddress: string): Promise<void> {
        this.devices.delete(deviceMacAddress);
    }

    async find(deviceMacAddress: string): Promise<Device | null> {
        return this.devices.get(deviceMacAddress) || null;
    }
}