import SequelizeCustomer from "../database/models/SequelizeCustomers";

export default class CustomerModel {
  public model = SequelizeCustomer;

  public async getAllCustomers() {
    const data = await this.model.findAll();
    return data;
  }
}
