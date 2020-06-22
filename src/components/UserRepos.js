import React from 'react'
import { Card, ListGroupItem } from 'react-bootstrap'

const UserRepos = ({repo})  => {
  return (
    <ListGroupItem>
      {repo.name}
    </ListGroupItem>
  )
}

export default UserRepos
