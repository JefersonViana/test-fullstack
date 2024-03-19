import CustomerModel from '../models/CustomerModel';

export default class CustomerService {
  public model = new CustomerModel;

  public async getAllCustomers() {
    const serviceReponse = await this.model.getAllCustomers();
    return { status: 'SUCCESSFUL', data: serviceReponse };
  }

  public async createCustomer(payload: any) {
    const serviceReponse = await this.model.createCustomer(payload);
    return { status: 'SUCCESSFUL', data: serviceReponse };
  }

  public async updateCustomer(id: string, payload: any) {
    const getCustomerById = await this.model.getCustomerById(Number(id));
    if (!getCustomerById) {
      return { status: 'NOT_FOUND', data: { message: 'Customer not found' } };
    }
    payload.id = Number(id);
    const serviceReponse = await this.model.updateCustomer(payload);
    return { status: 'SUCCESSFUL', data: serviceReponse };
  }
}