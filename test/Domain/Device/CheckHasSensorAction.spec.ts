import Device from "../../../src/Domain/Entities/Device/Device";
import DevicesMap from "../../Mock/DevicesMap";

describe('CheckHasSensorAction.spec', () => {

    test('should return true if device sensor in the first position has action named action-one', () => {
        const device = DevicesMap.get("1") as Device;
        const sensor = device.getSensorByPosition(1);

        expect(sensor?.hasAction("action-one")).toBe(true);
    });

    test('should return false if device sensor in the first position dont have action named action-undefined', () => {
        const device = DevicesMap.get("1") as Device;
        const sensor = device.getSensorByPosition(1);

        expect(sensor?.hasAction("action-three")).toBe(false);
    });
});