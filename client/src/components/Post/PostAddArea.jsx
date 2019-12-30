import React from 'react'

const PostAddArea = (props) => {
  return (
    <form className="PostAddArea__container">
      <textarea />
      <button type="submit">{props.btn}</button>
    </form>
  )
}

export default PostAddArea
