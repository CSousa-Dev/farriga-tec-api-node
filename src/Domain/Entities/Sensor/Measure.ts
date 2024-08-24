export default interface Measure {
    readonly id: string;
    readonly value: number | boolean;
    readonly timestamp: Date;  
}