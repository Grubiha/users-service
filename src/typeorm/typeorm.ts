import { registerAs } from '@nestjs/config';
import 'dotenv/config';
import { GenerateUsers1732824072478 } from 'src/migrations/1732824072478-generate-users';
import { User } from 'src/users/users.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

const config = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  migrations: [GenerateUsers1732824072478],
  // autoLoadEntities: true,
  synchronize: false,
  logging: true,
  migrationsRun: true,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
