import { createContext, useState } from 'react';
import './App.css';
import image1 from "./images/image1.jpg"
import spinner from "./images/ReloadSpinnerTransparent.gif"
import checkMark from "./images/check-mark.png"
import Form from './components/Form';

export const AppContext = createContext()

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [guid, setGuid] = useState("")
  const [validationError, setValidationError] = useState(false)
  const [success, setSuccess] = useState(false)

  return (
    <AppContext.Provider value = {{setValidationError,setSubmitted,guid,setSuccess,validationError,setGuid,success,spinner,checkMark,submitted}}>
      <div className='container'>
        <div className='leftCol'>
          {/* Box 1 */}
          <Form/>
          {/* box 3 */}
          <div className='box3'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex lectus, eleifend eget odio at, aliquam convallis augue. Etiam eros lacus, mattis eget urna vulputate, rutrum fringilla dolor. Proin nunc erat, feugiat quis metus sed, porta vulputate sem. Integer ut eros aliquam, facilisis quam et, feugiat felis. Nunc auctor eros at risus consequat,</p>
          </div>
        </div>
        {/* Box 1 */}
        <div className='rightCol' >
          <div className = "box1">
            <img src= {image1} alt="scenery" />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
