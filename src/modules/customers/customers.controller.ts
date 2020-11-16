import { Controller, Body, Get, UseGuards, Request, Query } from '@nestjs/common';
import { CustomersService } from './customers.service';
import {
  ApiBearerAuth,
  ApiOperation,
} from '@nestjs/swagger';
import { CustomerQueryDto } from './customers.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  
  /**
   * 
   * @param query query parameters contains {state, name, email, petExperience}
   */
  @ApiOperation({ summary: 'Fetch customers by `state, pet_experience, names, email`' })
  @Get()
  async customer(@Query() query : CustomerQueryDto) {
    const {state, name, email, petExperience} = query;
    return this.customersService.findAll({state, name, email, petExperience});
  }
}