import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <img src={p.image} alt={p.title} width="100" />
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
