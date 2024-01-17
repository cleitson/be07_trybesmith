import ProductModel,
{ ProductSequelizeModel } from '../database/models/product.model';
import { StatusResponse } from '../types/StatusResponse';

const getAllProducts = async (): Promise<StatusResponse<ProductSequelizeModel[]>> => {
  const findAllProducts = await ProductModel.findAll();  
  return { status: 'SUCCESS', data: findAllProducts };
};

const insertProduct = async (name: string, price: string, orderId: number): 
Promise<StatusResponse<ProductSequelizeModel>> => {
  if (!name || !price || !orderId) {
    return { status: 'INVALID_DATA', data: { message: 'Dados inválidos' } };
  }

  const order = await ProductModel.findOne({ where: { orderId } });
  if (!order) return { status: 'NOT_FOUND', data: { message: 'Dados inválidos' } };

  const newProduct = await ProductModel.create({ name, price, orderId });

  return { status: 'SUCCESS', data: newProduct };
}; 

export default {
  getAllProducts,
  insertProduct,
};