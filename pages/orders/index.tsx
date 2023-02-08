/* eslint-disable react-hooks/rules-of-hooks */
//react
import  { useEffect, useState } from 'react'
//next
import { NextPage } from 'next'
//api
import { getAllOrders } from 'apii/orders'
import { useQuery } from 'react-query'
//components
import { Layout } from 'components/layout'
import KitchenOrderCard from 'components/Orders/KitchenOrder/KitchenOrderCard/KitchenOrderCard'
import { SidebarBody } from 'components/Orders/SidebarOrder/SidebarBody/SidebarBody'
import { Order } from 'interfaces/orders'


const index: NextPage = () => {
 // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading } = useQuery<Order[] | null>(['ALL_ORDERS'], () => getAllOrders());
  
  useEffect(() => {
    console.log(data)
  }, [data])
 
  if (isLoading) {
    return<h1>Is loading...</h1>
  } 
  
  return (
    <Layout>
      <div className='orders-wrapper'>
        <SidebarBody />
        <div className='tickets-wrapper'>
          <div className='title-container'>
            <h1 className='page-title'>Orders</h1>
          </div>
          {
            data?.map((order, i) => {
              return <KitchenOrderCard key={ i } order={order} />
            })
         }
        </div>
      </div>
    </Layout>
   )
}

export default index