import { Controller, Get, Post, Body } from '@nestjs/common';
import { TypeService } from './type.service';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Get('list')
  async findAll() {
    return this.typeService.findAll();
  }

}
