import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Product } from "../Product";
import { getProducts } from "../services/productService";
import ProductCard from "../../src/components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const maxPrice = searchParams.get("maxPrice");
    const includes = searchParams.get("includes");
    const limit = searchParams.get("limit");

    getProducts(maxPrice ? Number(maxPrice) : null, includes, limit ? Number(limit) : null)
      .then(setProducts)
      .catch(console.error);
  }, [searchParams]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
