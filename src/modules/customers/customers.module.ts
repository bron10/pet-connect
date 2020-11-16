import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import {customerProviders} from './customers.providers';
import { CustomersController } from './customers.controller';
@Module({
  providers: [CustomersService, ...customerProviders],
  controllers: [CustomersController]
})
export class CustomersModule {}
