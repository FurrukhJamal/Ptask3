import React, { useContext } from 'react'
import "../css/form.css"
import { AppContext } from '../App'

function Form() {
    const{
        setValidationError, 
        setSubmitted, 
        guid, 
        setSuccess, 
        validationError,
        setGuid, 
        success, 
        spinner, 
        checkMark,
        submitted} = useContext(AppContext)
    
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
            <input {...(submitted && { disabled: true })} type="text" placeholder='Enter GUID' value = {guid} onChange={handleInputChange}/>
            
            {/* custom submit button for form with spinner and tick Mark logic */}
            <button {...(submitted && { disabled: true })} type = "submit" className='submitButton'>
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
  )
}

export default Form