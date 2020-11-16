import { Injectable, Inject } from '@nestjs/common';
import { Customer } from './customers.entity';
import { CustomerDto, CustomerQueryDto } from './customers.dto';
import { CUSTOMER_REPOSITORY } from '../../core/constants';
import {Op} from 'sequelize';

@Injectable()
export class CustomersService {

  constructor(@Inject(CUSTOMER_REPOSITORY) private readonly customerRepository: typeof Customer) { }

    /**
     * 
     * @param object 
     */
    async findAll({email, petExperience, name, state} : CustomerQueryDto): Promise<Customer[]> {
      const prepareContraints:any = [];
      if(email){
        prepareContraints.push({email})
      }
      if(petExperience){
        prepareContraints.push({petExperience : petExperience.toUpperCase()})
      }
      if(name){
        prepareContraints.push({firstName : name})
        prepareContraints.push({lastName : name})
      }
      if(state){
        prepareContraints.push({state})
      }
      return await this.customerRepository.findAll<Customer>({
        where : {
          [Op.or] : prepareContraints
        }
      });
    }
    
}
