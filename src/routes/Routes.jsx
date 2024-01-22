import React from "react";
import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <ReactDomRoutes>
            <Route path="/" element={<p>hola</p>} />
            <Route path="*" element={<p>chau</p>} />
          </ReactDomRoutes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Routes;
