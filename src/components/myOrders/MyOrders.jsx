import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((arr,index) => {
              return(
                <tr key={index}>
                  <td>{arr}</td>
                  <td>Processing</td>
                  <td>23</td>
                  <td>Rs ₹2132</td>
                  <td>COD</td>
                  <td>
                  <Link to={`/order/${arr}`}>
                    <AiOutlineEye/>
                  </Link>
                  </td>
                </tr>
              )
            })}
{/* //     Add the code for the table body */}
           
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
