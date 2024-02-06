import { Module } from '@nestjs/common';
import { ConfigureModule } from './infrastructure/configure/configure.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [ConfigureModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
