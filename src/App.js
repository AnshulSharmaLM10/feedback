import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Header from './component/header';
import FeedbackList from './component/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './component/FeedbackStats';
import FeedbackForm from './component/FeedbackForm';
import { v4 as uuidv4} from 'uuid';
import AboutIcon from './component/AboutIcon';
import Aboutpage from './pages/Aboutpage';

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
    <Router>
    <Header />
    <div>
      <Routes>
         <Route exact path='/' element={
            <>
               <FeedbackForm handleAdd={addFeedback}/>
               <FeedbackStats feedback={feedback} />
               <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>  
            </>
           }
           ></Route>
         <Route path='/about' element={<Aboutpage/>} />
       </Routes>
      </div>

      <AboutIcon />
    </Router>
  );
}

export default App;
