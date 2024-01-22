import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import loginmock from '../../mocks/loginmock';
import app from '../../../src/app';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import loginService from '../../../src/service/login.service';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Deve retornar o token quando usuario valido', async function(){
    sinon.stub(UserModel, 'findOne').resolves(UserModel.build(loginmock.usuarioValido))
    sinon.stub(bcrypt, 'compare').resolves(true);
    sinon.stub(jwt, 'sign').resolves('any-token');
    const email = 'any-email@email.com'
    const password = 'any-password'
    
    const token = await loginService.login(email,password)
    console.log(token);
    
    expect(token.status).to.be.equal('SUCCESS');
  })

});
