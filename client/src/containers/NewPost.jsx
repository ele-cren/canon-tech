import React, { useState } from 'react'
import NewPostHeading from '../components/NewPost/NewPostHeading'
import NewPostInfos from '../components/NewPost/NewPostInfos'
import NewPostReview from '../components/NewPost/NewPostReview'

const NewPost = (props) => {
  const [infos, setInfos] = useState({
    title: '',
    year: 1970,
    author: '',
    rate: 0
  })
  return (
    <div className="NewPost__container">
      <h2 className="font-roboto">Nouveau document</h2>
      <NewPostHeading infos={infos} setInfos={setInfos} />
      <NewPostInfos />
      <NewPostReview />
    </div>
  )
}

export default NewPost
