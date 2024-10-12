import Device from "../../../src/Domain/Entities/Device/Device";
import DevicesMap from "../../Mock/DevicesMap";

describe ('CheckSomeUserHasPermissionToPerformeIrrigatorAction', () => {

    test('should return true if user has permission to performe action', () => {
        // Arrange
        const device = DevicesMap.get("1") as Device;

        // Act
        let userOneCanExecuteActionOne = device.canPerformAction({
            type: "irrigator",
            action: "action-one",
            userId: '1',
            permission: "execute",
            position: 1
        });

        // Assert
        expect(userOneCanExecuteActionOne).toBe(true);
    });

    test('should return true if user has permission to listen to action', () => {
        // Arrange
        const device = DevicesMap.get("1") as Device;

        // Act
        let userOneCanListenActionOne = device.canPerformAction({
            type: "irrigator",
            action: "action-one",
            userId: '1',
            permission: "listen",
            position: 1
        });

        // Assert
        expect(userOneCanListenActionOne).toBe(true);
    });

    test('should return false if user does not have permission to performe action', () => {
        // Arrange
        const device = DevicesMap.get("1") as Device;

        // Act
        let userThreeCanExecuteActionOne = device.canPerformAction({
            type: "irrigator",
            action: "action-one",
            userId: '3',
            permission: "execute",
            position: 1
        });

        // Assert
        expect(userThreeCanExecuteActionOne).toBe(false);
    });

    test('should return false if action does not exist', () => {
        // Arrange
        const device = DevicesMap.get("1") as Device;

        // Act
        let userOneCanExecuteNonExistentAction = device.canPerformAction({
            type: "irrigator",
            action: "non-existent-action",
            userId: '1',
            permission: "execute",
            position: 1
        });

        // Assert
        expect(userOneCanExecuteNonExistentAction).toBe(false);
    });

    

});