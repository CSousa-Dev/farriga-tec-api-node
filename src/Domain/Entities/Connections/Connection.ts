export default class Connection {
    constructor(
        public readonly address: string,
        public readonly connectedAt: Date,
        public readonly type: 'USER' | 'DEVICE',
        public readonly identifier: string,
        private disconnectedAt: Date
    ){}

    public disconnect(): void {
        this.disconnectedAt = new Date();
    }

    public get isConnected(): boolean {
        return this.disconnectedAt === undefined;
    }
}   