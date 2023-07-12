import React, { useState } from 'react'

const Input = ({ inputType, inputvalue,name,inputPlaceholder,fieldChange,pattern,fieldErrorMessage }) => {
       
     const [isValidPattern,setisValidPattern]=useState(null)
    const handleData=(e)=>{
        fieldChange(e)
        setisValidPattern(new RegExp(pattern))
    }
    return (
        <>
        <input type={inputType} className='form-control mt-3' value={inputvalue} id={name} onChange={handleData} placeholder={inputPlaceholder}  />

        {
            (isValidPattern!==null) && !isValidPattern && <span>{fieldErrorMessage}</span>
        }
        </>
    )
}

export default Input