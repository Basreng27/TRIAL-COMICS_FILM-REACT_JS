import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";

import { ModalForm } from "../../../components/partials/Index";

function FormInput() {
  return (
    <>
      <Row>
        <Form.Group as={Col} md="6">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name..." />
        </Form.Group>

        <Form.Group as={Col} md="6">
          <Form.Label>Genre</Form.Label>
          <Form.Control type="text" placeholder="Genre..." />
        </Form.Group>
      </Row>
    </>
  );
}

const Index = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="body">
      <Container className="g-4">
        <Row className="row-gap">
          <Card className="dark-mode">
            <Card.Header as="h3">FILTERS SERIES</Card.Header>

            <Card.Body>
              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="tetxt" placeholder="Name..." />
                </Form.Group>
              </Row>
              <Button variant="primary">Find</Button>
            </Card.Body>
          </Card>
        </Row>

        <Row className="row-gap">
          <Card className="dark-mode">
            <Card.Body>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>NAME</th>
                    <th>GENRE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>...</td>
                    <td>..</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => setModalShow(true)}
                      >
                        EDIT
                      </Button>
                      <Button variant="danger">DELETE</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Row>
      </Container>

      <ModalForm
        show={modalShow}
        onHide={() => setModalShow(false)}
        formInput={FormInput()}
        header="SERIES"
      />
    </div>
  );
};

export default Index;
