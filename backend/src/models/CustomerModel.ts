import SequelizeCustomer from "../database/models/SequelizeCustomers";

export default class CustomerModel {
  public model = SequelizeCustomer;

  public async getAllCustomers() {
    const data = await this.model.findAll();
    return data;
  }

  public async getCustomerById(id: number) {
    const data = await this.model.findByPk(id);
    return data;
  }

  public async createCustomer(payload: any) {
    const data = await this.model.create(payload);
    return data;
  }

  public async updateCustomer(payload: any) {
    const { id, ...rest } = payload;
    const data = await this.model.update(rest, { where: { id } });
    return data;
  }
}
