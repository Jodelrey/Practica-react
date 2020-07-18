import React from "react";
import { useParams } from "react-router-dom";
const SubCategory = () => {
  const { subcategoryId } = useParams();
  return (
    <div>
      <h2>Producto {subcategoryId}</h2>
    </div>
  );
};

export default SubCategory;
