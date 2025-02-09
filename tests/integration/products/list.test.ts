import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model'
import app from '../../../src/app'
import productsMock from '../../mocks/productsMock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('deve retornar todos os produtos', async function(){
    sinon.stub(ProductModel, 'findAll').resolves(ProductModel.bulkBuild(productsMock.allProductsMock))
    const response = await chai.request(app).get('/products');

    expect(response.status).to.be.equal(200);

  });
});
