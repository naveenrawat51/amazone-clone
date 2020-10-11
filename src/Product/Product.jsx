import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product({ title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(5)
            .fill()
            .map((_, index) => (
              <StarIcon
                key={index}
                className={
                  index < rating
                    ? "product__ratingActive"
                    : "product__ratingTotal"
                }
              />
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt={title} />
      <button className="product__button">Add to basket</button>
    </div>
  );
}

export default Product;
