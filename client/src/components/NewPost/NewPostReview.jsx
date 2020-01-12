import React from 'react'

const NewPostReview = (props) => {
  const { infos } = props
  const handleChange = (event) => {
    props.setInfos({
      [event.target.name]: event.target.value
    })
  }
  return (
    <div className="NewPostReview__container">
      <div className="NewPostReview__label">Écrivez votre avis</div>
      <textarea value={infos.review} onChange={handleChange} name="review" id="review" className="NewPostReview__review"></textarea>
    </div>
  ) 
}

export default NewPostReview
