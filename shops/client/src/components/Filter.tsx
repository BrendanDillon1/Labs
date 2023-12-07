import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [maxPrice, setMaxPrice] = useState("");
  const [includes, setIncludes] = useState("");
  const [limit, setLimit] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const queryParams = new URLSearchParams({
      ...(maxPrice && { maxPrice }),
      ...(includes && { includes }),
      ...(limit && { limit }),
    }).toString();
    navigate(`/products?${queryParams}`);
  };

  return <form onSubmit={handleSubmit}></form>;
};

export default Filter;
