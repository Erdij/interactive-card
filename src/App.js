import React from "react";
import bgMobile from "./images/bg-main-mobile.png";
import bgDesktop from "./images/bg-main-desktop.png";
import logo from "./images/card-logo.svg";
import tick from "./images/icon-complete.svg";
export default function App() {
  return (
    <>
      <section>
        <div className="absolute -z-10">
          <picture>
            <source media="(min-width: 1024px)" srcSet={bgDesktop} />
            <img src={bgMobile} alt="" />
          </picture>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto ">
          <div className="mt-10 mx-5 lg:grid lg:grid-cols-1 ">
            <article className="front-card p-5 flex flex-col justify-between ">
              <img src={logo} alt="" className="w-20 lg:w-28" />
              <div>
                <h2 className="text-white text-xl lg:text-xl  mb-6 tracking-widest ">
                  1234 5678 9012 3456
                </h2>
                <ul className="flex items-center justify-between">
                  <li className="text-white  uppercase text-base lg:text-xl tracking-widest">
                    they look here
                  </li>
                  <li className="text-white  lg:text-xl tracking-widest">
                    01/10
                  </li>
                </ul>
              </div>
            </article>

            <article className="back-card relative ml-20">
              <p className="absolute right-10  text-lg lg:text-xl text-white tracking-widest ">
                123
              </p>
            </article>
          </div>
          <div>
            <form className="flex flex-col justify-center gap-8  max-w-lg h-screen">
              <div>
                <label htmlFor="cardholder_name">Cardholder Name</label>
                <input
                  type="text"
                  name="cardholder_name"
                  id="cardholder_name"
                  placeholder="Sukru Erdi Yildirim"
                  required
                />
              </div>

              <div>
                <label htmlFor="card_number">Card Number</label>
                <input
                  type="text"
                  name="card_number"
                  id="card_number"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  required
                />
              </div>
              <article className="flex items-center justify-between gap-8 ">
                <div className="flex-1">
                  <label htmlFor="expiry_date">Exp. Date(MM/YY)</label>
                  <input
                    type="month"
                    name="expiry_date"
                    id="expiry_date"
                    placeholder="MM YY"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="number"
                    name="cvc"
                    id="cvc"
                    placeholder="123"
                    maxLength={3}
                    required
                  />
                </div>
              </article>
              <button type="submit" className="btn">
                Confirm
              </button>
            </form>
            <Thankyou />
          </div>
        </div>
      </section>
    </>
  );
}

function Thankyou() {
  return (
    <>
      <img src={tick} alt="" />
      <h1>Thank you</h1>
      <p>We've added your card details</p>
      <button type="submit" className="btn">
        Continue
      </button>
    </>
  );
}
