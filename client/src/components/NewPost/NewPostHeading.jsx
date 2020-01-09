import React, { useState } from 'react'
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import ModalPicture from './ModalPicture'
import ImgPlaceholder from '../../assets/pictures/imagePlaceholder.png'

const NewPostHeading = () => {
  const [isModalOpened, setModal] = useState(false)
  const [img, setImg] = useState('')
  const [croppedimg, setCroppedImg] = useState(null)
  const [infos, setInfos] = useState({
    title: '',
    year: 1990,
    author: '',
    rate: 0
  })

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImg(reader.result)
        setModal(true)
      })
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  const onCropSave = (croppedImage) => {
    setCroppedImg(croppedImage)
  }

  const handleChange = (event) => {
    setInfos({
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="NewPostHeading__container">
      <div className="NewPostHeading__img-container">
      <ModalPicture isOpened={isModalOpened} toggleModal={setModal} src={img} saveCrop={onCropSave} />
        <input
          id="input-picture"
          name="input-picture"
          type="file"
          accept="image/*"
          onClick={(e) => e.target.value = null} onChange={onSelectFile} />
        <label style={{ backgroundImage: `url(${ croppedimg ? croppedimg : ImgPlaceholder })` }} htmlFor="input-picture"></label>
        <span>Sélectionnez une image</span>
      </div>
      <form className="NewPostHeading__infos-container">
        <label htmlFor="title">Titre</label>
        <input onChange={handleChange} type="text" id="title" name="title" value={infos.title} />
        <label htmlFor="year">Année</label>
        <input onChange={handleChange} type="number" id="year" name="year" value={infos.year} />
        <label htmlFor="author">Auteur(s)</label>
        <input onChange={handleChange} type="text" id="author" name="author" value={infos.author} />
        <div className="NewPostHeading__stars">
          <Rating
            stop={10}
            onChange={(value) => setInfos({ rate: value })}
            initialRating={infos.rate}
            emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
            fullSymbol={<FontAwesomeIcon icon={faStar} />} />
        </div>
      </form>
    </div>
  )
}

export default NewPostHeading
