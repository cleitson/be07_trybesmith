import { Router } from 'express';
import productController from '../controller/products.controller';

const productRoute = Router();

productRoute.get('/', productController.allProducts);

productRoute.post('/', productController.newProduct);

export default productRoute;