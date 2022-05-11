import { Controller, Get, ParseArrayPipe, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('requireFields', ParseArrayPipe) requireFields: string[]) {
    return this.appService.getDataFromAirtable(requireFields);
  }

  @Post()
  async createDataToAirtable() {
    const createResult = await this.appService.addDataToAirtable();
    return createResult;
  }
}
