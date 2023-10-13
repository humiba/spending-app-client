import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Dashboard, Analytics, Create, Update, CreateCategory, Categories } from "./pages";
import { Header } from "./components";

export default function App() {
  return (
    <div className="d-flex app__container">
      <Header />
      <div className="col-10 page__routes">
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/analytics"} element={<Analytics />} />
          <Route path={"/create"} element={<Create />} />
          <Route path={"/update"} element={<Update />} />
          <Route path={"/category/all"} element={<Categories />} />
          <Route path={"/category/create"} element={<CreateCategory />} />
          <Route path={"/category/update/:id"} element={<CreateCategory />} />
        </Routes>
      </div>
    </div>
  );
}
