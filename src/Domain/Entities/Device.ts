import Measure from "./Sensor/Measure";
import Sensor from "./Sensor/Sensor";

export default class Device {
    private macAddress: string;
    private name: string;
    private alias: string;
    private isActive: boolean;
    private lastConnection: Date;
    // private sensors: Sensor[];

    constructor (
        deviceData: DeviceDataInterface
    ){
        this.macAddress = deviceData.macAddress;
        this.name = deviceData.name;
        this.alias = deviceData.alias;
        this.isActive = deviceData.isActive;
        this.lastConnection = deviceData.lastConnection;
        // this.sensors = deviceData.sensors;
    }

    getMacAddress(): string {
        return this.macAddress;
    }

    getName(): string {
        return this.name;
    }

    getAlias(): string {
        return this.alias;
    }

    getIsActive(): boolean {
        return this.isActive;
    }

    getLastConnection(): Date {
        return this.lastConnection;
    }

    // getSensors(): Sensor[] {
    //     return this.sensors;
    // }

    // addNewMeasure(sensorType: 'umidity' | 'temperature' | 'soilMoisture' | 'rain', sensorPosition: number, measure: Measure): void {

    //     const sensor = this.sensors.find(sensor => sensor.type === sensorType && sensor.position === sensorPosition);

    //     if(sensor){
    //         sensor.changeMeasure(measure);
    //     }

    //     if(!sensor){
    //         throw new Error('Sensor not found');
    //     }
    // }
}

interface DeviceDataInterface {
    macAddress: string;
    name: string;
    description: string;
    alias: string;
    location: string;
    isActive: boolean;
    lastConnection: Date;
    sensors: Sensor[];
}