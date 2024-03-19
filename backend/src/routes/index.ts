import { Router } from 'express';
import customerRouter from './customer.routes';

const router = Router();

router.use('/customers', customerRouter);

export default router;