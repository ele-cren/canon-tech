import React, { useEffect } from 'react'
import Select from 'react-select'
const genres = require('../../data/genres.json')
const categories = require('../../data/categories.json')

const NewPostInfos = (props) => {
  const { currentGenre, cats } = props
  const genreOpts = genres['genres'].map(x => {
    return {
      value: x,
      label: x
    }
  })
  let categoriesOpt = categories['categories'][currentGenre.label] ? categories['categories'][currentGenre.label].map(x => {
    return {
      value: x,
      label: x
    }
  }) : []
  categoriesOpt = [...categoriesOpt, { value: 'Autre', label: 'Autre'} ]

  useEffect(() => {
    props.setGenre(genreOpts[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="NewPostInfos__container">
      <div className="NewPostInfos__label">Sélectionnez un genre</div>
      <Select
        className="NewPostInfos__select"
        defaultValue={currentGenre}
        value={currentGenre}
        onChange={(selectedOpt) => props.setGenre(selectedOpt)}
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name="genre"
        options={genreOpts} />
      <div className="NewPostInfos__label">Sélectionnez une catégorie</div>
      <Select
        value={cats}
        onChange={(selectedOpt) => props.setCategories(selectedOpt)}
        className="NewPostInfos__select"
        isMulti
        name="categories"
        options={categoriesOpt} />
    </div>
  )
}

export default NewPostInfos
