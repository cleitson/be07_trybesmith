import { Router } from 'express';
import productController from '../controller/products.controller';

const productRoute = Router();

productRoute.get('/', productController.allProducts);

export default productRoute;