import { useState } from 'react';
import Button from './Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({handleAdd}) {
 const [text, setText] = useState('');
 const [btnDisabled, setBtnDisabled] = useState(true);
 const [message, setMessage] = useState('');
 const [versionColor, setVersion] = useState('btn-secondary');
 const [rating, setRating] = useState(0)

 const handleTextChange = (e) => {
     if(text === ''){
         setBtnDisabled(true);
         setMessage(null);
         setVersion('btn-secondary')
     } else if(text !== '' && text.trim().length <=10 ) {
         setMessage("Feedback must atleast contain 10 characters");
         setBtnDisabled(true);
         setVersion('btn-secondary');
     }
     else{
        setBtnDisabled(false);
        setMessage(null);
        setVersion('btn btn-primary')
     }
     setText(e.target.value);
 }

 const handleSubmit = (e) => {
    e.preventDefault();
    if(rating === 0){
        window.alert("Oops you forgot to select rating");
    }
    else {
        const newFeedback = {
            text,
            rating
        }
        handleAdd(newFeedback);
        setText('');
        setRating(null);
    }
 }
  return (
    <form  className='formContainer' onSubmit={handleSubmit}>
       <div>
          <h2>How would you rate our service with us?</h2>
          <RatingSelect select={(rating) => setRating(rating)}/>
          <div className='textBox' >
             <textarea onChange={handleTextChange} type="text" placeholder="Write Review" value={text} cols="50" rows="10"></textarea>
             <Button type="submit" isDisable={btnDisabled} version={versionColor}><span>Submit</span></Button>
          </div>
       </div>
       {message && <div className='message'>{message}</div>}
    </form>
  )
}

export default FeedbackForm;