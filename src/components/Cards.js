import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

function Cards({price, paragraph, title, image}) {
  return (
    <Col sm={6} lg={4} xl={3} className='mb-4'>
        <Card className="mycard" variant="top" src={image}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <div className='d-flex align-items-center justify-content-between'>
            <div className='wishlist'>
            </div>
        </div>
        <Card.Title style={{textAlign:'center'}}>{title}</Card.Title>
        <Card.Text>
          {paragraph}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default Cards