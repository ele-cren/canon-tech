import React, { useState, useReducer } from 'react'
import NewPostHeading from '../components/NewPost/NewPostHeading'
import NewPostInfos from '../components/NewPost/NewPostInfos'
import NewPostReview from '../components/NewPost/NewPostReview'

const NewPost = () => {
  const [infos, setInfos] = useReducer(
    (state, newState) => ({ ...state, ...newState }), {
      title: '',
      year: 1970,
      author: '',
      rate: 0,
      review: ''
    }
  )
  const [currentGenre, setGenre] = useState('')
  const [cats, setCategories] = useState([])
  return (
    <div className="NewPost__container">
      <h2 className="font-roboto">Nouveau document</h2>
      <NewPostHeading infos={infos} setInfos={setInfos} />
      <NewPostInfos cats={cats} currentGenre={currentGenre} setGenre={setGenre}  setCategories={setCategories} />
      <NewPostReview infos={infos} setInfos={setInfos} />
      <div className="NewPost__btn-container">
        <button className="NewPost__btn">Poster</button>
      </div>
    </div>
  )
}

export default NewPost
