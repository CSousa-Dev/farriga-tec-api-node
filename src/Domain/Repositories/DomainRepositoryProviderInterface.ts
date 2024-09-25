import UserRepositoryInterface from "./Account/UserRepositoryInterface";
import DeviceRepositoryInterface from "./Device/DeviceRepositoryInterface";

export default interface DomainRepositoryProviderInterface {
    
    /** Device Repositories */
    deviceRepository(): DeviceRepositoryInterface;
    
    // /** Device Connection Repositories */
    // deviceConnectionRepository(): DeviceConnectionRepositoryInterface;
    // 
    // /** User Repositories */
    userRepository(): UserRepositoryInterface;
    // permissionRepository(): PermissionRepositoryInterface;
    // ownershipRepository(): OwnershipRepositoryInterface;
    // permissionGrantRepository(): PermissionGrantRepositoryInterface;
    // permissionClaimRepository(): PermissionClaimRepositoryInterface;
    // permissionGiveRepository(): PermissionGiveRepositoryInterface;
}