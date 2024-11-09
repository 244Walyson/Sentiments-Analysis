import { RmqContext } from "@nestjs/microservices";
export declare class SentimentController {
    constructor();
    handle(payload: any, context: RmqContext): Promise<void>;
}
