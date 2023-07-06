import React, { Component, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Loading } from "../components";

const Login = React.lazy(() => import("./pages/Login"));
const Regist = React.lazy(() => import("./pages/Regist"));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/regist" name="regist" element={<Regist />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
