import Device from "../../../src/Domain/Entities/Device/Device";
import DevicesMap from "../../Mock/DevicesMap";

describe('CheckSomeUserHasPermissionToPerformSensorAction', () => {

    test('should return false if user does not have permission to execute action', () => {
        // Arrange
        const device = DevicesMap.get("1") as Device;

        // Act
        let userThreeCanExecuteActionOne = device.canPerformAction({
            type: "sensor",
            position: 1, 
            action: "action-one",
            userId: '3',
            permission: "execute"
        });
        
        // Assert
        expect(userThreeCanExecuteActionOne).toBe(false);
    });

    test('should return true if user has permission to listen to action', () => {
        // Arrange
        const device = DevicesMap.get("1") as Device;

        // Act
        let userOneCanListenActionOne = device.canPerformAction({
            type: "sensor",
            position: 1, 
            action: "action-one", 
            userId: '1', 
            permission: "listen"
        });
        
        // Assert
        expect(userOneCanListenActionOne).toBe(true);
    });

    test('should return false if action does not exist', () => {
        // Arrange
        const device = DevicesMap.get("1") as Device;

        // Act
        let userOneCanExecuteNonExistentAction = device.canPerformAction({
            type: "sensor",
            position: 1, 
            action: "non-existent-action", 
            userId: '1', 
            permission: "execute"
        });
        
        // Assert
        expect(userOneCanExecuteNonExistentAction).toBe(false);
    });
});