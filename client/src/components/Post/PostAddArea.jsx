import React, { useState } from 'react'

const PostAddArea = (props) => {
  const [comment, setComment] = useState('')

  const addPost = (event) => {
    event.preventDefault()
    if (comment) {
      props.callback(comment)
      setComment('')
    }
  }

  return (
    <form className="PostAddArea__container" onSubmit={addPost}>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <button type="submit">{props.btn}</button>
    </form>
  )
}

export default PostAddArea
