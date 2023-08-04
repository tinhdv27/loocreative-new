import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import routes from "./Pages";
import Header from "../Common/Header/Header";

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
