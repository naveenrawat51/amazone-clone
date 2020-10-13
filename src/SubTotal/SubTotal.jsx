import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider/StateProvider";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  const getBasketTotal = basket.reduce(
    (acc, current) => acc + current.price,
    0
  );

  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subTotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="subTotal__button">Proceed Checkout</button>
    </div>
  );
}

export default SubTotal;
