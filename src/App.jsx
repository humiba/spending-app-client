import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import {
  Dashboard,
  Analytics,
  UpdateSpending,
  CreateCategory,
  Categories,
  CreateSpending,
  Spending,
  UpdateCategory,
} from "./pages";
import { Header } from "./components";

export default function App() {
  return (
    <div className="d-flex app__container">
      <Header />
      <div className="col-10 page__routes">
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/analytics"} element={<Analytics />} />

          {/* Spending related pages */}
          <Route path={"/spending/all"} element={<Spending />} />
          <Route path={"/spending/add"} element={<CreateSpending />} />
          <Route path={"/spending/update/:id"} element={<UpdateSpending />} />

          {/* Spending Category related pages */}
          <Route path={"/category/all"} element={<Categories />} />
          <Route path={"/category/add"} element={<CreateCategory />} />
          <Route path={"/category/update/:id"} element={<UpdateCategory />} />
        </Routes>
      </div>
    </div>
  );
}
