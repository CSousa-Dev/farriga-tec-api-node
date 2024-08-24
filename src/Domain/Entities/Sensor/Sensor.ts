import Measure from "./Measure";

export default class Sensor implements SensorInterface {
    
    readonly type: SensorType;
    readonly position: number;
    private measure: Measure | null;
    private threshold: number;
    private isActive: boolean;

    constructor (
        sensorData: SensorData
    ){
        this.type = sensorData.type;
        this.position = sensorData.position;
        this.measure = sensorData.measure;
        this.threshold = sensorData.threshold;
        this.isActive = sensorData.isActive;
    }

    currentMeasure(): Measure | null {
        return this.measure;
    }

    changeTreshold(treshold: number): void {
        this.threshold = treshold;
    }

    changeMeasure(measure: Measure): void {
        this.measure = measure;
    }

    currentTreshold(): number {
        return this.threshold;
    }

    currentPosition(): number {
        return this.position;
    }

    active(): boolean {
        return this.isActive;
    }

    stop(): void {
        this.isActive = false;
    }

    start(): void {
        this.isActive = true;
    }
}

type SensorType = 'umidity' | 'temperature' | 'soilMoisture' | 'rain';

type SensorData = {
    type: SensorType,
    position: number,
    measure: Measure | null,
    threshold: number,
    isActive: boolean
}

interface SensorInterface {
    readonly type: SensorType;
    readonly position: number;

    currentMeasure(): Measure | null;
    changeTreshold(treshold: number): void;
    changeMeasure(measure: Measure): void;
    currentTreshold(): number;
    currentPosition(): number;
    active(): boolean;
    stop(): void;
    start(): void;
}