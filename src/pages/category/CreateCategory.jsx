import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./CreateCategory.css";
import { apiEndpoint } from "../../libs/apiKeys";

export default function CreateCategory() {
  document.title = "Add New Category";

  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      };
      const response = await fetch(`${apiEndpoint}/category/add`, option);
      const jsonData = await response.json();
      console.log(jsonData);

      // clear the form after submit
      reset({ category_name: "" });
    } catch (err) {
      setError(err.message);
    }
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className="form__container container d-flex justify-content-center align-items-center">
      <form
        className="category__form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <h1 className="form__title text-center">Add New Category</h1>
        <div className="form-group">
          <label className="label">Category</label>
          <input
            className="form-control"
            type="text"
            placeholder="Category Name"
            {...register("category_name", { required: true, maxLength: 20 })}
            aria-invalid={errors.category_name ? "true" : "false"}
          />
          {errors.category_name?.type === "required" && (
            <span role="alert" className="required__warning">
              Category name is required
            </span>
          )}
          {error && (
            <span className="error__warning" role="alert">
              {error}
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
