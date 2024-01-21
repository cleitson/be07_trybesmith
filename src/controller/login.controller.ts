import { RequestHandler } from 'express';
import loginService from '../service/login.service';
import httpMap from '../utils/httpMap';

const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body;
  const { status, data } = await loginService.login(username, password);

  res.status(httpMap(status)).json(data);
};

export default {
  login,
};