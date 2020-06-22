import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const UserRepos = ({repo})  => {
  return (
    <ListGroup.Item>
      {repo.name}
    </ListGroup.Item>
  )
}

export default UserRepos
