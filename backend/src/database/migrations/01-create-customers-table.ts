import { Model, QueryInterface, DataTypes } from 'sequelize';
import { ICustomer } from '../../interfaces/customer/ICustomer';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICustomer>>('customers', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('customers');
  },
};
