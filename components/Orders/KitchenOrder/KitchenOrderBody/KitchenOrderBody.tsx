import { useEffect } from "react"
import { KitchenOrderItem } from "../KitchenOrderItem/KitchenOrderItem"

export const KitchenOrderBody = ({ items }) => {
  useEffect(() => {
    
  }, [items])
  
  return (
    <div className='orders-list'>
      {
        items.map((item, index) => 
          <KitchenOrderItem key={index} name={ item.name } price={item.price} description={item.description} />  
        )
      }
    </div>
  )
}
