import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly myLogger: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.myLogger.setContext(context.getClass().name);
    const request = context.switchToHttp().getRequest();
    const { method, url, body } = request;

    const now = Date.now();
    this.myLogger.log(`Incoming Request - ${method} ${url}`);
    if (Object.keys(body).length > 0) {
      this.myLogger.log(`Request Body: ${JSON.stringify(body)}`);
    }
    return next.handle().pipe(
      tap((response) => {
        const responseTime = Date.now() - now;
        this.myLogger.log(
          `Response Method - ${method} ${url} - ${responseTime}ms` +
            '\n' +
            `Response Body: ${JSON.stringify(response)}`,
        );
      }),
      catchError((error) => {
        this.myLogger.error(
          `Request failed - ${method} ${url} - ${error.message}`,
        );
        throw error;
      }),
    );
  }
}
