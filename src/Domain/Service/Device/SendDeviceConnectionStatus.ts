import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { repositoryTypes } from '../../../Types/repositoryTypes';
import DeviceRepositoryInterface from '../../Repositories/Device/DeviceRepositoryInterface';
import UserRepositoryInterface from '../../Repositories/Account/UserRepositoryInterface';
import { domainServiceTypes } from '../../../Types/domainServiceTypes';
import { application } from 'express';
import Notification from '../../Entities/Notifications/Notification';

type SendDeviceConnectionStatusPayload = {
    deviceMacAddress: string;
}

@injectable()
export default class SendDeviceConnectionStatus {

    constructor(
        @inject (repositoryTypes.DeviceRepositoryInterface)
        private deviceRepository: DeviceRepositoryInterface
        @inject (repositoryTypes.UserRepositoryInterface)
        private userRepository: UserRepositoryInterface,
        @inject (applicationServiceTypes.SendNotification)
        private sendNotification: SendNotification
    ) {}

    async execute(deviceMacAddress: string): Promise<void> {
        let device = await this.deviceRepository.find(deviceMacAddress);

        if (!device) 
            throw new Error("Device not found");

        let usersCanListenToConnectionStatus = device.listAllowedUsersToListenAction({
            action: "connection-status",
            target: "device"
        });

        let users = await this.userRepository.getOnlyConnectedUsers(usersCanListenToConnectionStatus);

        users.forEach(user => {
            this.sendNotification.execute({
                userId: user.id,
                notification: new Notification({
                    title: "Device Connection Status",
                    message: {
                        deviceMacAddress: device.macAddress,
                        status: device.getLastConnection()?.status || "disconnected"
                    }
                })
            });
        });
    }
}