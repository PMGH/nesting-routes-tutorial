import React from 'react'
import topics from '../topicsData'

const Resource = ({ match }) => {
  const topic = topics.find(({ id }) => id === match.params.topicId).resources.find(({ id }) => id === match.params.subTopicId)
  return (
    <React.Fragment>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>More Info.</a>
    </React.Fragment>
  )
}

export default Resource
