import React, { useState } from "react";
import Categories from "./Categories";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const Category = () => {
  const [data, setDate] = useState(Categories);

  const filterData = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItem;
    });
    setDate(result);
  };

  // pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [pagePerData] = useState(6);

  const indexOfLastPage = currentPage * pagePerData;
  const indexOfFirstPage = indexOfLastPage - pagePerData;
  const currentData = data.slice(indexOfFirstPage, indexOfLastPage);
  const totalData = data.length;

  const paginate = (pages) => setCurrentPage(pages);

  return (
    <>
      <h1 className="text-center text-info mt-4">Category Section</h1>
      <div className="catagory-container">
        <div className="container-fluid mx-2 ">
          <div className="row mt-5 mx-2">
            <div className="col-md-3">
              <button
                className="btn btn-warning w-100 text-uppercase mb-4 fw-bold border-danger"
                onClick={() => filterData("men")}
              >
                Mens
              </button>
              <button
                className="btn btn-warning w-100 text-uppercase mb-4 fw-bold border-danger"
                onClick={() => filterData("women")}
              >
                Womens
              </button>
              <button
                className="btn btn-warning w-100 text-uppercase mb-4 fw-bold border-danger"
                onClick={() => filterData("kid")}
              >
                Kids
              </button>
              <button
                className="btn btn-warning w-100 text-uppercase mb-4 fw-bold border-danger"
                onClick={() => setDate(Categories)}
              >
                All
              </button>
            </div>

            <div className="col-md-9">
              <div className="row">
                {currentData.map((values) => {
                  const { id, title, price, image } = values;
                  return (
                    <>
                      <div className="col-md-4 mb-4">
                        <div className="card" key={id}>
                          <img
                            src={image}
                            className="card-img-top"
                            alt={title}
                          />
                          <div className="card-body shadow p-3 bg-body rounded">
                            <h5 className="card-title text-uppercase">
                              {title}
                            </h5>
                            <p>Price: {price}/-</p>
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <Link
                              to={`/category/${id}`}
                              className="btn btn-dark btn-sm"
                            >
                              Buy Now &#8594;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalData={totalData}
        pagePerData={pagePerData}
        paginate={paginate}
      />
    </>
  );
};

export default Category;
