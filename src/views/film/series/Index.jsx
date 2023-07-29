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
import { useState } from "react";
import { useEffect } from "react";
import { getSeries, searchSeries } from "../../../config/api_film";

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

const SeriesList = ({ series }) => {
  const [modalShow, setModalShow] = useState(false);

  return series.map((seri, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{seri.name}</td>
      <td>{seri.genre_ids}</td>
      <td>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          EDIT
        </Button>
        <Button variant="danger">DELETE</Button>
      </td>
    </tr>
  ));
};

const Index = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getSeries().then((result) => {
      console.log(result);
      setSeries(result);
    });
  }, []);

  const [modalShow, setModalShow] = React.useState(false);

  const search = async (query) => {
    if (query.length > 3) {
      const find = await searchSeries(query);
      setSeries(find.results);
    }
  };

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
                  <Form.Control
                    type="tetxt"
                    placeholder="Name..."
                    onChange={({ target }) => search(target.value)}
                  />
                </Form.Group>
              </Row>
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
                  <SeriesList series={series} />
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
