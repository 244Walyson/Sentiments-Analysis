import { HttpException, HttpStatus, Logger } from "@nestjs/common";

export class CustomException extends HttpException {
  constructor(
    error: string,
    message: string | string[],
    status: HttpStatus = HttpStatus.BAD_REQUEST
  ) {
    super(
      {
        error,
        message,
      },
      status
    );
  }
}
