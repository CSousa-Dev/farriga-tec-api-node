import Device from "../../../src/Domain/Entities/Device/Device";
import RepositoryProvider from "../../../src/Providers/RepositoryProvider";
import DomainServiceProvider from "../../../src/Providers/DomainServiceProvider";

describe('RegisterDeviceService', () => {
    test('should register a device', async () => {
        const device = new Device({
            macAddress: '00:00:00:00:00:00', 
            name: 'test'
            },
        )

        const deviceRepository = new RepositoryProvider().deviceRepository();
        const registerDeviceService = new DomainServiceProvider().registerDeviceService();
        await registerDeviceService.execute(device);

        const registeredDevice = await deviceRepository.find(device.macAddress);

        expect(registeredDevice).toEqual(device);
    })
})