import React from 'react'
import Label from '../Label/Label'

const CheckBox = ({checkbox}) => {
  return (
    <>
    {
        checkbox.map((ele,index)=>(
            <div>
                <Label htmlData={ele.value} labelData={ele.key} key={index}/>
            <input type='checkbox' value={ele.value}/>
            </div>
        ))
    }
    </>
  )
}

export default CheckBox