export const domainServiceTypes = {

    /** Account Services */
    RegisterUserService: Symbol.for("RegisterUserService"),

    /** Device Services */
    ActionPermissionService: Symbol.for("ActionPermissionService"),
    RegisterDeviceService: Symbol.for("RegisterDeviceService"),
    RemoveDeviceService: Symbol.for("RemoveDeviceService"),
    SendDeviceConnectionStatus: Symbol.for("SendDeviceConnectionStatus"),
    StartDeviceConnectionService: Symbol.for("StartDeviceConnectionService"),

    /** Message Services */
    MessageRouterService: Symbol.for("MessageRouterService"),
}