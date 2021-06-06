import { Router } from 'express';
import { getAllPosts, getPostById } from './contreller';
import { checkAndSetPostsInCache } from '../services/middleware';

const router = Router();

// route api/posts
router.get('/',
	checkAndSetPostsInCache,
	getAllPosts);

router.get('/:id',
	checkAndSetPostsInCache,
	getPostById);

export default router;
