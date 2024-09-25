import 'reflect-metadata';
import { inject, injectable } from "inversify";
import DeviceRepositoryInterface from '../../Repositories/Device/DeviceRepositoryInterface';
import { repositoryTypes } from '../../../Types/repositoryTypes';
import Device from '../../Entities/Device/Device';

@injectable()
export default class RegisterDeviceService {
    constructor(
        @inject(repositoryTypes.DeviceRepositoryInterface)
        private deviceRepository: DeviceRepositoryInterface
    ) {}

    public async execute(device: Device): Promise<void> {
        await this.deviceRepository.add(device);
    }
}