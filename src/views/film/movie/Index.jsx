import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { getMovie, searchMovie } from "../../../config/api_film";
import { ModalForm } from "../../../components/partials/Index";
import { useEffect } from "react";

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

// untuk menampilkannya
const MovieList = ({ movies }) => {
  const [modalShow, setModalShow] = useState(false);

  return movies.map((movie, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{movie.title}</td>
      <td>{movie.genre_ids}</td>
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
  // buat untuk menampung data get movie
  const [movies, setMovies] = useState([]);

  // untuk merunning data pertama kali saat di load
  useEffect(() => {
    // disimpan kedalam Movies
    // setMovies(getMovie())
    // Untuk membuat supaya hasilnya tidak promise atau tertahan
    getMovie().then((result) => {
      setMovies(result);
    });
  }, []);

  const [modalShow, setModalShow] = React.useState(false);

  const search = async (query) => {
    if (query.length > 3) {
      const find = await searchMovie(query);
      setMovies(find.results);
    }
  };

  return (
    <div className="body">
      <Container className="g-4">
        <Row className="row-gap">
          <Card className="dark-mode">
            <Card.Header as="h3">FILTERS MOVIE</Card.Header>

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
                  <MovieList movies={movies} />
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
        header="MOVIE"
      />
    </div>
  );
};

export default Index;
