import { Link, useNavigate, useParams } from "react-router-dom";
import Category from "../page/Categories.js";
import { PlusOutlined } from "@ant-design/icons";

const Products = () => {
  const navigate = useNavigate();
  const { productId } = useParams();


  const singleProduct = Category.find(
    (product) => product.id === parseInt(productId)
  );

  const { id, title, price, image, details } = singleProduct;

  return (
    <main>
      <div className="pg-header">
        <div className="single-container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>{title}</h1>
              {/* <p>{pathname}</p> */}
            </div>
            <div className="col-lg-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/category">Products</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content details-field">
        <div className="row" key={id}>
          <div className="col-lg-5">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h2>{title}</h2>
            <p className="price">
              <strong>{price}</strong>
            </p>
            <p>{details}</p>
            <br />
            <button
              className="btn btn-dark btn-sm"
              varient="dark"
              onClick={() => navigate(-1)}
            >
              BACK
            </button>{" "}
            &nbsp;
            <button
              className="btn btn-warning btn-sm"
              onClick={() => navigate("/category")}
            >
              NAVIGATE TO PRODUCTS
            </button>{" "}
            &nbsp;
            <Link to="" className="btn btn-primary btn-sm">
              Add to cart <PlusOutlined className="plus-icon" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
