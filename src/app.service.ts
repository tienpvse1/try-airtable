import { Injectable } from '@nestjs/common';
import { AirTableService } from './my-airtable/air-table.service';

@Injectable()
export class AppService {
  constructor(private airTableService: AirTableService) {}

  async getDataFromAirtable(requireFields: string[]) {
    const fromTable = await this.airTableService
      .table('Table 2')
      .select({
        fields: requireFields,
        view: 'Grid view',
      })
      .all();

    const result = fromTable.map((item) => {
      return requireFields.reduce((acc, key) => {
        acc[key] = item.fields[key];
        return acc;
      }, {});
    });
    return result;
  }

  async addDataToAirtable() {
    const items = await this.airTableService.table('Bugs').select({
      view: 'Bugs by priority',
    });
    // console.log(items);
    return items;
    // return this.airTableService.table('Bugs').create({
    //   Description: 'testing func',
    //   Status: 'Complete',
    //   New: 'Yes',
    // });
  }
}
