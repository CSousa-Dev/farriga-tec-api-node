import "reflect-metadata";
import { ContainerModule } from "inversify";
import RegisterDeviceService from "../../Domain/Service/Device/RegisterDeviceService";
import { domainServiceTypes } from "../../Types/domainServiceTypes";
import sharedContainer from "./sharedContainer";
import RegisterUserService from "../../Domain/Service/Account/RegisterUserService";
import RemoveDeviceService from "../../Domain/Service/Device/RemoveDeviceService";
import ActionPermissionService from "../../Domain/Service/Device/ActionPermissionService";

const serviceModule = new ContainerModule((bind) => {
    // Account Domain Services
    bind(domainServiceTypes.RegisterUserService).to(RegisterUserService).inSingletonScope(); 

    // Device Domain Services
    bind(domainServiceTypes.ActionPermissionService).to(ActionPermissionService).inSingletonScope();
    bind(domainServiceTypes.RegisterDeviceService).to(RegisterDeviceService).inSingletonScope();
    bind(domainServiceTypes.RemoveDeviceService).to(RemoveDeviceService).inSingletonScope();
})

sharedContainer.load(serviceModule);