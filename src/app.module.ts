import { Module } from '@nestjs/common'
import { CoronasModule } from './coronas/coronas.module';

@Module({
  imports: [CoronasModule],
})
export class AppModule {}
