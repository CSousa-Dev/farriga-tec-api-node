import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { repositoryTypes } from '../../../Types/repositoryTypes';
import DeviceRepositoryInterface from '../../Repositories/Device/DeviceRepositoryInterface';
import Device from '../../Entities/Device/Device';
import { PermissionsType } from '../../Entities/Device/UserPermission';

export type actionPermissionCheckPayload = {
    deviceMacAddress: string;
    actionName: string;
    userId: string;
    actionType: 'device' | 'sensor' | 'irrigator';
    position?: number;
    permission: PermissionsType;
}

@injectable()
export default class ActionPermissionCheckService {

    constructor(
        @inject (repositoryTypes.DeviceRepositoryInterface)
        private deviceRepository: DeviceRepositoryInterface) {
    }
    
    public async execute(actionPermissionPayload: actionPermissionCheckPayload): Promise<void> {
        const device = await this.deviceRepository.find(actionPermissionPayload.deviceMacAddress);
        
        if (!device) 
            throw new Error("Permission denied");

        if(!device.canPerformAction({
            permission: actionPermissionPayload.permission,
            action: actionPermissionPayload.actionName, 
            userId: actionPermissionPayload.userId,
            type: actionPermissionPayload.actionType,
            position: actionPermissionPayload.position
        })) throw new Error("Permission denied");
    }
}