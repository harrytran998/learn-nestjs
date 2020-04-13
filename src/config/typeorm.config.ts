import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import accessEnv from '@helpers/accessEnv'

const DB_URL = accessEnv('DB_CONNECTION_URL')

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: DB_URL,
  entities: [__dirname + '../**/*.entity.ts'],
  synchronize: true, // Dev only
}
