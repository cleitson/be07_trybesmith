import { Request, Response } from 'express';
import ProductsService from '../service/products.service';
import httpMap from '../utils/httpMap';

const allProducts = async (_req: Request, res: Response): Promise<void> => {
  const { status, data } = await ProductsService.getAllProducts();
  res.status(httpMap(status)).json(data);
};

const newProduct = async (req: Request, res: Response): Promise<void> => {
  const { name, price, orderId } = req.body;
  const { status, data } = await ProductsService.insertProduct(name, price, orderId);
  res.status(httpMap(status)).json(data);
};

export default {
  allProducts,
  newProduct,
};