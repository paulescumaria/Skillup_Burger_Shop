import React, { useState } from "react";
import { Country, State} from "country-state-city";
import Popup from 'reactjs-popup';

const Shipping = () => {
  // const { countries } =  useGetCountries();
  const countries = Country.getAllCountries();
  const states = State.getStatesOfCountry('AF');
  const [code, setCode] = useState("");

  console.log(countries)
  console.log(states)
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
              {/* Compelte the code for the COUNTRY DROPDOWN*/}
            <label>Country</label>

            <select id="countrySelect" onChange={(e) => {setCode(() => e.target.value)}}>
              {Country.getAllCountries().map((country, index) => {
                return (
                  <option key={index} value={country.isoCode}>{country.name}</option>
                )
              })}
              <option value="">Country</option>
               {/* Enter the code here for country dropdown            */}
                  {/* </option> */}
                {/* ))} */}
            </select>
          </div>
          <div>
              {/* Add the code for the STATE DROPDOWN*/}
              <label>State</label>
              <select id="stateSelect">
                {State.getStatesOfCountry(code).map((state, index) => {
                  return(
                    <option key={index} >{state.name}</option>
                  )
                })}
              </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div>
            <label>Phone No.</label>
            <input type="number" placeholder="Enter Phone" />
          </div>
         {/* Enter thr code for contact            */}
          
          <Popup trigger=
                {<button type = "button">Confirm Order</button>}
                position="right center">
                <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Order Placed</div>
               
            </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
