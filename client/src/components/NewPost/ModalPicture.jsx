import React, { useState } from 'react'
import 'react-image-crop/lib/ReactCrop.scss'
import ReactCrop from 'react-image-crop'

const ModalPicture = (props) => {
  const [crop, setCrop] = useState({
    unit: 'px',
    aspect: 4/5,
    width: 150,
    x: 0,
    y: 0,
  })
  const [imageRef, setImageRef] = useState(null)
  const [croppedImgUrl, setCroppedImgUrl] = useState('')
  const { src } = props

  const onImageLoaded = image => {
    setImageRef(image)
  }

  const onCropComplete = crop => {
    makeClientCrop(crop)
  }

  const onCropChange = crop => {
    setCrop(crop)
  }

  const makeClientCrop = (crop) => {
    if (imageRef && crop.width && crop.height) {
      const croppedImageUrl = getCroppedImg(
        imageRef,
        crop
      )
      setCroppedImgUrl(croppedImageUrl)
    }
  }

  const getCroppedImg = (image, crop) => {
    const canvas = document.createElement('canvas')
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    canvas.width = crop.width
    canvas.height = crop.height
    const ctx = canvas.getContext('2d')

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    )

    return canvas.toDataURL('image/jpeg')
  }

  const handleClick = (event) => {
    if (event.target.id === 'ModalPicture-bg') {
      props.toggleModal(false)
    }
  }
  
  const saveCropped = () => {
    props.saveCrop(croppedImgUrl)
    props.toggleModal(false)
  }

  return props.isOpened ?  (
    <div id="ModalPicture-bg" className="ModalPicture__container" onClick={handleClick}>
      <div className="ModalPicture__main-container">
        <div className="ModalPicture_picture-container">
          <ReactCrop
            src={src}
            crop={crop}
            onImageLoaded={onImageLoaded}
            onComplete={onCropComplete}
            onChange={onCropChange} />
        </div>
        <div className="ModalPicture__btn-container">
          <button onClick={() => props.toggleModal(false)} className="ModalPicture__btn ModalPicture__close-btn">Fermer</button>
          <button onClick={saveCropped} className="ModalPicture__btn ModalPicture__save-btn">Enregister</button>
        </div>
      </div>
    </div>
  ) : ''
}

export default ModalPicture
