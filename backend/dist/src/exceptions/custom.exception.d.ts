import { HttpException, HttpStatus } from "@nestjs/common";
export declare class CustomException extends HttpException {
    constructor(error: string, message: string | string[], status?: HttpStatus);
}
