import Device from "../../../src/Domain/Entities/Device/Device";
import DevicesMap from "../../Mock/DevicesMap";
import DomainServiceProvider from "../../../src/Providers/DomainServiceProvider";
import RepositoryProvider from "../../../src/Providers/RepositoryProvider";

describe('RemoveDeviceService', () => {
    test('should remove a device', async () => {
        // Arrange
        const device = DevicesMap.get("1") as Device;
        const deviceRepository = new RepositoryProvider().deviceRepository();
        const registerDeviceService = new DomainServiceProvider().registerDeviceService();
        await registerDeviceService.execute(device);

        const removeDeviceService = new DomainServiceProvider().removeDeviceService();

        await removeDeviceService.execute(device.macAddress);

        const registeredDevice = await deviceRepository.find(device.macAddress);
        expect(registeredDevice).toBeNull();
    })
})