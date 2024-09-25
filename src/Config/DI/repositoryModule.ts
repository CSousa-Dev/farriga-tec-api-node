import "reflect-metadata";
import { ContainerModule } from "inversify";
import { repositoryTypes } from "../../Types/repositoryTypes";
import InMemoryDeviceRepository from "../../Infra/Repositories/Device/InMemoryDeviceRepository";
import sharedContainer from "./sharedContainer";
import InMemoryUserRepository from "../../Infra/Repositories/Account/InMemoryUserRepository";

const repositoryModule = new ContainerModule((bind) => {
    // Account Repositories
    bind(repositoryTypes.UserRepositoryInterface).to(InMemoryUserRepository).inSingletonScope();
    
    // Device Repositories
    bind(repositoryTypes.DeviceRepositoryInterface).to(InMemoryDeviceRepository).inSingletonScope();
})

sharedContainer.load(repositoryModule);