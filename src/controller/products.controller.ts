import { Request, Response } from 'express';
import ProductsService from '../service/products.service';
import httpMap from '../utils/httpMap';

const allProducts = async (_req: Request, res: Response): Promise<void> => {
  const { status, data } = await ProductsService.getAllProducts();
  res.status(httpMap(status)).json(data);
};

export default {
  allProducts,
};