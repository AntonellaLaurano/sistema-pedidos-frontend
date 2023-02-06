import React, { useEffect, useState } from 'react'
import styles from '../../styles/orderCard.module.css'
import { getAllProducts, getOneOrder } from 'api';
import { Product } from 'interfaces';

const orders = [
    {
      image: '',
      name: 'Pastele Carne Mechada',
      price: 1,
      quantity: 3,
    },
    {
        image: '',
        name: 'Pastele Carne Mechada',
        price: 1,
        quantity: 3,
      },
      {
        image: '',
        name: 'Pastele Carne Mechada',
        price: 1,
        quantity: 3,
      },
      {
        image: '',
        name: 'Pastele Carne Mechada',
        price: 1,
        quantity: 3,
      },
      {
        image: '',
        name: 'Pastele Carne Mechada',
        price: 1,
        quantity: 3,
      },
      {
        image: '',
        name: 'Pastele Carne Mechada',
        price: 1,
        quantity: 3,
      },
      {
        image: '',
        name: 'Pastele Carne Mechada',
        price: 1,
        quantity: 3,
      },
    // More people...
  ]

const OrderCard = () => {
    const [total, setTotal] = useState<number>(0);
    useEffect(() => {
        let cont = 0;
        orders.map(({ price, quantity}) => {
            cont = (price*quantity) + cont;
        });
        setTotal(cont);
      }, []);
  return (
    <div className={styles.containerOrders}>
        <p className={styles.total}>Total Price: {total}$</p>
    {orders?.map(({ image, name, price, quantity }, index) => {
        return (
            <div className={styles.container} key={index}>
            <div className={styles.imageContainer}></div>
            <div className={styles.descriptionContainer}>
              <p className={styles.title}>{name}</p>
              <p className={styles.price}>{price}$</p>
            </div>
            <div className={styles.quantityTotalContainer}>
              <p className={styles.quantity}>{quantity}</p>
            </div>
            <div className={styles.quantityTotalContainer}>
              <p className={styles.total}>{price*quantity}$</p>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default OrderCard;
