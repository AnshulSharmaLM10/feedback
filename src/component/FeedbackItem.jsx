function FeedbackItem({item, handleDelete}) {
  return (
    <div className='card'>
      <div className='num'>{item.rating}</div>
      <button className='buttonx' onClick={() => handleDelete(item.id)} >x</button>
      <div className='text-display'>{item.text}</div>
    </div>
  )
}

export default FeedbackItem;