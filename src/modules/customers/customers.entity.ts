import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Customer extends Model<Customer> {
  @Column({
    primaryKey: true,  
    type: DataType.STRING,
    allowNull: false,
  })
  ID: string;
    
  @Column({
      type: DataType.STRING,
      allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
      type: DataType.STRING,
      allowNull: false,
  })
  state: string;

  @Column({
      type: DataType.ENUM,
      values: ['Y', 'N'],
      allowNull: false,
  })
  petExperience: string;
}
