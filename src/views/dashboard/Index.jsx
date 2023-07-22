import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Index = () => {
  return (
    <div className="body">
      <Container className="g-4">
        <Row className="row-gap">
          <Card className="dark-mode">
            <Card.Header as="h3" className="text-center">
              KOMIK
            </Card.Header>

            <Card.Body>
            <Row className="text-center">
              <Col sm={4}>
                <Card bg="secondary" text="white">
                  <Card.Header>MANHWA</Card.Header>

                  <Card.Body>
                    <Card.Title>TOTAL MANHWA</Card.Title>
                    <Card.Text>70</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={4}>
                <Card bg="success" text="white">
                  <Card.Header>MANGA</Card.Header>

                  <Card.Body>
                    <Card.Title>TOTAL MANGA</Card.Title>
                    <Card.Text>70</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={4}>
                <Card bg="warning" text="white">
                  <Card.Header>MANHUA</Card.Header>

                  <Card.Body>
                    <Card.Title>TOTAL MANHUA</Card.Title>
                    <Card.Text>70</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            </Card.Body>
          </Card>
        </Row>

        <Row>
          <Card className="dark-mode">
            <Card.Header as="h3" className="text-center">
              FILM
            </Card.Header>

            <Card.Body>
            <Row className="text-center">
              <Col sm={6}>
                <Card bg="primary" text="white">
                  <Card.Header>MOVIE</Card.Header>

                  <Card.Body>
                    <Card.Title>TOTAL MOVIE</Card.Title>
                    <Card.Text>70</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={6}>
                <Card bg="danger" text="white">
                  <Card.Header>SERIES</Card.Header>

                  <Card.Body>
                    <Card.Title>TOTAL SERIES</Card.Title>
                    <Card.Text>70</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
