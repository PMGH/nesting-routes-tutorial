import React from 'react'
import { Link, Route } from 'react-router-dom'
import topics from '../topicsData'
import Topic from './topic'

const Topics = ({ match }) => {
  return (
    <div>
      <h1>TOPICS</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${match.path}/:topicId`} component={Topic} />
    </div>
  )
}

export default Topics
