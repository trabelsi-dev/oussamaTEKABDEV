import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeModule } from './time/time.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  // NOTE :I put the configuration in this file we can put in another separate file will be more better
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root123*',
    database: 'nest',
    entities: [
      'dist/**/**.entity.js',
    ],
    synchronize: true,
  }),TimeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
