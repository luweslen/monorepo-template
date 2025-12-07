import { Factory } from 'rosie';
import { faker } from '@faker-js/faker';
import { HealthStatusResponseDto } from '../../src/modules/health/dto/status.response.dto';

export const makeHealthStatus = Factory.define<HealthStatusResponseDto>('HealthStatusResponseDto').attrs({
  status: () => 'OK',
  version: () => faker.system.semver(),
  timestamp: () => faker.date.recent().toISOString(),
});
