const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.street;
  const number = order.number;
  const apartment = order.apartment;
  return `Olá ${deliveryPerson}, entrega para ${name}, Telefone: ${phoneNumber}, R. ${street}, ${number}, AP ${apartment}`
}

customerInfo(order); 

const orderModifier = (order) => {
  let name = order.name;
  name = 'Luiz Silva'
  const pizzaKeys = Object.keys(order.order.pizza);
  const pizza1 = pizzaKeys[0];
  const pizza2 = pizzaKeys[1];
  const cokeZero = order.order.drinks.coke.type;
  let payment = order.payment.total;
  payment = 50;
  return `Olá ${order.name}, o total de seu pedido de ${pizza1}, ${pizza2}, e ${cokeZero}, é R$ ${payment},00`  
}

orderModifier(order);

