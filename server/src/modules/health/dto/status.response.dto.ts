import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

@Exclude()
export class HealthStatusResponseDto {
  @ApiProperty({
    example: 'OK',
    description: 'Health status of the application',
  })
  @IsString()
  @IsNotEmpty()
  @Expose()
  status: string;

  @ApiProperty({
    example: '1.0.0',
    description: 'Version of the application',
  })
  @IsString()
  @IsNotEmpty()
  @Expose()
  version: string;

  @ApiProperty({
    example: '2024-01-01T00:00:00.000Z',
    description: 'Timestamp of the health check',
  })
  @IsDateString()
  @IsNotEmpty()
  @Expose()
  timestamp: string;
}
