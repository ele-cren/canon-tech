import React, { Component } from 'react'
import Navbar from '../components/Navbar'

const PostsList = (props) => {
  return (
    <>
      <Navbar path={props.location.pathname} />
      <div className="PostsList__container">
        <div className="PostsList__main-container">
          <div className="PostsList__searchbar-container">
            <input className="PostsList__searchbar" type="text" />
          </div>
          <div className="PostsList__data-container">
            <div className="PostsList__filters-container">
              <ul>
                <li>Test1</li>
                <li>Test2</li>
                <li>Test3</li>
              </ul>
            </div>
            <div className="PostsList__posts-infos-container">
              <div className="PostsList__infos-container"></div>
              <div className="PostsList__posts-container"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostsList
