import React from "react";
import { Product } from "../Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, photoURL } = product;
  const placeholderImage = "/images/coming-soon.jpg";

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={photoURL || placeholderImage} alt={name} />
      </div>
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
