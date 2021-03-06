import React, { useState, useReducer } from 'react'
import NewPostHeading from '../components/NewPost/NewPostHeading'
import NewPostInfos from '../components/NewPost/NewPostInfos'
import NewPostReview from '../components/NewPost/NewPostReview'
import { connect } from 'react-redux'
import { updateInfos } from '../actions/userActions/updateActions'
import axios from 'axios'
import { API_URL } from '../utils/utils'
import { Redirect } from 'react-router-dom'
const Texts = require('../localization/messages.json')

const NewPost = (props) => {
  const [infos, setInfos] = useReducer(
    (state, newState) => ({ ...state, ...newState }), {
      title: '',
      year: 1970,
      author: '',
      rate: 0,
      review: ''
    }
  )
  const [croppedImg, setCroppedImg] = useState(null)
  const [currentGenre, setGenre] = useState('')
  const [cats, setCategories] = useState([])
  const [errors, setErrors] = useState({})
  const [redirectUrl, setRedirectUrl] = useState('')

  const sendPost = async () => {
    const documentData = { 
      ...infos, 
      genre: currentGenre.value,
      categories: cats.map(x => x.value),
      posterUrl: croppedImg
    }
    if (!documentData.title || !documentData.author || !documentData.year || !documentData.posterUrl) {
      validateForm(documentData)
    } else {
      const response = await axios.post(API_URL + '/posts', { document: JSON.stringify(documentData) }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      if (response.data.errors && response.data.errors.title) {
        setErrors({ title: Texts[response.data.errors.title] })
      } else {
        setRedirectUrl('/post/' + response.data.document._id)
      }
    }
  }

  const validateForm = (documentData) => {
    let errors = {}
    if (!documentData.title) {
      errors = { ...errors, title: 'Veuillez entrer un titre' }
    }
    if (!documentData.year) {
      errors = { ...errors, year: 'Veuillez entrer une année' }
    }
    if (!documentData.author) {
      errors = { ...errors, author: 'Veuillez entrer un/des auteur(s)' }
    }
    if (!documentData.posterUrl) {
      errors = { ...errors, poster: 'Veuillez choisir une image' }
    }
    setErrors(errors)
  }

  return redirectUrl ? <Redirect to={redirectUrl} /> : (
    <div className="NewPost__container">
      <h2 className="font-roboto">Nouveau document</h2>
      <NewPostHeading errors={errors} infos={infos} setInfos={setInfos} croppedImg={croppedImg} setCroppedImg={setCroppedImg} />
      <NewPostInfos cats={cats} currentGenre={currentGenre} setGenre={setGenre}  setCategories={setCategories} />
      <NewPostReview infos={infos} setInfos={setInfos} />
      <div className="NewPost__btn-container">
        <button onClick={sendPost} className="NewPost__btn">Poster</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  updateInfos: updateInfos
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
