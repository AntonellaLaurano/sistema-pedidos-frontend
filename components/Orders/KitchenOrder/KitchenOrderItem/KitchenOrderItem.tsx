export const KitchenOrderItem = () => {
  return (
    <div className='item-body'>
      <div className='items-body'>
        <div className='description-body'>
          <img  className='item-image'
                src='https://betony-nyc.com/wp-content/uploads/2021/03/17-foods-that-start-with-a-anchovies.jpg'
                alt='Order dish' />
          <div className='kitchen-order-items-description-container'>
              <span className='dish-title'>Spicy food</span>
              <span className='dish-price'>$2.99</span>
          </div>
        </div>
        <div className="item-quantity">
          2
        </div>
        <span className="item-price" style={{ justifySelf: "end" }}>$4.58</span>
      </div>
      <input className='item-description' disabled defaultValue="Please, just a little bit spicy only"/> 
    </div>
  )
}
