import React from 'react'
import topics from './topics'

const Resource = ({ match }) => {
  const topic = topics.find(({ id }) => id === match.params.topicId).resources.find(({ id }) => id === match.params.subTopicId)
  return (
    <React.Fragment>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
    </React.Fragment>
  )
}

export default Resource
