import { Sequelize } from 'sequelize';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { StatusResponse } from '../types/StatusResponse';

const getAllOrders = async (): Promise<StatusResponse<OrderSequelizeModel[]>> => {
  const findAll = await OrderModel.findAll({ 
    include: [
      { model: ProductModel,
        as: 'productIds',
        attributes: [],
      },
    ],
    raw: true,
    attributes: [
      'id',
      'userId',
      [Sequelize.literal('JSON_ARRAYAGG(productIds.id)'), 'productIds']],
    group: ['id'],
  });

  return { status: 'SUCCESS', data: findAll };
};

export default {
  getAllOrders,
};