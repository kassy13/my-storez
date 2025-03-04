import React, { useContext, useEffect } from "react";
import Auth from "../context/context";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  console.log(category);
  const { getProductsByCategory, categoryProducts } = useContext(Auth);
  console.log("categoryProducts", categoryProducts);
  useEffect(() => {
    // const hello = async () => {
    //   await getProductsByCategory("tops");
    // };
    // hello();
    getProductsByCategory(category);
  }, [category]);
  return (
    <div>
      <h2>Categories: {category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryProducts?.map((product) => (
          <div key={product.id}>
            <img
              src={product.images[0]}
              alt=""
              className="w-full h-56 object-cover"
            />
            <h3 className="">{product.title}</h3>
            <p>NGN {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
