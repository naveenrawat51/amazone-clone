import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider/StateProvider";

function Product({ title, id, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (event) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: { id, title, price, rating, image },
    });
  };

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
      <button className="product__button" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
