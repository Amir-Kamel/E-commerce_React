import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "./loading"
import { useDispatch } from "react-redux";
import { addToCart } from "./store/slice/cartSlice";
const apiUrl = import.meta.env.VITE_API_URL;


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${apiUrl}/${id}`)
      .then((resp) => setProduct(resp.data))
      .catch((err) => console.error(err))
      .finally(() =>  setLoading(false));
      console.log("heyy")
  },[id]);


  return (
    <div className="container mt-4">

        {loading ? (
            <Loading />
        ) : (

      <div className="row">
        <div className="col-md-6">
          <img src={product.thumbnail} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="mb-5">Title: <strong>{product.title} </strong> </h2>
          <p className="mb-5">Description <strong> {product.description} </strong> </p>
          <h4 className="mb-5">Price <strong> ${product.price} </strong> </h4>

          <button className="btn btn-success me-5" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>

          <span className={`badge ${product.stock > 10 ? "bg-success" : "bg-danger"}`}>
            {product.stock > 10 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>
        )}
    </div>
  );
};

export default ProductDetails;
