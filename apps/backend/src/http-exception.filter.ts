import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const errorResponse = exception.getResponse();

    this.logger.error(`[${request.method} ${request.url}] - Status: ${status} - Error: ${JSON.stringify(errorResponse)}`);

    response.status(status).json({
      isSuccess: false,
      timestamp: new Date().toISOString(),
      path: request.url,
      errorCode: status,
      message: (errorResponse as any).message || 'Error'
    });
  }
}