import { Request, Response } from "express";
import CustomerService from "../service/Customer.service";

export default class CustomerController {
  public service = new CustomerService;

  public async getAllCustomers(req: Request, res: Response) {
  const { data } = await this.service.getAllCustomers();
    return res.status(200).json(data);
  }

  public async createCustomer(req: Request, res: Response) {
    // const { data } = await this.service.createCustomer(req.body.payload);
    const { data } = await this.service.createCustomer(req.body);
    return res.status(201).json(data);
  }

  public async updateCustomer(req: Request, res: Response) {
    const { data } = await this.service.updateCustomer(req.params.id, req.body);
    // const { data } = await this.service.updateCustomer(req.params.id, req.body.payload);
    return res.status(200).json(data);
  }
}