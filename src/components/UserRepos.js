import React from 'react'
import { ListGroup } from 'react-bootstrap'

const UserRepos = ({repo})  => {
  return (
    <ListGroup.Item>
      {repo.name}
    </ListGroup.Item>
  )
}

export default UserRepos
