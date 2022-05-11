import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyAirtableModule } from './my-airtable/my-airtable.module';
import envVar from './config/env-var';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envVar],
      isGlobal: true,
    }),
    MyAirtableModule.forRoot({
      apiKey: 'key1QcA9KchdlhatF',
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
