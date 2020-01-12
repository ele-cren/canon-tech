import React, { useState } from 'react'
import NewPostHeading from '../components/NewPost/NewPostHeading'
import NewPostInfos from '../components/NewPost/NewPostInfos'
import NewPostReview from '../components/NewPost/NewPostReview'

const NewPost = () => {
  const [infos, setInfos] = useState({
    title: '',
    year: 1970,
    author: '',
    rate: 0
  })
  const [currentGenre, setGenre] = useState('')
  const [cats, setCategories] = useState([])
  return (
    <div className="NewPost__container">
      <h2 className="font-roboto">Nouveau document</h2>
      <NewPostHeading infos={infos} setInfos={setInfos} />
      <NewPostInfos cats={cats} currentGenre={currentGenre} setGenre={setGenre}  setCategories={setCategories} />
      <NewPostReview />
    </div>
  )
}

export default NewPost
