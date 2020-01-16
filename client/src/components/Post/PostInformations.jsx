import React from 'react'

const PostInformations = (props) => {
  const categories = props.categories.map((x, i) => {
    return <div key={i} className="PostInformations__information PostInformations__category">{x}</div>
  })
  return (
    <div className="PostInformations__container">
      <div className="PostInformations__title">Informations</div>
      <div className="PostInformations__infos-container">
        <div className="PostInformations__information PostInformations__genre">{props.genre}</div>
        {categories}
      </div>
    </div>
  )
}

export default PostInformations
