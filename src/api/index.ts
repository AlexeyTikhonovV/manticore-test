import { Router } from 'express';
import post from './post/index';

const router = Router();

router.use('/posts', post);

export default router;