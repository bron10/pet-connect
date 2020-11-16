import { Customer } from './customers.entity';
import { CUSTOMER_REPOSITORY } from '../../core/constants';

export const customerProviders = [{
    provide: CUSTOMER_REPOSITORY,
    useValue: Customer,
}];