import React from 'react'

const Label = ({htmlData,labelData}) => {
  return (
    <label htmlFor={htmlData}>{labelData}</label>
  )
}

export default Label