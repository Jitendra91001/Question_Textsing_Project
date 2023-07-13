import React, { useState } from 'react'

const Questions = () => {
    const [NumOfQuestions,setNumOfQuestions]=useState([])

    const generateQuestions=()=>{
        setNumOfQuestions([...NumOfQuestions,0])
    }
  return (
    <>
    <div>
        <label>Questions</label>
        <input type='text' className='form-control'/>
    </div>

    {
        NumOfQuestions.map((ele,index)=>(
           <div key={index} className='ms-4'>
             <label>{String.fromCharCode(`${65+index}`)}</label>
            <input type="text" className='form-control' placeholder='Enter the Question Type'/>
           </div>
        ))
    }

    {
        (NumOfQuestions.length<4) && <button onClick={generateQuestions} className='btn btn-info m-2'>Add Options</button>
    }

    <div className=''>
        <label>Corrent Ans : </label>
        {
        NumOfQuestions.map((ele,index)=>(
           <div key={index} className='ms-4'>
             <label>{String.fromCharCode(`${65+index}`)}</label>
            &nbsp;&nbsp;&nbsp;<input type="radio" name="input" style={{height:"15px" ,width:"15px"}}/>
           </div>
        ))
    }
    </div>
    </>
  )}

export default Questions