import Device from '../../src/Domain/Entities/Device';
import DeviceRegistrationService from '../../src/Application/Services/DeviceRegistrationService';
import DeviceRepositoryInterface from '../../src/Domain/Repositories/DeviceRepositoryInterface';
import EventKeyCreatorInterface from '../../src/Application/EventKeyCreatorInterface';
import InMemoryDeviceRepository from '../../src/Repositories/Device/InMemoryDeviceRepository';
import MockEventEmitter from '../Mocks/MockEventEmitter';
import MockEventKeyCreator from '../Mocks/MockEventKeyCreator';
import CustomEventEmitter from '../../src/Application/CustomEventEmitter';


describe('DeviceRegistrationService', () => {
    let deviceRepository: DeviceRepositoryInterface;
    let eventEmitter: CustomEventEmitter;
    let eventKeyCreator: EventKeyCreatorInterface;
    let deviceRegistrationService: DeviceRegistrationService;
    let device: Device;

    beforeEach(() => {
        deviceRepository = new InMemoryDeviceRepository();
        eventEmitter = new MockEventEmitter();
        eventKeyCreator = new MockEventKeyCreator();
        deviceRegistrationService = new DeviceRegistrationService(deviceRepository, eventEmitter, eventKeyCreator);

        device = new Device({
            macAddress: '00:11:22:33:44:55',
            name: 'Test Device',
            alias: 'TestAlias',
            isActive: true,
            lastConnection: new Date(),
            description: 'Test Device Description',
            location: 'Test Location',
            sensors: []  // Supondo que seja opcional
        });
    });

    test('should register a device and emit a device-registered event', () => {
        const emitSpy = jest.spyOn(eventEmitter, 'emit');
        deviceRegistrationService.registerDevice(device);

        const storedDevice = deviceRepository.get(device.getMacAddress());
        expect(storedDevice).not.toBeNull();
        expect(storedDevice?.getMacAddress()).toBe('00:11:22:33:44:55');
        expect(storedDevice?.getName()).toBe('Test Device');
        
        expect(emitSpy).toHaveBeenCalledWith('device-registered', expect.objectContaining({
            type: 'device-registered',
            data: { device: device }
        }));
    });

    test('should unregister a device and emit a device-unregistered event', () => {
        deviceRegistrationService.registerDevice(device);
        const emitSpy = jest.spyOn(eventEmitter, 'emit');

        deviceRegistrationService.unregisterDevice(device.getMacAddress());

        const storedDevice = deviceRepository.get(device.getMacAddress());
        expect(storedDevice).toBeNull();
        
        expect(emitSpy).toHaveBeenCalledWith('device-unregistered', expect.objectContaining({
            type: 'device-unregistered',
            data: { deviceMacAddress: device.getMacAddress() }
        }));
    });
});