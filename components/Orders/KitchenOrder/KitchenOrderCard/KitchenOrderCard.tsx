import { FC } from 'react'
import { KitchenOrderBody } from '../KitchenOrderBody/KitchenOrderBody'
import { KitchenOrderButton } from '../KitchenOrderButton/KitchenOrderButton'
import { KitchenOrderHeader } from '../KitchenOrderHeader/KitchenOrderHeader'
import { KitchenOrderTotal } from '../KitchenOrderTotal/KitchenOrderTotal'

const KitchenOrderCard:FC = () => {
  return (
    <div className='card-body'>
      <KitchenOrderHeader />
      <KitchenOrderBody />
      <KitchenOrderTotal />
      <KitchenOrderButton />
    </div>
  )
} 

export default KitchenOrderCard