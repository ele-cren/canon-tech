import React from 'react'

const Item = (props) => {
  return (
    <div className="Item__container">
      <img src={props.img} alt="item" />
      <div className="Item__title">{props.title}</div>
      <div className="Item__author">{props.author}</div>
    </div>
  )
}

export default Item
