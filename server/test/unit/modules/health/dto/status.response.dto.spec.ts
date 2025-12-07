import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { HealthStatusResponseDto } from '../../../../../src/modules/health/dto/status.response.dto';
import { describe, it, expect } from 'vitest';
import { validateProperty } from 'test/utils/mock.util';
import { makeHealthStatus } from 'test/factory/health.factory';

describe('Modules :: Health :: DTO :: HealthStatusResponseDto', () => {
  const validateAttr = validateProperty(
    HealthStatusResponseDto,
    makeHealthStatus.build(),
  );

  it('should be instance of HealthStatusResponseDto and have fields', () => {
    const input = makeHealthStatus.build();
    const dto = plainToInstance(HealthStatusResponseDto, input);
    expect(dto).toBeInstanceOf(HealthStatusResponseDto);
    Object.keys(dto).forEach((attr) => {
      expect((dto as any)[attr]).toBe(input[attr]);
    });
  });

  describe('status', () => {
    it('should be string', async () => {
      await validateAttr('status', 1, ['isString']);
    });
    it('should not be empty', async () => {
      await validateAttr('status', '', ['isNotEmpty']);
    });
  });

  describe('version', () => {
    it('should be string', async () => {
      await validateAttr('version', 1, ['isString']);
    });
    it('should not be empty', async () => {
      await validateAttr('version', '', ['isNotEmpty']);
    });
  });
});
