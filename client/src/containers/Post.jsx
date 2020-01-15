import React, { useEffect } from 'react'
import PostHeading from '../components/Post/PostHeading'
import PostInformations from '../components/Post/PostInformations'
import PostReviews from '../components/Post/PostReviews'
import { API_URL } from '../utils/utils.js'
import axios from 'axios'

const Post = (props) => {

useEffect(() => {

}, [])










  const reviews = [
    {
      username: 'Cheb Falzär',
      userpicture: '',
      review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      rate: 8.6,
      upvotes: 83,
      downvotes: 5,
      comments: [
        { username: 'Salima', userpicture: '', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' },
        { username: 'Salima', userpicture: '', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' }
      ]
    },
    {
      username: 'Toto',
      userpicture: '',
      review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      rate: 8.6,
      upvotes: 83,
      downvotes: 5,
      comments: [
        { username: 'Salima', userpicture: '', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' },
        { username: 'Salima', userpicture: '', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' }
      ]
    },
    {
      username: 'Titi',
      userpicture: '',
      review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      rate: 8.6,
      upvotes: 83,
      downvotes: 5,
      comments: [
        { username: 'Salima', userpicture: '', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' },
        { username: 'Salima', userpicture: '', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' }
      ]
    }
  ]

  return (
    <div className="Post__container">
      <PostHeading
        img="http://fr.web.img4.acsta.net/c_215_290/medias/nmedia/18/68/46/16/19028526.jpg"
        title="Tron"
        year="1982"
        note={8}
        author="Steven Lisberger" />
      <PostInformations category="Films" genres={[ 'Action', 'Aventure', 'Science-Fiction' ]} />
      <PostReviews reviews={reviews} />
    </div>
  )
}

export default Post