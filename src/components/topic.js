import React from 'react'
import topics from './topics'
import { Link, Route } from 'react-router-dom'
import Resource from './resource'

// pass match property from React
const Topic = ({ match }) => {
  const topic = topics.find(({ id }) => id === match.params.topicId)
  return (
    <React.Fragment>
      <h1>{ topic.name }</h1>
      <p>{ topic.description }</p>
      <ul>
        { topic.resources.map((subTopic) => (
          <li key={subTopic.id}>
            <Link to={`${match.url}/${subTopic.id}`}>{subTopic.name}</Link>
          </li>
        )) }
      </ul>

      <hr />

      <Route path={`${match.path}/:subTopicId`} component={Resource} />
    </React.Fragment>
  )
}

export default Topic
