import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

const CardBlob = ({data}) => {
  if(data){
    return (
      <>
        <ListGroup>
          <ListGroup.Item>has {data.followers} followers</ListGroup.Item>
          <ListGroup.Item>is following {data.following} users</ListGroup.Item>
          <ListGroup.Item>for hire: {data.hirable ? 'Yes' : 'No'}</ListGroup.Item>
          <ListGroup.Item>created: {data.created_at}</ListGroup.Item>
        </ListGroup>
      </>
    )
  } else {
    return null
  }
}

export default CardBlob
