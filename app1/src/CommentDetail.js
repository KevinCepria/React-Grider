import React from 'react'

export default props => {
  const { userName, comment, avatar} = props
  return (
    <div className="comment" >
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">{userName}</a>
        <div className="metadata">
          <span className="date">Today at 5:00 PM</span>
        </div>
        <div className="text">{comment}</div>
      </div>
    </div>
  )
}
