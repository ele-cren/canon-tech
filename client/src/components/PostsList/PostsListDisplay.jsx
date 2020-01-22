import React from 'react'
import Item from '../Item'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const PostsListDisplay = (props) => {

  const items = props.documents ? props.documents.map((x, i) => {
    return (
      <Link key={i} to={'/post/' + x._id} style={{ textDecoration: 'none' }}>
        <Item img={x.posterUrl} title={x.title} author={x.author} />
      </Link>
    )
  }) : []

  return (
    <div className="PostsList__posts-infos-container">
      {/* <div className="PostsList__infos-container">
        <p> 20 oeuvres</p>
        <p> afficher 25 - 50 - 100</p>
        <p>menu filtre</p>
      </div> */}
      { props.user.user._id && (
        <div className="PostList__btn-container">
          <Link to="/posts/new">Nouveau document</Link>
        </div>
      )}

      <div className="PostsList__posts-container">
        {items}
      </div>
    </div>

  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(PostsListDisplay)
