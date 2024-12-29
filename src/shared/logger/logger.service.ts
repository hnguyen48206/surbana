import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends Logger {
  constructor() {
    super();
    this.context = 'surbana';
  }
  setContext(mycontext: string) {
    this.context = mycontext;
  }
  error(message: any) {
    super.error(`${message}`);
  }

  warn(message: any) {
    super.warn(`${message}`);
  }

  log(message: any) {
    super.log(`${message}`);
  }

  debug(message: any) {
    super.debug(`${message}`);
  }

  verbose(message: any) {
    super.verbose(`${message}`);
  }
}
