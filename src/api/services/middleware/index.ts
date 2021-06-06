import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import cache from "memory-cache";

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

export const checkAndSetPostsInCache = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const postsInCache = cache.get('posts');
		if (postsInCache) return next();

		const { data } = await axios.get(postsUrl);
		cache.put('posts', data, 1000);
		return next();
	} catch (err) {
		return res.json(err);
	}
};
