import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header_main from "./components/Header_main";
import Header_search from "./components/Header_search";
import Mainpage from "./page/Mainpage";
import Searchpage from "./page/Searchpage";
import loginPage from "./page/loginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header_main />}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<loginPage />} />
        </Route>
        <Route element={<Header_search />}>
          <Route path="/search" element={<Searchpage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
