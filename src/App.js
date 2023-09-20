import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Mainpage from "./page/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Mainpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
