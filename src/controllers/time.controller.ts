import { Controller, Get, Post, Body } from '@nestjs/common';
import { Time } from 'src/time/entities/time.entity';
import { TimeService } from 'src/time/services/time.service';
import { CreateTimeDto } from 'src/time/dto/time.dto';

@Controller('time')
export class TimeController {
  constructor(private readonly timeService: TimeService) {}

// get all
@Get()
getAll(): Promise<Time[]> {
  return this.timeService.findAll();
}

// to get last row
@Get('/last')
findlast(): Promise<Time[]> {
  return this.timeService.findlast();
}

// create time tracker
@Post()
create(@Body() createTimeDto: CreateTimeDto): Promise<Time> {
    return this.timeService.create(createTimeDto);
}
}












