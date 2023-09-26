import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header_main from "./components/Header_main";
import Header_login from "./components/Header_login"
import Header_search from "./components/Header_search";
import Mainpage from "./page/Mainpage";
import Searchpage from "./page/Searchpage";
import Loginpage from "./page/loginPage";
import Logoutpage from "./page/logoutPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header_main />}>
          <Route path="/" element={<Mainpage />} />
        </Route>
        <Route element={<Header_login />} >
          <Route path="/login" element={<Loginpage />} />
          <Route path="logout" element={<Logoutpage />} />
        </Route>
        <Route element={<Header_search />}>
          <Route path="/search" element={<Searchpage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
