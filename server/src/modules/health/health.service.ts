import { Injectable } from '@nestjs/common';
import { APP_VERSION } from 'src/utils/version';
import { IHealthStatus } from './health.interface';

@Injectable()
export class HealthService {
  getStatus(): IHealthStatus {
    return {
      status: 'OK',
      version: APP_VERSION,
      timestamp: new Date().toISOString(),
    };
  }
}
