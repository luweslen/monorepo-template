import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { HealthModule } from '../../../src/modules/health/health.module';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';

describe('GET /status', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HealthModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return health status', async () => {
    const response = await request(app.getHttpServer())
      .get('/status')
      .expect(200);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('version');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body.status).toBe('OK');
  });
});
