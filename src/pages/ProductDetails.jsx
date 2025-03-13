import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Auth from "../context/context";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { productId } = useParams();

  const { getProductById, handleAddToCart } = useContext(Auth);
  const navigate = useNavigate();
  const [product, setproduct] = useState(null);
  const [totalprice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const currentLoggedInUser = sessionStorage.getItem("currentUser");
  console.log(currentLoggedInUser);
  console.log(product);
  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProductById(productId);
      setproduct(fetchedProduct);
      setTotalPrice(fetchedProduct?.price);
    };
    if (productId) {
      fetchProduct();
    }
  }, []);
  //   Handle Quantity change to get total price
  const handleQuantityChange = (e) => {
    // const newQuantity = parseInt(e.target.value) || 1;
    const newQuantity = parseFloat(e.target.value) || 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * product?.price);
  };

  // adding to cart

  const handleCart = async () => {
    if (currentLoggedInUser) {
      try {
        const responses = await handleAddToCart(product, quantity);
        console.log("responsessss", responses);

        // toast.success("product added successfully");
        // setTimeout(() => {
        //   navigate("/cart-details");
        // }, 3000);
      } catch (err) {
        console.log(err);
        toast.error(err);
      }
    } else {
      toast.error("Please login to add to cart");
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    }
  };
  return (
    <div className="my-20 mx-20">
      <h1>Product Details</h1>
      <img
        src={product?.images[0]}
        alt=""
        className="w-full h-96 object-contain "
      />
      <div>
        <h2>Category:{product?.category}</h2>
        <h4>Titile:{product?.title}</h4>
        <p> Price:{product?.price}</p>
        <p>Description:{product?.description}</p>
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          min={1}
          placeholder="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div>
        <p>Total:{totalprice.toFixed(2)}</p>
      </div>
      <button className="bg-slate-900 text-white p-1" onClick={handleCart}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetails;
