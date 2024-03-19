import { Router } from 'express';

const router = Router();

router.use('/register', (req, res) => res.json({ ok: true }));

export default router;