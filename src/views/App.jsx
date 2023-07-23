import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loading } from "../components";
import Layout from "./layout/Layout";
import { Page404 } from "./pages/errors/Index";

const Login = React.lazy(() => import("./pages/Login"));
const Regist = React.lazy(() => import("./pages/Regist"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/regist" name="Regist" element={<Regist />} />
            <Route path="/app/*" name="Layout" element={<Layout />} />
            <Route path="*" name="Layout" element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
