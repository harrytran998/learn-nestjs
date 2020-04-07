import { Injectable } from '@nestjs/common'

@Injectable()
export class CoronasService {
  private coronas = []

  getAllCoronas() {
    return this.coronas
  }
}
