import { describe, it, expect, beforeAll } from 'vitest';
import { TestBed } from '@suites/unit';
import { HealthService } from '../../../../src/modules/health/health.service';

describe('Unit :: HealthService', () => {
  let service: HealthService;

  beforeAll(async () => {
    const { unit } = await TestBed.solitary(HealthService).compile();

    service = unit;
  });

  it('should return health status with OK and version', () => {
    const result = service.getStatus();
    expect(result).toHaveProperty('status', 'OK');
    expect(result).toHaveProperty('version');
  });
});
