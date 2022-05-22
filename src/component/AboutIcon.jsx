import { ReactComponent as Question } from './question.svg'
import { Link } from 'react-router-dom';

function AboutIcon() {
  return (
    <div>
      <Link to='/about'>
         <Question fill="white" className='question-logo'/>
      </Link>
      
    </div>
  )
}

export default AboutIcon;