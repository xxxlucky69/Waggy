import "./offer.scss";
import decor from "../../assets/img/decor.svg";
import React from "react";

function Offer() {
  return (
    <section className="discount">
      
      {/* фоновые декоры */}
      <div className="discount__bg">
        <img src={decor} alt="decor" />
        <img src={decor} alt="decor" />
      </div>

      <div className="container">
        <div className="discount__content">
          
          <h2 className="discount__title">
            Get <span>20% Off</span> On First Purchase
          </h2>

          <form className="discount__form">
            <input type="email" placeholder="Your Email Address" />
            <input type="text" placeholder="Your Full Name" />
            <textarea placeholder="Message"></textarea>

            <button type="submit">SEND MESSAGE</button>
          </form>

        </div>
      </div>

    </section>
  );
}

export default Offer;