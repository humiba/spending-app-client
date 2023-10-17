import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Categories.css";
import { apiEndpoint } from "../../libs/apiKeys";
import { capitalizeFirstLetterOfEachWord } from "../../libs/capitalize";
import { convertTimestampToDate } from "../../libs/convertTimestampToDate";

export default function Categories() {
  document.title = "All Spending Categories";

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      const response = await fetch(`${apiEndpoint}/category/all`);
      const jsonData = await response.json();
      setCategories(jsonData);
    };

    getAllCategories();
    // console.log(categories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteCategory = async (id) => {
    try {
      const deleteCategory = await fetch(
        `${apiEndpoint}/category/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      await setCategories(
        categories.filter((category) => category.id !== id)
      );
      console.log(deleteCategory);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <table className="categories__table table container">
      <thead>
        <tr>
          <th>Category Name</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories?.length > 0 &&
          categories?.map((category) => (
            <tr key={category.id}>
              <td>{category.category_name.toUpperCase()}</td>
              <td>{convertTimestampToDate(category.createdAt)}</td>
              <td>{convertTimestampToDate(category.updatedAt)}</td>
              <td>
                <button className="update__category-btn btn btn-warning">
                  <Link to={`/category/update/${category.id}`}>Update</Link>
                </button>
                {/* <button
                  className="delete__category-btn btn btn-danger"
                  onClick={() => deleteCategory(`${category.id}`)}
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
