export const KitchenOrderHeader = ({ id }) => {
  return (
   <div className='header'>
      <p className="title">order{ id }</p>
    <div className="type-body">
      <button className='type-button'>dine in</button>
      <button className='type-button'>to go</button>
      <button className='type-button'>delivery</button>    
    </div>
    <div className='tags-body' >
      <span className="tag">item</span>
      <span className="tag">qty</span>
      <span className="tag" style={{ justifySelf: "end" }}>price</span>
    </div>
    </div>    
  )
}
