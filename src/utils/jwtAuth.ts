import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET ?? 'secret';

const newToken = (id:number, user:string):string => {
  const token = jwt.sign({
    id,
    user,
  }, secret);
  return token;
};
const verifyToken = (tokenstring:string):string | jwt.JwtPayload => {
  const token = jwt.verify(tokenstring, secret);
  return token;
};

export default {
  newToken,
  verifyToken,
};