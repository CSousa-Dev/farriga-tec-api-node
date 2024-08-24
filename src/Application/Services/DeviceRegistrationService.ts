import Device from "../../Domain/Entities/Device";
import DeviceRepositoryInterface from "../../Domain/Repositories/DeviceRepositoryInterface";
import CustomEventEmitter from "../CustomEventEmitter";
import EventKeyCreatorInterface from "../EventKeyCreatorInterface";

export default class DeviceRegistrationService {
    constructor(
        private deviceRepository: DeviceRepositoryInterface,
        private eventEmmiter: CustomEventEmitter,
        private eventKeyCreator: EventKeyCreatorInterface
    ) {}

    public registerDevice(device: Device): void {
        this.deviceRepository.add(device);
        this.eventEmmiter.emit('device-registered', {
            id: this.eventKeyCreator.createKey(),
            timestamp: new Date(),
            type: 'device-registered',
            data: {
                device: device
            }
        });
    }

    public unregisterDevice(deviceMacAddress: string): void {
        this.deviceRepository.remove(deviceMacAddress);
        this.eventEmmiter.emit('device-unregistered', {
            id: this.eventKeyCreator.createKey(),
            timestamp: new Date(),
            type: 'device-unregistered',
            data: {
                deviceMacAddress: deviceMacAddress
            }
        });
    }
}