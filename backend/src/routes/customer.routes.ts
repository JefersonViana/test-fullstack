import { Router, Response, Request } from 'express';
import CustomerController from '../controller/CustomerController';

const customerController = new CustomerController();

const router = Router();

router.get('/', (req: Request, res: Response) => customerController.getAllCustomers(req, res));

router.post(
  '/',
  (req: Request, res: Response) => customerController.createCustomer(req, res)
);

router.put('/:id', (req: Request, res: Response) => customerController.updateCustomer(req, res));

export default router;
