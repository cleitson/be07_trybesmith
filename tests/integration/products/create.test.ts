import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model'
import app from '../../../src/app'
import productsMock from '../../mocks/productsMock';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Deve retornar status 201 quando for inserido um produto valido',async function() {

    sinon.stub(ProductModel, 'findOne').resolves(ProductModel.build({
      id: 5,
      name: "Harpa de Dagda",
      price: "15 peças de ouro",
      orderId: 3
    }))
    sinon.stub(ProductModel, 'create').resolves(ProductModel.build(productsMock.createdProduct))
    const response = await chai.request(app).post('/products').send(productsMock.insertProduct);    

    expect(response.status).to.be.equal(201);
  });

  it('Deve retornar status 400 quando tentar inserir um produto invalido', async function(){
    const response = await chai.request(app).post('/products').send(productsMock.invalidProduct);    

    expect(response.status).to.be.equal(400);
  });
  it('Deve retornar status 404 quando inserido orderId invalido', async function(){
    sinon.stub(ProductModel, 'findOne').resolves(null)
    const response = await chai.request(app).post('/products').send(productsMock.invalidOrderProduct);    

    expect(response.status).to.be.equal(404);
  })
});
