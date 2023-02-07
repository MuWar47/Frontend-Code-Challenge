import React from "react";
import NavBar from "./NavBar";
import AllProducts from "./AllProducts";
import Home from "./Home";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <AllProducts />
      {/* <Home /> */}
    </React.Fragment>
  );
}

export default App;
