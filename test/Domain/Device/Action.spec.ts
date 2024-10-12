import Device from "../../../src/Domain/Entities/Device/Device";
import DevicesMap from "../../Mock/DevicesMap";

describe('Action', () => {
    
    test('should return true if device sensor in the first position has action named action-one', () => {
        // Arrange
        const device = DevicesMap.get("1") as Device;
        const sensor = device.getSensorByPosition(1);

        // Act
        const result = sensor?.hasAction("action-one");

        // Assert
        expect(result).toBe(true);
    });

    test('should return false if device sensor in the first position dont have action named action-undefined', () => {
        // Arrange
        const device = DevicesMap.get("1") as Device;
        const sensor = device.getSensorByPosition(1);

        // Act
        const result = sensor?.hasAction("action-three");

        // Assert
        expect(result).toBe(false);
    });


    test('should return true if device irrigator in the first position has action named action-one', () => {
        // Arrange
        const device = DevicesMap.get("1") as Device;
        const irrigator = device.getIrrigatorByPosition(1);

        // Act
        const result = irrigator?.hasAction("action-one");

        // Assert
        expect(result).toBe(true);
    });

    test('should return false if device irrigator in the first position dont have action named action-three', () => {
        // Arrange
        const device = DevicesMap.get("1") as Device;
        const irrigator = device.getIrrigatorByPosition(1);

        // Act
        const result = irrigator?.hasAction("action-three");

        // Assert
        expect(result).toBe(false);
    });

    test('should return true if device has action named action-one', () => {
        // Arrange
        const device = DevicesMap.get("1") as Device;

        // Act
        const result = device.hasAction("action-one");

        // Assert
        expect(result).toBe(true);
    });

    test('should return false if device dont have action named action-three', () => {
        // Arrange
        const device = DevicesMap.get("1") as Device;

        // Act
        const result = device.hasAction("action-three");

        // Assert
        expect(result).toBe(false);
    });

});