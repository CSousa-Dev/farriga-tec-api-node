import Device from "../../../src/Domain/Entities/Device/Device";
import RepositoryProvider from "../../../src/Providers/RepositoryProvider";
import DomainServiceProvider from "../../../src/Providers/DomainServiceProvider";
import DevicesMap from "../../Mock/DevicesMap";
import DeviceRepositoryInterface from "../../../src/Domain/Repositories/Device/DeviceRepositoryInterface";
import ActionPermissionService from "../../../src/Domain/Service/Device/ActionPermissionService";

describe('ActionPermissionService', () => {

    /** CURRENT MOCK PERMISSIONS  
     * Action Name: action-one user: 1 permissions: execute listen - Device - Irrigator position: 1 - Sensor position: 1
     * Action Name: action-one user: 2 permissions: listen - Device - Irrigator position: 1 - Sensor position: 1
     * 
    */

    let device: Device;
    let deviceRepository: DeviceRepositoryInterface;
    let actionPermissionService: ActionPermissionService;

    beforeEach(async () => {
        device = DevicesMap.get("1") as Device;
        deviceRepository = new RepositoryProvider().deviceRepository();
        await deviceRepository.add(device);
        actionPermissionService = new DomainServiceProvider().actionPermissionService();
    });

    test('Should not deny permission to execute action-one on device 1', async () => {
        // DEVICE
        await expect(
            actionPermissionService.execute({
                actionName: "action-one",
                deviceMacAddress: device.macAddress,
                userId: "1",
                permission: "execute",
                actionType: "device"
            })
        ).resolves.not.toThrow();
        
        await expect(
            actionPermissionService.execute({
                actionName: "action-one",
                deviceMacAddress: device.macAddress,
                userId: "1",
                permission: "listen",
                actionType: "device"
            })
        ).resolves.not.toThrow();

        await expect(
            actionPermissionService.execute({
                actionName: "action-one",
                deviceMacAddress: device.macAddress,
                userId: "2",
                permission: "listen",
                actionType: "device"
            })
        ).resolves.not.toThrow();

        // SENSOR
        await expect(
            actionPermissionService.execute({
                actionName: "action-one",
                deviceMacAddress: device.macAddress,
                userId: "1",
                permission: "execute",
                position: 1,
                actionType: "sensor"
            })
        ).resolves.not.toThrow();
        
        await expect(
            actionPermissionService.execute({
                actionName: "action-one",
                deviceMacAddress: device.macAddress,
                userId: "1",
                permission: "listen",
                position: 1,
                actionType: "sensor"
            })
        ).resolves.not.toThrow();

        await expect(
            actionPermissionService.execute({
                actionName: "action-one",
                deviceMacAddress: device.macAddress,
                userId: "2",
                permission: "listen",
                position: 1,
                actionType: "sensor"
            })
        ).resolves.not.toThrow();

        // IRRIGATOR
        await expect(
            actionPermissionService.execute({
                actionName: "action-one",
                deviceMacAddress: device.macAddress,
                userId: "1",
                permission: "execute",
                position: 1,
                actionType: "irrigator"
            })
        ).resolves.not.toThrow();
        
        await expect(
            actionPermissionService.execute({
                actionName: "action-one",
                deviceMacAddress: device.macAddress,
                userId: "1",
                permission: "listen",
                position: 1,
                actionType: "irrigator"
            })
        ).resolves.not.toThrow();

        await expect(
            actionPermissionService.execute({
                actionName: "action-one",
                deviceMacAddress: device.macAddress,
                userId: "2",
                permission: "listen",
                position: 1,
                actionType: "irrigator"
            })
        ).resolves.not.toThrow();
    });

    test('Should deny permission to execute action-one on device 1', async () => {
        // DEVICE
        await expect(
            actionPermissionService.execute({
                actionName: "action-one",
                deviceMacAddress: device.macAddress,
                userId: "2",
                permission: "execute",
                actionType: "device"
            })
        ).rejects.toThrow();

        // SENSOR
        await expect(
            actionPermissionService.execute({
                actionName: "action-one",
                deviceMacAddress: device.macAddress,
                userId: "2",
                permission: "execute",
                position: 1,
                actionType: "sensor"
            })
        ).rejects.toThrow();

        // IRRIGATOR
        await expect(
            actionPermissionService.execute({
                actionName: "action-one",
                deviceMacAddress: device.macAddress,
                userId: "2",
                permission: "execute",
                position: 1,
                actionType: "irrigator"
            })
        ).rejects.toThrow();
    });
})