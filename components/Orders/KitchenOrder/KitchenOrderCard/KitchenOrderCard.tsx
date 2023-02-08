import { Order } from 'interfaces/orders'
import { FC } from 'react'
import { KitchenOrderBody } from '../KitchenOrderBody/KitchenOrderBody'
import { KitchenOrderButton } from '../KitchenOrderButton/KitchenOrderButton'
import { KitchenOrderHeader } from '../KitchenOrderHeader/KitchenOrderHeader'
import { KitchenOrderTotal } from '../KitchenOrderTotal/KitchenOrderTotal'

interface Props {
  order: Order
}

const KitchenOrderCard:FC<Props> = ({order}) => {
  return (
    <div className='card-body'>
      <KitchenOrderHeader id={order.id } />
      <KitchenOrderBody items={order.order_Produdct} />
      <KitchenOrderTotal />
      <KitchenOrderButton status={order.status} />
    </div>
  )
} 

export default KitchenOrderCard