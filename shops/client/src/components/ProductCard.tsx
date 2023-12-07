import React from "react";
import { Product } from "../Product";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product._id}`}>
        <h3>{product.name}</h3>
      </Link>
    </div>
  );
};

export default ProductCard;
