import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

const CardBlob = ({data}) => {
  if(data){
    return (
      <>
      <p>{data.name}</p>
            <ListGroup>
              <ListGroupItem></ListGroupItem>
              <ListGroupItem>Test</ListGroupItem>
              <ListGroupItem>Test</ListGroupItem>
            </ListGroup>
      </>
    )
  } else {
    return null
  }
}

export default CardBlob
