import React from 'react'
import './App.css'
// use if your bundler tree shakes
// import { Button, Card } from '@az-bootstrap-components/react'

// manual treeshaking
import Header from '@az-bootstrap-components/react/esm/Header'
import Button from '@az-bootstrap-components/react/esm/Button'
import Card from '@az-bootstrap-components/react/esm/Card'

function App() {
  return (
    <div className="App">
      <Header />
      <Button variant="primary">Primary</Button>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/318/180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App
