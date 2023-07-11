import React from 'react'
import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Login = () => {
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) =>{
      const form = event.currentTarget
  
      if(form.checkValidity() === false){
        event.preventDefault()
        event.stopPropagation()
      }
  
      setValidated(true);
    }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
    <Card className="dark-mode w-25">
      <Card.Header>Login</Card.Header>
  
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username..." required />
            </Form.Group>
          </Row>
  
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password..." required />
            </Form.Group>
          </Row>
  
          <div className="d-flex justify-content-between">
            <Button type="submit">Login</Button>
            <Link to="/app" className="btn btn-info">Layout</Link>
            <Link to="/regist" className="btn btn-primary">Regist</Link>
          </div>
        </Form>
      </Card.Body>
    </Card>
  </div>
  )
}

export default Login
