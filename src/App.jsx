import { useState } from 'react';
import './App.css';
import image1 from "./images/image1.jpg"
import spinner from "./images/ReloadSpinnerTransparent.gif"
import checkMark from "./images/check-mark.png"

const HEIGHT = window.innerHeight
console.log("height is :", HEIGHT)

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [guid, setGuid] = useState("")
  const [validationError, setValidationError] = useState(false)
  const [success, setSuccess] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    console.log("submitted")
    const pattern = /^[0-9]{8}-[a-zA-Z]{4}-[a-zA-Z]{4}-[a-zA-Z]{4}-[a-zA-Z]{12}$/
    //remove any validation error that was already displaying to have a good user experience
    setValidationError(false)
    
    //starting the submission process of 2seconds
    setSubmitted(true)
    setTimeout(()=>{
      setSubmitted(false)
      if(pattern.test(guid.trim()))
      {
        setSuccess(true)
      }
      else 
      {
        setValidationError(true)
      }
    }, 2000)
  }

  
  function handleInputChange(event){
    //remove the tickMark and any validation error if it was displayed
    if(validationError)
    {
      setValidationError(false)
    }
    if(success)
    {
      setSuccess(false)
    }
    setGuid(event.target.value)  
  }

  return (
    <div className='container'>
      <div className='leftCol'>
        <div className='formContainer'>
          
          {/* The GUID Form */}
          <form action = "#" onSubmit={handleSubmit}>
            <div className = "labelError">
              <p>Enter a valid GUID here</p>
              
              {validationError && (
                <div className='error'>
                  <p>Invalid GUID</p>
                </div>
              )}
            </div>
            <input type="text" placeholder='Enter GUID' value = {guid} onChange={handleInputChange}/>
            
            {/* custom submit button for form with spinner and tick Mark logic */}
            <button type = "submit" className='submitButton'>
              <div 
                style = {{
                  marginLeft : "-5%", 
                  visibility : (!submitted && !success) ? "hidden" : "", 
                  display : "flex", 
                  width : "50%", 
                  height : "60%", 
                  justifyContent: "center", 
                  alignItems : "center" 
                }}>
                <img src= {!success ? spinner : checkMark} style = {{width : "85%", height : "85%",}} alt="loadingIcon" />
              </div>
              <div>
                Submit
              </div>
            </button>
          </form>
        </div>
        {/* box 3 */}
        <div className='box3'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex lectus, eleifend eget odio at, aliquam convallis augue. Etiam eros lacus, mattis eget urna vulputate, rutrum fringilla dolor. Proin nunc erat, feugiat quis metus sed, porta vulputate sem. Integer ut eros aliquam, facilisis quam et, feugiat felis. Nunc auctor eros at risus consequat,</p>
        </div>
      </div>
      
      {/* the right column for the image */}
      <div className='rightCol' >
        <div className = "box1">
          <img src= {image1} alt="scenery" />
        </div>
      </div>
    </div>
  );
}

export default App;
