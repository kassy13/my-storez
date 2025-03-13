import React, { useState } from "react";
import Auth from "./context";
import { account, databases } from "../Appwrite/client";
import { toast } from "react-toastify";
import { ID } from "appwrite";

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setcategoryProducts] = useState([]);
  console.log(user);
  //   Function for sign-in
  const signup = async ({ name, email, password }) => {
    const response = await account.create("unique()", email, password, name);
    console.log(response);
    return response;
  };

  // Function for signin

  const signIn = async ({ email, password }) => {
    await account.createEmailPasswordSession(email, password);
    const userData = await account.get();
    setUser(userData);
    console.log(userData);
    sessionStorage.setItem("currentUser", JSON.stringify(userData.$id));
  };
  // Logout function
  const logout = async () => {
    try {
      await account.deleteSession("current");
      sessionStorage.removeItem("currentUser");
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  // Getting all category list
  const getAllCategories = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category-list"
      );
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        setCategories(data);
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Get products by category
  const getProductsByCategory = async (category) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        setcategoryProducts(data.products);
        return data.products;
      } else {
        throw new Error("Failed to fetch category products");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Function to get product by Id
  const getProductById = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (response.ok) {
        const data = await response.json();
        console.log("data from products by id", data);
        return data;
      }
    } catch (err) {
      console.log("error Fetching Product", err);
    }
  };

  // Adding to cart
  const currentLoggedInUser = sessionStorage.getItem("currentUser");
  console.log(currentLoggedInUser);
  const handleAddToCart = async (product, quantity) => {
    const totalPrice = product.price * quantity;
    const orderCart = {
      userId: currentLoggedInUser,
      productId: product.id.toString(),
      price: product.price,
      quantity: quantity,
      totalPrice,
      // title: product.title,
      imgUrl: product.images[0],
    };
    try {
      const response = await databases.createDocument(
        "67d29ac30006c46f0544",
        "67d29c03000faaefb5a0",
        ID.unique(),
        orderCart
      );
      console.log("Order response:", response);
      if (response.ok) {
        return response;
      }
    } catch (err) {
      console.error("failed to add product", err);
      toast.error(err);
    }
  };

  return (
    <Auth.Provider
      value={{
        signup,
        signIn,
        logout,
        categories,
        getAllCategories,
        getProductsByCategory,
        categoryProducts,
        getProductById,
        handleAddToCart,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;
