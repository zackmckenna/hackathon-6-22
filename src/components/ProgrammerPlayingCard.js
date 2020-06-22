import React from 'react'
import { Image, Jumbotron, Col, Row, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

const ProgrammerPlayingCard = ({data}) => {
  console.log('data at playing card component', data)
  if (data) {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.avatar_url} />
          <Card.Body>
            <Card.Title>{data.name? data.name : data.login }</Card.Title>
            <Card.Subtitle>aka {data.name ? data.login : null}</Card.Subtitle>
          </Card.Body>
          <Card.Text>
            TEST
          </Card.Text>
         </Card>
      </>
    )
  } else {
    return null
  }
}

export default ProgrammerPlayingCard
