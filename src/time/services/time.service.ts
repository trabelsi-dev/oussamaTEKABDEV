import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Time } from '../entities/time.entity';
import { CreateTimeDto } from '../dto/time.dto';
import {  Body } from '@nestjs/common';
import { take } from 'rxjs';

@Injectable()
export class TimeService {
    constructor(
        @InjectRepository(Time)
        private readonly timeRepository: Repository<Time>,
    ) {}

    // get all time tracker
    async findAll(): Promise<Time[]> {
        return await this.timeRepository.find({
            order:{
                created_at:"DESC"
            }
        });
    }
    // get last row in time tracker
    async findlast() {
        return await this.timeRepository.find({
            order:{
                created_at:"DESC"               
            },                  
                take:1           
        },      
        );
    }

    async read(id: number): Promise<Time> {
        return await this.timeRepository.findOne({ where: { id } });
    }

    // create time tracker
    async create(@Body() createTimeDto: CreateTimeDto) {
        const timeEntity = new Time();
        timeEntity.title = createTimeDto.title;
        timeEntity.time = (createTimeDto.time );
        timeEntity.total = createTimeDto.total ;
        const time = this.timeRepository.create(timeEntity);
        await this.timeRepository.save(time);
        return time;
    }

}