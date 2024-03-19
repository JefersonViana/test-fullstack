import { Router, Response, Request } from 'express';
import CustomerController from '../controller/CustomerController';

const customerController = new CustomerController();

const router = Router();

router.get('/', (req: Request, res: Response) => customerController.getAllCustomers(req, res));

export default router;
