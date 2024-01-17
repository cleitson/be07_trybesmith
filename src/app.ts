import express from 'express';
import productRoute from './routes/products.Routes';

const app = express();

app.use(express.json());

app.use('/products', productRoute);

export default app;
