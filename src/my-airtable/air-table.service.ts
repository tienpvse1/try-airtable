import { Inject, Injectable } from '@nestjs/common';
import Airtable, { AirtableOptions } from 'airtable';
import { AirtableBase } from 'airtable/lib/airtable_base';

@Injectable()
export class AirTableService {
  table: AirtableBase;
  constructor(@Inject('AIR_TABLE_CONFIG') airTableConfig: AirtableOptions) {
    this.table = new Airtable(airTableConfig).base('app3ekzyiz1nEqUhK');
  }
}
