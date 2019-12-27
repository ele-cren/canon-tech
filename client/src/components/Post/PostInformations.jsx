import React from 'react'

const PostInformations = (props) => {
  const genres = props.genres.map((x, i) => {
    return <div key={i} className="PostInformations__information PostInformations__genre">{x}</div>
  })
  return (
    <div className="PostInformations__container">
      <div className="PostInformations__title">Informations</div>
      <div className="PostInformations__infos-container">
        <div className="PostInformations__information PostInformations__category">{props.category}</div>
        {genres}
      </div>
    </div>
  )
}

export default PostInformations
