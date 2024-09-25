import "reflect-metadata";
import { inject, injectable } from "inversify";
import DeviceRepositoryInterface from "../../Repositories/Device/DeviceRepositoryInterface";
import { repositoryTypes } from "../../../Types/repositoryTypes";

@injectable()
export default class RemoveDeviceService {
    constructor (
        @inject(repositoryTypes.DeviceRepositoryInterface) 
        private deviceRepository: DeviceRepositoryInterface
    ){}

    async execute(macAddress: string): Promise<void> {
        await this.deviceRepository.remove(macAddress);
    }
}