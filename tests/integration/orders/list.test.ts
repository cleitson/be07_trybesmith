import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/ordersMock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Deve retornar todas as orders', async function(){
    sinon.stub(OrderModel, 'findAll').resolves(OrderModel.bulkBuild(ordersMock.allOrdersMock))
    const response = await chai.request(app).get('/products');

    expect(response.status).to.be.equal(200);
  })
});
