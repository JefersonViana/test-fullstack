import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeCustomer extends Model<InferAttributes<SequelizeCustomer>,
  InferCreationAttributes<SequelizeCustomer>> {
    declare id: CreationOptional<number>;

    declare name: string;

    declare email: string;

    declare cpf: string;

    declare phone: string;

    declare status: string;
}

SequelizeCustomer.init({
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
}, {
  sequelize: db,
  modelName: 'customers',
  timestamps: false,
  underscored: true,
});


export default SequelizeCustomer;
