import { RequestHandler } from 'express';

const authLogin: RequestHandler = (req, res, next) => {
  const { username, password } = req.body;
  if (!username) return res.status(400).json({ message: '"username" and "password" are required' });
  if (!password) return res.status(400).json({ message: '"username" and "password" are required' });

  next();
};

export default {
  authLogin,
};