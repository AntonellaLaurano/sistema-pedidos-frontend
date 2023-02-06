//react
import  { useEffect } from 'react'
//next
import { NextPage } from 'next'
//api
import { getAllOrders } from 'api/orders'
import { useQuery } from 'react-query'
//components
import { Layout } from 'components/layout'
import KitchenOrderCard from 'components/Orders/KitchenOrder/KitchenOrderCard/KitchenOrderCard'
import { SidebarBody } from 'components/Orders/SidebarOrder/SidebarBody/SidebarBody'


const index: NextPage = () => {
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const { data } = useQuery<any[] | null>(
		['ALL_ORDERS'],
    () => getAllOrders(),
    {
      refetchOnWindowFocus: false,
    }
  );
  
  useEffect(() => {
    console.log(data);
  }, [data])
  

  return (
    <Layout>
      <div className='orders-wrapper'>
        <SidebarBody />
        <div className='tickets-wrapper'>
          <div className='title-container'>
            <h1 className='page-title'>Orders</h1>
          </div>
          <KitchenOrderCard />
          <KitchenOrderCard />
          <KitchenOrderCard />
          <KitchenOrderCard />
          <KitchenOrderCard />
        </div>
      </div>
    </Layout>
   )
}

export default index