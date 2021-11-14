import { Module } from '@nestjs/common'; 

import { TypeOrmModule } from '@nestjs/typeorm';
/*import { TodoController } from './controllers/todo.controller';*/
import { TimeService } from './services/time.service';
import { Time } from './entities/time.entity';
import { TimeController } from 'src/controllers/time.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Time])],
    providers: [TimeService],
   controllers: [TimeController],
})
export class TimeModule { }