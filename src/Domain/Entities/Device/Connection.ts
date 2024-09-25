type connectionData = {
    isConnected: boolean,
    connectedAt: Date
    disconnectedAt: Date
}

export default class Connection {
    private readonly connectedAt: Date;
    private isConnected: boolean
    private disconnectedAt: Date

    constructor(connectionData: connectionData){
        this.isConnected = connectionData.isConnected;
        this.connectedAt = connectionData.connectedAt;
        this.disconnectedAt = connectionData.disconnectedAt;
    }

    public currentConnected(): boolean {
        return this.isConnected;
    }

    public disconnect(): void {
        this.isConnected = false;
        this.disconnectedAt = new Date();
    }
}