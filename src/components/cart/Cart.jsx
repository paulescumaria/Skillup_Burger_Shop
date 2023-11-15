import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
// import burger3 here

const CartItem = ({ title, img }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={() => setQuantity(curentQuantity => {
        if (curentQuantity > 0) {
          return curentQuantity - 1
        } else return 0})}>-</button>
      <input type="number" readOnly value={quantity} /> 
      <button onClick={() => setQuantity(currentQuantity => currentQuantity + 1)}>+</button>
    </div>
  </div>
  )
}

const Cart = () => {
  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}

        // Add the function for decrementing the order by 1 
       
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
        // Add the function for decrementing the order by 2
       
        />

        {/* Fill up the code for Cheese Burger similarly */}
       
        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3}
        // Add the function for decrementing the order by 2
       
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
