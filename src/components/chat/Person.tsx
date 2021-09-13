import React from 'react'

const Person = (props:any) => {
  return (
    <div className="person">
      <img src={props.image} alt="" />
      <div>
        <h5>{props.name}</h5>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Person
