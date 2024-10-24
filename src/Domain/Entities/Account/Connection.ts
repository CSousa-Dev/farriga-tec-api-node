type connectionData = {
    connectedAt: Date
    disconnectedAt?: Date
}

export default class Connection {
    private readonly connectedAt: Date;
    private disconnectedAt: Date | null= null;

    constructor(connectionData: connectionData){
        this.connectedAt = connectionData.connectedAt;
        this.disconnectedAt = connectionData.disconnectedAt || null;
    }

    public isConnected(): boolean {
        return this.connectedAt !== null && this.disconnectedAt === null;
    }

    public disconnect(): void {
        this.disconnectedAt = new Date();
    }

    public getConnectedAt(): Date {
        return this.connectedAt;
    }

    public getDisconnectedAt(): Date | null {
        return this.disconnectedAt;
    }
}