import React from "react";

import Middlebar from "./Middlebar";

import Topbar from "./Topbar";
import Stickybar from "./Stickybar";
function Nabaar() {
  return (
    <>
      <header>
        <Topbar />
        <Middlebar />
        <Stickybar />
      </header>
    </>
  );
}

export default Nabaar;
