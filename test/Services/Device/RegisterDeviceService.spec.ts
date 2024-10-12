import Device from "../../../src/Domain/Entities/Device/Device";
import RepositoryProvider from "../../../src/Providers/RepositoryProvider";
import DomainServiceProvider from "../../../src/Providers/DomainServiceProvider";
import DevicesMap from "../../Mock/DevicesMap";

describe('RegisterDeviceService', () => {
    test('should register a device', async () => {
        const device = DevicesMap.get("1") as Device;

        const deviceRepository = new RepositoryProvider().deviceRepository();
        const registerDeviceService = new DomainServiceProvider().registerDeviceService();
        await registerDeviceService.execute(device);

        const registeredDevice = await deviceRepository.find(device.macAddress);

        expect(registeredDevice).toEqual(device);
    })
})