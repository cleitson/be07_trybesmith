import express from 'express';
import productRoute from './routes/products.Routes';
import ordersRoute from './routes/orders.Routes';

const app = express();

app.use(express.json());

app.use('/products', productRoute);

app.use('/orders', ordersRoute);

export default app;
