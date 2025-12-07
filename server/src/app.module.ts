import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { RouterModule } from '@nestjs/core';
import { LoggerModule } from 'nestjs-pino';
import { PrettyOptions } from 'pino-pretty';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HealthModule,
    RouterModule.register([
      {
        path: 'health',
        module: HealthModule,
      },
    ]),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      ignoreEnvVars: false,
      cache: true,
      isGlobal: true,
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        redact: ['request.headers.authorization'],
        transport: {
          target: 'pino-pretty',
          options: {
            ignore: 'req.headers,res,pid,hostname,context,responseTime',
            colorize: true,
            singleLine: true,
            levelFirst: true,
            sync: true,
            translateTime: 'yyyy-MM-dd\'T\'HH:mm:ss.l\'Z\'',
          } as PrettyOptions,
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
