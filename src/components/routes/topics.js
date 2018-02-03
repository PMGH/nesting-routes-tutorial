import React from 'react'
import { Link, Route } from 'react-router-dom'
import topics from '../topics'
import Topic from '../topic'

const Topics = () => {
  return (
    <div>
      <h1>TOPICS</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`/topics/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`/topics/:topicId`} component={Topic} />
    </div>
  )
}

export default Topics
