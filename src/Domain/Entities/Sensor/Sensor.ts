import Measure from "./Measure";

export default class Sensor implements SensorInterface {
    
    constructor (
        readonly type: 'umidity' | 'temperature' | 'soilMoisture' | 'rain',
        readonly position: number,
        private measure: Measure,
        private threshold: number,
        private isActive: boolean
    ){}

    currentMeasure(): Measure {
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

interface SensorInterface {
    readonly type: 'umidity' | 'temperature' | 'soilMoisture' | 'rain';
    readonly position: number;
    
    currentMeasure(): Measure;
    changeTreshold(treshold: number): void;
    changeMeasure(measure: Measure): void;
    currentTreshold(): number;
    currentPosition(): number;
    active(): boolean;
    stop(): void;
    start(): void;
}