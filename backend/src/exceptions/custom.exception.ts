import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomException extends HttpException {
  constructor(
    error: string,
    message: string | string[],
    status: HttpStatus = HttpStatus.BAD_REQUEST
  ) {
    super(
      {
        statusCode: status,
        message: Array.isArray(message) ? message : [message],
        error: error,
      },
      status
    );
  }
}
