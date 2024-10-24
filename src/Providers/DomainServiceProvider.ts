import DomainServiceProviderInterface from "../Domain/Service/DomainServiceProviderInterface";
import { domainServiceTypes } from "../Types/domainServiceTypes";
import RegisterService from "../Domain/Service/Device/RegisterDeviceService";
import sharedContainer from "../Config/DI/sharedContainer";
import RemoveDeviceService from "../Domain/Service/Device/RemoveDeviceService";
import RegisterUserService from "../Domain/Service/Account/RegisterUserService";
import ActionPermissionService from "../Domain/Service/Device/ActionPermissionService";
import StartDeviceConnectionService from "../Domain/Service/Device/StartDeviceConnectionService";
import SendDeviceConnectionStatus from "../Domain/Service/Device/SendDeviceConnectionStatus";
import MessageRouterService from "../Domain/Service/Messages/MessageRouterService";

export default class DomainServiceProvider implements DomainServiceProviderInterface {

    // ---------------- Account Services ------------------
    registerUserService(): RegisterUserService {
        return sharedContainer.get<RegisterUserService>(domainServiceTypes.RegisterUserService);
    }

    // ---------------- Device Services ------------------
    
    actionPermissionService(): ActionPermissionService {
        return sharedContainer.get<ActionPermissionService>(domainServiceTypes.ActionPermissionService);
    }

    registerDeviceService(): RegisterService {
        return sharedContainer.get<RegisterService>(domainServiceTypes.RegisterDeviceService);
    }

    removeDeviceService(): RemoveDeviceService {
        return sharedContainer.get<RemoveDeviceService>(domainServiceTypes.RemoveDeviceService);
    }

    sendDeviceConnectionStatus(): SendDeviceConnectionStatus {
        return sharedContainer.get<SendDeviceConnectionStatus>(domainServiceTypes.SendDeviceConnectionStatus);
    }

    startDeviceConnectionService(): StartDeviceConnectionService {
        return sharedContainer.get<StartDeviceConnectionService>(domainServiceTypes.StartDeviceConnectionService);
    }

    // ------------------- Message Services -------------------
    messageRouterService(): MessageRouterService {
        return sharedContainer.get<MessageRouterService>(domainServiceTypes.MessageRouterService);
    }	

    
}