import React from 'react'
import Navbar from '../components/Navbar'

const Post = (props) => {
  return (
    <>
      <Navbar path={props.location.pathname} />
      <h1>Post Page</h1>
    </>
  )
}

export default Post