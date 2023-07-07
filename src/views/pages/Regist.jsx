import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const Regist = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget

    if(form.checkValidity() === false){
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
  <div className="d-flex align-items-center justify-content-center vh-100">
    <Card className="dark-mode w-50">
      <Card.Header>Regist</Card.Header>

      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name..." required />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email..." required />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username..." required />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="passsword" placeholder="Password..." required />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="repassword">
              <Form.Label>Re-Password</Form.Label>
              <Form.Control type="passsword" placeholder="Re-Password..." required />
            </Form.Group>
          </Row>

          <div className="d-flex justify-content-between">
            <Button type="submit">Regist</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  </div>
  );
};

export default Regist;
