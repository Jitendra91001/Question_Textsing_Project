import React from 'react'

const Select = ({option,handleChange}) => {
  return (
    <>
    <select className='form-control' onChange={handleChange}>
        {
            option.map((ele,index)=>{
                return <option key={index}  value={ele}>{ele}</option>
            })
        }
    </select>
    </>
  )
}

export default Select