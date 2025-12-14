import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { APP_VERSION } from './utils/version';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger } from 'nestjs-pino';
import { apiReference } from '@scalar/nestjs-api-reference';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const config = await app.resolve(ConfigService);

  // Enable CORS
  app.enableCors({
    origin: ['http://0.0.0.0:5173', 'http://localhost:5173'],
  });

  // Set up logger
  const logger = app.get(Logger);

  app.useLogger(logger);

  // Swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The API description')
    .setVersion(APP_VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);

  // Scalar Configuration
  app.use(
    '/docs',
    apiReference({
      withFastify: true,
      title: 'API Documentation',
      content: document,
    }),
  );

  await app.listen({
    port: config.get('PORT', 3000),
    host: '0.0.0.0',
  });

  logger.log(`Application v${APP_VERSION} is running on: ${await app.getUrl()}`);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
