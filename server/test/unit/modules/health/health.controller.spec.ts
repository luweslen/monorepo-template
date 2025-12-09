import { describe, it, expect, beforeAll, Mocked } from 'vitest';
import { TestBed } from '@suites/unit';
import { HealthController } from '../../../../src/modules/health/health.controller';
import { HealthService } from '../../../../src/modules/health/health.service';
import { makeHealthStatus } from 'test/utils/factories/health.factory';

describe('Unit :: HealthController', () => {
  let controller: HealthController;
  let service: Mocked<HealthService>;

  beforeAll(async () => {
    const { unit, unitRef } = await TestBed.solitary(
      HealthController,
    ).compile();

    controller = unit;
    service = unitRef.get(HealthService) as any as Mocked<HealthService>;
  });

  it('should return health status', () => {
    service.getStatus.mockReturnValue(makeHealthStatus.build());

    const result = controller.getStatus();

    expect(result).toHaveProperty('status');
    expect(result).toHaveProperty('version');
    expect(service.getStatus).toHaveBeenCalledOnce();
  });
});
