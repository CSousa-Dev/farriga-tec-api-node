import { inject } from "inversify";
import { repositoryTypes } from "../../../Types/repositoryTypes";
import DeviceRepositoryInterface from "../../Repositories/Device/DeviceRepositoryInterface";
import DeviceNotFoundError from "../../Errors/Device/DeviceNotFoundError";

export default class StartDeviceConnectionService {
    
    constructor(
        @inject (repositoryTypes.DeviceRepositoryInterface)
        private deviceRepository: DeviceRepositoryInterface) {
    }

    async execute(deviceMacAddress: string): Promise<void> {
        const device = await this.deviceRepository.find(deviceMacAddress);
        
        if (!device) 
            throw new DeviceNotFoundError(deviceMacAddress);
        
        device.startConnection();
        await this.deviceRepository.saveNewConnection(device);
    }
}