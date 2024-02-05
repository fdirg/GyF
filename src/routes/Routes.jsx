import React from "react";
import { Route, Routes as ReactDomRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Us from "../pages/Us/Us";

const Routes = () => {
  return (
    <>
      <ReactDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Service />} />
        <Route path="/nosotros" element={<Us />} />
      </ReactDomRoutes>
    </>
  );
};

export default Routes;
