import express from 'express';
import productRoute from './routes/products.Routes';
import ordersRoute from './routes/orders.Routes';
import loginRouter from './routes/login.Routes';

const app = express();

app.use(express.json());

app.use('/products', productRoute);

app.use('/orders', ordersRoute);

app.use('/login', loginRouter);

export default app;
