import React, { useEffect, useState } from 'react'
import PostHeading from '../components/Post/PostHeading'
import PostInformations from '../components/Post/PostInformations'
import PostReviews from '../components/Post/PostReviews'
import { API_URL } from '../utils/utils.js'
import axios from 'axios'

const Post = (props) => {
  const [post, setPost] = useState(null) 

  useEffect(() => {
    const getPost = async () => {
      const { id } = props.match.params
      const response = await axios.get(API_URL + '/post/' + id)
      if (response.data.document) {
        setPost(response.data.document)
      }
    }
    getPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="Post__container">
      {post ? (
        <>
        <PostHeading
          img={post.posterUrl}
          title={post.title}
          year={post.year}
          note={post.rate}
          author={post.author} />
        <PostInformations genre={post.genre} categories={post.categories} />
        <PostReviews reviews={post.reviews} />
        </>
      ) : (
        <div>Aucun document n'a été trouvé</div>
      )}
    </div>
  )
}

export default Post