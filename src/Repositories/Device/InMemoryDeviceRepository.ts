import Device from "../../Domain/Entities/Device";
import DeviceRepositoryInterface from "../../Domain/Repositories/DeviceRepositoryInterface";

export default class InMemoryDeviceRepository implements DeviceRepositoryInterface {
    private devices: Map<string, Device> = new Map();

    get(deviceId: string): Device | null {
        return this.devices.get(deviceId) || null;
    }

    add(device: Device): void {
        this.devices.set(device.getMacAddress(), device);
    }

    remove(deviceId: string): void {
        this.devices.delete(deviceId);
    }
}