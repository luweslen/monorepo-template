import { Factory } from 'rosie';
import { faker } from '@faker-js/faker';
import { IHealthStatus } from 'src/modules/health/health.interface';

export const makeHealthStatus = Factory.define<IHealthStatus>('HealthStatusResponseDto').attrs({
  status: () => 'OK',
  version: () => faker.system.semver(),
  timestamp: () => faker.date.recent().toISOString(),
});
