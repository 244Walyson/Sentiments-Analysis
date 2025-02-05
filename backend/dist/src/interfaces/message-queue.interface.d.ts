export interface MessageQueue {
    onModuleInit(): Promise<void>;
    publish(topic: string, message: any): Promise<void>;
    subscribe(topic: string, callback: (message: any) => void): Promise<void>;
}
