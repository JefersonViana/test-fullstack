import CustomerModel from '../models/CustomerModel';

export default class CustomerService {
  public model = new CustomerModel;

  public async getAllCustomers() {
    const serviceReponse = await this.model.getAllCustomers();
    return { status: 'SUCCESSFUL', data: serviceReponse };
  }
}