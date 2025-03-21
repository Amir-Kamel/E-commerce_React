import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import Loading from "./loading"
const apiUrl = import.meta.env.VITE_API_URL;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${apiUrl}`)
      .then((resp) => setProducts(resp.data.products))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Products List</h2>

      {loading ? (
          <Loading />
    ) : (

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-4">
              <img src={product.thumbnail}/>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <span className={`badge ${product.stock > 10 ? "bg-success" : "bg-danger"}`}>
                  {product.stock > 10 ? "In Stock" : "Low Stock"}
                </span>
                <br />
                <Link to={`/products/${product.id}`} className="btn btn-primary mt-2">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
    </div>
  );
};

export default ProductList;
