import { Module } from '@nestjs/common'
import { CoronasController } from './coronas.controller'
import { CoronasService } from './coronas.service';

@Module({
  controllers: [CoronasController],
  providers: [CoronasService],
})
export class CoronasModule {}
