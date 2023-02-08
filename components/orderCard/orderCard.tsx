import React, { useEffect, useState } from 'react'
import styles from '../../styles/orderCard.module.css'
import { getAllProducts, getOneOrder } from 'apii';
import { Order, Product } from 'interfaces';
import { useQuery } from 'react-query';
import { set } from 'react-hook-form';

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
    const [data, setData] = useState<Order>();

    // const { data } = useQuery<Order | null>(
    //   ['GET_ONE_ORDER'],
    //   () => getOneOrder(JSON.parse(sessionStorage.getItem('order'))),
    //   {
    //     refetchOnWindowFocus: false,
    //   }
    // );

    const orderActual = async( data: any) => {
      const formData = new FormData();
      formData.append('id', data);
      await getOneOrder(formData).then( response => {
        console.log(response);
        setData(response);
        let cont = 0;
        response.order_Produdct.map( resp => {
          cont = resp.price + cont;
        })
        setTotal(cont);
      });
    }
    useEffect(() => {
      //console.log(JSON.parse(sessionStorage.getItem('order')));
      orderActual(JSON.parse(sessionStorage.getItem('order')));
      //console.log(JSON.parse(sessionStorage.getItem('order')), 'ajoi')
        //let cont = 0;
        //console.log(data, 'hola')
        // orders.map(({ price, quantity}) => {
        //     cont = (price*quantity) + cont;
        // });
        // setTotal(cont);
      }, []);

  return (
    <div className={styles.containerOrders}>
        <p className={styles.total}>Total Price: {total}$</p>
        {/* {console.log(data)} */}
    {data?.order_Produdct?.map(({ description, name, price }, index) => {
        return (
            <div className={styles.container} key={index}>
            <div className={styles.imageContainer}></div>
            <div className={styles.descriptionContainer}>
              <p className={styles.title}>{name}</p>
              <p className={styles.price}>{description}</p>
            </div>
            <div className={styles.quantityTotalContainer}>
              <p className={styles.quantity}>{price}$</p>
            </div>
            <div className={styles.quantityTotalContainer}>
              {/* <p className={styles.total}>{price*quantity}$</p> */}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default OrderCard;
