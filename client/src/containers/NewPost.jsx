import React from 'react'
import NewPostHeading from '../components/NewPost/NewPostHeading'
import NewPostInfos from '../components/NewPost/NewPostInfos'
import NewPostReview from '../components/NewPost/NewPostReview'

const NewPost = (props) => {
  return (
    <div className="NewPost__container">
      <h2 className="font-roboto">Nouveau document</h2>
      <NewPostHeading />
      <NewPostInfos />
      <NewPostReview />
    </div>
  )
}

export default NewPost
