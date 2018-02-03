import React from 'react'
import topics from './topics'
import { Link } from 'react-router-dom'

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
            <Link to={`/topics/${match.params.topicId}/${subTopic.id}`}>{subTopic.name}</Link>
          </li>
        )) }
      </ul>
    </React.Fragment>
  )
}

export default Topic
