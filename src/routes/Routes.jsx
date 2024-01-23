import React from "react";
import { Route, Routes as ReactDomRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";

const Routes = () => {
  return (
    <>
      <ReactDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
      </ReactDomRoutes>
    </>
  );
};

export default Routes;
