import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";

const Products = () => {
    const products = useSelector(state => state.product.data)
//   const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  return (
    <div className="productsWrapper">
      {products?.map((item) => (
        <div className="card" key={item.id} >
          <img src={item.image} alt={item.id} />
          <h4>{item.title}</h4>
          <h5>{item.price}</h5>
          <button className="btn" onClick={() => handleAdd(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
