const allProductsMock = [
  {
    id: 1,
    name: "Excalibur",
    price: "10 peças de ouro",
    orderId: 1
  },
  {
    id: 2,
    name: "Espada Justiceira",
    price: "20 peças de ouro",
    orderId: 1
  }
]

const insertProduct = {
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 3
}
const createdProduct = {
  id: 6,
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 3
}
const invalidProduct = {
  price: "30 peças de ouro",
  orderId: 3
}
const invalidOrderProduct = {
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 5
}
export default {
  allProductsMock,
  insertProduct,
  createdProduct,
  invalidProduct,
  invalidOrderProduct,
}