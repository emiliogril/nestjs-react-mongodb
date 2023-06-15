import { Controller, Get, Post, Delete, Put, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.finAll();
  }
  @Get('id')
  findOne() {
    return 'Get one tasks';
  }

  @Post()
  create(@Body() body: any) {
    console.log(body);
    return 'Create tasks';
  }

  @Delete('id')
  delete() {
    return 'Delete task';
  }

  @Put('id')
  update() {
    return 'Update task';
  }
}
