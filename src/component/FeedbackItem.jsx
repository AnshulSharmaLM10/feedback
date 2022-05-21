import { useState } from 'react'

function FeedbackItem() {
  const [rating, setRaiting] = useState(10);
  const [text, setText] = useState('This is feedback');

  return (
    <div className='card'>
      <div className='num'>{rating}</div>
      <div className='text-display'>{text}</div>
    </div>
  )
}

export default FeedbackItem;