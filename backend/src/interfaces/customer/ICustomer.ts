interface ICustomerBase {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: string;
}

export interface ICustomer extends ICustomerBase {
  dataValues?: ICustomerBase;
}
