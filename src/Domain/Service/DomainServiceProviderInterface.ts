import RegisterUserService from "./Account/RegisterUserService";
import RegisterService from "./Device/RegisterDeviceService";
import RemoveDeviceService from "./Device/RemoveDeviceService";

export default interface DomainServiceProviderInterface {
    
    /** Device Domain Services */
    registerDeviceService(): RegisterService;
    removeDeviceService(): RemoveDeviceService;
    // updateDeviceService(): any;
    
    // /** Device Connection Domain Services */
    // registerNewConnectionService(): any;
    // removeConnectionService(): any;
    
    // /** User Domain Services */
    registerUserService(): RegisterUserService;
    // removeUserService(): any;
    // grantPermissionService(): any;
    // clainOwnershipService(): any;
    // givePermissionService(): any;
}