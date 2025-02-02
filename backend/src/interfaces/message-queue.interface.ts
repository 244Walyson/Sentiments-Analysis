export interface MessageQueue {
  onModuleInit(): Promise<void>;
  publish(topic: string, message: any, traceId?: string): Promise<void>;
  subscribe(topic: string, callback: (message: any) => void): Promise<void>;
}
