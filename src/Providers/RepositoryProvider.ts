import { repositoryTypes } from "../Types/repositoryTypes";
import DomainRepositoryProviderInterface from "../Domain/Repositories/DomainRepositoryProviderInterface";
import DeviceRepositoryInterface from "../Domain/Repositories/Device/DeviceRepositoryInterface";
import InMemoryDeviceRepository from "../Infra/Repositories/InMemory/Device/InMemoryDeviceRepository";
import sharedContainer from "../Config/DI/sharedContainer";
import UserRepositoryInterface from "../Domain/Repositories/Account/UserRepositoryInterface";

export default class RepositoryProvider implements DomainRepositoryProviderInterface {
    
    /** Account Repositories */
    userRepository(): UserRepositoryInterface {
        return sharedContainer.get<UserRepositoryInterface>(repositoryTypes.UserRepositoryInterface);
    }

    // -------------------------------------------------------------------

    /** Device Repositories */
    deviceRepository(): DeviceRepositoryInterface {
        return sharedContainer.get<DeviceRepositoryInterface>(repositoryTypes.DeviceRepositoryInterface);
    }

    // -------------------------------------------------------------------
}