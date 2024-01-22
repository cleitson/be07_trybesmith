import { Router } from 'express';
import productController from '../controller/products.controller';
import productMiddleware from '../middleware/product.middleware';

const productRoute = Router();

productRoute.get('/', productController.allProducts);

productRoute.post(
  '/',
  productMiddleware.authName,
  productMiddleware.authPrice,
  productController.newProduct,
);

export default productRoute;