import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { domainServiceTypes } from "../../Types/domainServiceTypes";
import RequestStartConnection from "../Events/DeviceRequestStartConnection";
import StartDeviceConnectionService from "../Service/Device/StartDeviceConnectionService";
import SendDeviceConnectionStatus from '../Service/Device/SendDeviceConnectionStatus';

@injectable()
export default class OnRequestDeviceStartConnection {
    constructor(
        @inject (domainServiceTypes.StartDeviceConnectionService) 
        private readonly startDeviceConnectionService: StartDeviceConnectionService,
        @inject (domainServiceTypes.SendDeviceConnectionStatus)
        private readonly sendDeviceConnectionStatus: SendDeviceConnectionStatus
    ) {}

    async handle(event: RequestStartConnection): Promise<void> {
        await this.startDeviceConnectionService.execute(event.payload.deviceMacAddress);
        await this.sendDeviceConnectionStatus.execute(event.payload.deviceMacAddress);
    }
}