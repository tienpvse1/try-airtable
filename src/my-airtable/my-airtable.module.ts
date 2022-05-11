import { DynamicModule, Module } from '@nestjs/common';
import { AirtableOptions } from 'airtable';
import { AirTableService } from './air-table.service';

@Module({})
export class MyAirtableModule {
  static forRoot(config: AirtableOptions): DynamicModule {
    return {
      module: MyAirtableModule,
      providers: [
        {
          provide: 'AIR_TABLE_CONFIG',
          useValue: config,
        },
        AirTableService,
      ],
      exports: [AirTableService],
      global: true,
    };
  }
}
