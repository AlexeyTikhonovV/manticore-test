import cache from "memory-cache";
import { Request, Response } from 'express';

export const getAllPosts = (req: Request, res: Response) => {
	const posts = cache.get('posts');
	return res.json(posts);
};

export const getPostById = (req: Request, res: Response) => {
	const postId = Number(req.params.id);
	const posts = cache.get('posts');

	if (!posts) return res.json({ message: 'Post not found' });

	const postById = posts.find((post: { id: number; }) => post.id === postId);
	return res.json(postById);
};
