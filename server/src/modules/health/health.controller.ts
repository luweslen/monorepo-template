import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { plainToInstance } from 'class-transformer';
import { HealthStatusResponseDto } from './dto/status.response.dto';
import { ApiBadGatewayResponse, ApiOkResponse, ApiOperation, ApiServiceUnavailableResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('status')
  @ApiOperation({ summary: 'Get health status of the application' })
  @ApiOkResponse({ type: HealthStatusResponseDto })
  @ApiBadGatewayResponse({ description: 'Service is unavailable' })
  @ApiServiceUnavailableResponse({ description: 'Service is unavailable' })
  getStatus() {
    const response = this.healthService.getStatus();
    return plainToInstance(HealthStatusResponseDto, response);
  }
}
