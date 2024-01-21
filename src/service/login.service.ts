import bcript from 'bcryptjs';
import jwtAuth from '../utils/jwtAuth';
import { StatusResponse } from '../types/StatusResponse';
import UserModel from '../database/models/user.model';

type Token = {
  token: string
};

const login = async (username:string, password: string):Promise<StatusResponse<Token>> => {
  const user = await UserModel.findOne({ where: { username } });
  if (!user) {
    return {
      status: 'UNAUTHENTICATED', data: { message: 'Username or password invalid' } };
  }
  const validPassword = await bcript.compare(password, user.dataValues.password);
  if (!validPassword) {
    return { 
      status: 'UNAUTHENTICATED', data: { message: 'Username or password invalid' } };
  }
  const token = jwtAuth.newToken(user.dataValues.id, user.dataValues.username);
  return { status: 'SUCCESS', data: { token } };
};

export default {
  login,
};