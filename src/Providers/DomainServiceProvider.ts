import DomainServiceProviderInterface from "../Domain/Service/DomainServiceProviderInterface";
import { domainServiceTypes } from "../Types/domainServiceTypes";
import RegisterService from "../Domain/Service/Device/RegisterDeviceService";
import sharedContainer from "../Config/DI/sharedContainer";
import RemoveDeviceService from "../Domain/Service/Device/RemoveDeviceService";
import RegisterUserService from "../Domain/Service/Account/RegisterUserService";

export default class DomainServiceProvider implements DomainServiceProviderInterface {

    /** Account Services */
    registerUserService(): RegisterUserService {
        return sharedContainer.get<RegisterUserService>(domainServiceTypes.RegisterUserService);
    }

    // ---------------------------------------------------
    
    /** Device Services */
    registerDeviceService(): RegisterService {
        return sharedContainer.get<RegisterService>(domainServiceTypes.RegisterDeviceService);
    }

    removeDeviceService(): RemoveDeviceService {
        return sharedContainer.get<RemoveDeviceService>(domainServiceTypes.RemoveDeviceService);
    }

    // ---------------------------------------------------

    
}