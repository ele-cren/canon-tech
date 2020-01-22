import React, { useEffect, useState } from 'react'
import PostHeading from '../components/Post/PostHeading'
import PostInformations from '../components/Post/PostInformations'
import PostReviews from '../components/Post/PostReviews'
import { API_URL } from '../utils/utils.js'
import axios from 'axios'
import { connect } from 'react-redux'

const Post = (props) => {
  const [post, setPost] = useState(null) 
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const getPost = async () => {
      const { id } = props.match.params
      setLoading(true)
      const response = await axios.get(API_URL + '/post/' + id)
      if (response.data.document) {
        setPost(response.data.document)
      }
      setLoading(false)
    }
    getPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addReview = (review) => {
    let reviewRate = 0
    const { id } = props.match.params
    let exists = false

    if (post.reviews) {
      for (let rev of post.reviews) {
        if (rev.user._id === props.user.user._id) {
          exists = true
          break
        }
      }
    }

    if (!exists) {
      if (post.ratings) {
        for (const rate of post.ratings) {
          if (rate.rater === props.user.user._id) {
            reviewRate = rate.rate
            break
          }
        }
      }
  
      const newReview = {
        review: review,
        rate: reviewRate,
        user: props.user.user._id
      }
      const newReviews = post.reviews ? [...post.reviews, newReview] : [newReview]
  
      setPost({ ...post, reviews: newReviews })
      axios.patch(API_URL + '/post/' + id, { docInfos: JSON.stringify({ reviews: newReviews }) }, { 
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
      }) 
    }
  }

  const updateRate = (rate) => {
    const { id } = props.match.params
    let exists = false
    let newRates = post.ratings ? post.ratings.map(x => {
      if (x.rater === props.user.user._id) {
        exists = true
        x.rate = rate
      }
      return x
    }) : []
    newRates = newRates ? exists ? newRates : [...newRates, { rate: rate, rater: props.user.user._id }]
              : [{ rate: rate, rater: props.user.user._id }]
    setPost({ ...post, ratings: newRates })
    axios.patch(API_URL + '/post/' + id, { docInfos: JSON.stringify({ ratings: newRates }) }, { 
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
    })
  }

  return (
    <div className="Post__container">
      {isLoading ? <div>Chargement en cours...</div> : post ? (
        <>
        <PostHeading
          updateRate={updateRate}
          postId={props.match.params.id}
          img={post.posterUrl}
          title={post.title}
          year={post.year}
          rates={post.ratings}
          author={post.author} />
        <PostInformations genre={post.genre} categories={post.categories} />
        <PostReviews addReview={addReview} reviews={post.reviews} />
        </>
      ) : (
        <div>Aucun document n'a été trouvé</div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(Post)
