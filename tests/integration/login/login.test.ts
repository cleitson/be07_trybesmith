import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Deve retornar status 400 quando não enviar usuario', async function(){
    const response = await chai.request(app).post('/login').send({ password: 'eqwead'})
    expect(response.status).to.be.equal(400);
  })
  it('Deve retornar status 400 quando não enviar usuario', async function(){
    const response = await chai.request(app).post('/login').send({ username: 'eqwead'})
    expect(response.status).to.be.equal(400);
  })
});
