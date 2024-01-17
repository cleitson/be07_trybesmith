import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { StatusResponse } from '../types/StatusResponse';

const getAllProducts = async (): Promise<StatusResponse<ProductSequelizeModel[]>> => {
  const findAllProducts = await ProductModel.findAll();  
  return { status: 'SUCCESS', data: findAllProducts };
};

export default {
  getAllProducts,
};