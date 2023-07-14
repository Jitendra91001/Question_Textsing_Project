import React from 'react'
import Label from '../Label/Label'

const CheckBox = ({checkbox,onChange}) => {
  return (
    <>
    {
        checkbox.map((ele,index)=>(
            <>
                <Label htmlData={ele.value} labelData={ele.label}/>&nbsp;
            <input type='checkbox' value={ele.value} onChange={onChange}/>&nbsp;&nbsp;
            </>
        ))
    }
    </>
  )
}

export default CheckBox