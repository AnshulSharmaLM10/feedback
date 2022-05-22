import React from 'react';
import { useState } from 'react';
import Header from './component/header';
import FeedbackList from './component/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './component/FeedbackStats';
import FeedbackForm from './component/FeedbackForm';
import { v4 as uuidv4} from 'uuid';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete this Feedback")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
 
  const addFeedback = (newFeedback) => {
     newFeedback.id = uuidv4();
     setFeedback([newFeedback, ...feedback])
  }

  return ( 
     <>
     <Header />
     <div>
       <FeedbackForm handleAdd={addFeedback}/>
       <FeedbackStats feedback={feedback} />
       <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>  
     </div>
     
     </>
  );
}

export default App;
