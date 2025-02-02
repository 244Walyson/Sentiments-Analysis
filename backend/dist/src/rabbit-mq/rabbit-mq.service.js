"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RabbitMQService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQService = void 0;
const common_1 = require("@nestjs/common");
const amqp = require("amqplib");
let RabbitMQService = RabbitMQService_1 = class RabbitMQService {
    constructor() {
        this.logger = new common_1.Logger(RabbitMQService_1.name);
    }
    async onModuleInit() {
        await this.connect();
    }
    async connect() {
        try {
            this.connection = await amqp.connect(process.env.RMQ_URL || 'amqp://localhost:5672');
            this.channel = await this.connection.createChannel();
            this.logger.log('RabbitMQ client connected.');
        }
        catch (error) {
            this.logger.error('Error connecting to RabbitMQ:', error);
        }
    }
    async subscribe(queue, callback) {
        try {
            await this.channel.assertQueue(queue, { durable: true });
            this.logger.log(`Subscribed to queue: ${queue}`);
            this.channel.consume(queue, (msg) => {
                if (msg !== null) {
                    const content = JSON.parse(msg.content.toString());
                    this.logger.log(`Message received from ${queue}: ${JSON.stringify(content)}`);
                    callback(content);
                    this.channel.ack(msg);
                }
            });
        }
        catch (error) {
            this.logger.error(`Error subscribing to queue ${queue}:`, error);
        }
    }
    async publish(queue, message, traceId) {
        try {
            await this.channel.assertQueue(queue, { durable: true });
            this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
                persistent: true,
            });
            this.logger.log(`[${traceId}] Message sent to queue ${queue}: ${JSON.stringify(message)}`);
        }
        catch (error) {
            this.logger.error(`[${traceId}] Error publishing message to queue ${queue}:`, error);
        }
    }
};
exports.RabbitMQService = RabbitMQService;
exports.RabbitMQService = RabbitMQService = RabbitMQService_1 = __decorate([
    (0, common_1.Injectable)()
], RabbitMQService);
//# sourceMappingURL=rabbit-mq.service.js.map