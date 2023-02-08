export const KitchenOrderButton = ({status}) => {
  return (
    <div className='button-container'>
      { status ? <button className="check-button" > Completed </button> : <button className="check-button"> Mark as completed </button>} 
    </div>
  )
}
