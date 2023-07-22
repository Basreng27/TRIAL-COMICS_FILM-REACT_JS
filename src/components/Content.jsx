import React, { Suspense } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

// routes config
import routes from "../config/routes";

const Content = () => {
  return (
    <Container fluid>
      <Suspense fallback={<Spinner animation="grow" variant="light" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={React.createElement(route.element)}
                />
              )
            );
          })}
        </Routes>
      </Suspense>
    </Container>
  );
};

export default React.memo(Content);
