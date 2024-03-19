import { Request, Response } from "express";
import CustomerService from "../service/Customer.service";

export default class CustomerController {
  public service = new CustomerService;

  public async getAllCustomers(req: Request, res: Response) {
  const { data } = await this.service.getAllCustomers();
    return res.status(200).json(data);
  }
}