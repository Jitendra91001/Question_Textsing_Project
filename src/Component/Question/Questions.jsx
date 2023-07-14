import React, { useState } from 'react'

const Questions = () => {
    const [NumOfQuestions,setNumOfQuestions]=useState([])
    const [storeQuestion,setstoreQuestion]=useState(
      {
        question:'',
        opt1:{option1:'', option2:'',option3:'',option4:''},
        answer:''
      }
    )
    console.log(storeQuestion)

    const generateQuestions=()=>{
        setNumOfQuestions([...NumOfQuestions,0])
    }

    const handleQuestion=(e)=>{

      console.log(e.target.name)

      // setstoreQuestion({...storeQuestion,question:storeQuestion.question,[e.target.name]:e.target.value,...storeQuestion,option:storeQuestion.option,[e.target.name]:e.target.value,...storeQuestion,answer:storeQuestion.answer,[e.target.name]:e.target.value})

      // setstoreQuestion({...storeQuestion,question:storeQuestion.question,[e.target.name]:e.target.value,...storeQuestion.opt1,opt1:{...storeQuestion.opt1,opt1:storeQuestion.opt1.option1,[e.target.name]:e.target.value,...storeQuestion,...storeQuestion.opt1.option2,[e.target.name]:e.target.value,...storeQuestion.answer,...storeQuestion.opt1.option3,[e.target.name]:e.target.value,...storeQuestion,...storeQuestion.opt1.option4,[e.target.name]:e.target.value},...storeQuestion,answer:storeQuestion.answer,[e.target.name]:e.target.value})

      setstoreQuestion((prev)=>{
        return {...prev,[e.target.name]:e.target.value,opt1:{...prev.opt1,[e.target.name]:e.target.value}}
      })
    }
  return (
    <>
    <div>
        <label>Questions</label>
        <input type='text' onChange={handleQuestion} name="question"  className='form-control'/>
    </div>

    {
        NumOfQuestions.map((ele,index)=>(
           <div key={index} className='ms-4'>
             <label>{String.fromCharCode(`${65+index}`)}</label>
            <input type="text" onChange={handleQuestion} name={"option"+(index+1)} className='form-control' placeholder='Enter the Question Type'/>
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
            &nbsp;&nbsp;&nbsp;<input type="radio" onChange={handleQuestion} name="answer" value={String.fromCharCode(`${65+index}`)} style={{height:"15px" ,width:"15px"}}/>
           </div>
        ))
    }
    </div>
    </>
  )}

export default Questions