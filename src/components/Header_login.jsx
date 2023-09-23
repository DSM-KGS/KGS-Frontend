import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function Header() {
  const [page, setPage] = useState("");
  const [token, setToken] = useState("aaaa");
  return (
    <>
      <div>
        <div>
          <img src="img/logo.png" />
        </div>
      </div>
    </>
  )
}

export default Header