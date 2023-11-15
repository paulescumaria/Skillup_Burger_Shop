import React from "react";


function OrderDetails () {
    return (
        <div className="orderDetails">
            <main>
                <h1>Order details</h1>
                    <div>
                        <h1>Shipping</h1>
                        <p>Address</p>
                    </div>
                    <div>
                        <h1>Contact</h1>
                        <p>Name</p>
                        <p>Phone</p>
                    </div>
                    <div>
                        <h1>Status</h1>
                        <p>Order Status</p>
                        <p>Placed At</p>
                        <p>Delivered At</p>
                    </div>
                    <div>
                        <h1>Payment</h1>
                        <p>Payment Method</p>
                        <p>Payment Reference</p>
                        <p>Paid At</p>
                    </div>
                    <div>
                        <h1>Amount</h1>
                        <p>Items Total</p>
                        <p>Shipping Charges</p>
                        <p>Tax</p>
                        <p>Total Amount</p>
                    </div>
                <article>
                    <h1>Orderd items</h1>
                    <div>
                        <h4>Cheese Burger</h4>
                        <h4>12x232</h4>
                    </div>
                    <div>
                        <h4>Veg Cheese Burger</h4>
                        <h4>10x500</h4>
                    </div>
                    <div>
                        <h4>Burger Fries</h4>
                        <h4>10x1800</h4>
                    </div>
                    <div>
                        <h4>Sub Total</h4>
                        <h4>2132</h4>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default OrderDetails;
// Write all the code here