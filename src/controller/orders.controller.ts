import { Request, Response } from 'express';
import ordersService from '../service/orders.service';
import httpMap from '../utils/httpMap';

const allOrders = async (req: Request, res: Response): Promise<void> => {
  const { status, data } = await ordersService.getAllOrders();

  res.status(httpMap(status)).json(data);
};

export default {
  allOrders,
};