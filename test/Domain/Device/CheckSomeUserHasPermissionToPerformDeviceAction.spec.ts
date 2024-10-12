import Device from "../../../src/Domain/Entities/Device/Device";
import DevicesMap from "../../Mock/DevicesMap";

describe('CheckSomeUserHasPermissionToPerformDeviceAction', () => {
    test('should return false if user does not have permission to execute action', () => {
        // Arrange
        let device = DevicesMap.get("1") as Device;

        // Act
        let userThreeCanExecuteActionOne = device.canPerformAction({
            type: "device",
            action: "action-one",
            userId: '3',
            permission: "execute", position: 1
        });
        // Assert

        expect(userThreeCanExecuteActionOne).toBe(false);
    });

    test('should return true if user has permission to listen to action', () => {
        // Arrange
        let device = DevicesMap.get("1") as Device;

        // Act
        let userOneCanListenActionOne = device.canPerformAction({
            type: "device",
            action: "action-one",
            userId: '1',
            permission: "listen"
        });
        // Assert

        expect(userOneCanListenActionOne).toBe(true);
    })

    test('should return true if user has permission to execute to action', () => {
        // Arrange
        let device = DevicesMap.get("1") as Device;

        // Act
        let userOneCanExecuteActionOne = device.canPerformAction({
            type: "device",
            action: "action-one",
            userId: '1',
            permission: "execute"
        });

        // Assert
        expect(userOneCanExecuteActionOne).toBe(true);
    });
});