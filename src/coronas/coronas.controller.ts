import { Controller, Get } from '@nestjs/common'
import { CoronasService } from './coronas.service'

@Controller('coronas')
export class CoronasController {
  constructor(protected readonly coronaServices: CoronasService) {}

  @Get()
  getAllCoronas() {
    return this.coronaServices.getAllCoronas()
  }
}
