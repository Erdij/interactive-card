import React from "react";
import bgMobile from "./images/bg-main-mobile.png";
import bgDesktop from "./images/bg-main-desktop.png";
import logo from "./images/card-logo.svg";
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="mt-10 mx-5">
            <article className="front-card p-5 flex flex-col justify-between ">
              <img src={logo} alt="" className="w-20 lg:w-28" />
              <div>
                <h2 className="text-white text-xl lg:text-xl  mb-6 tracking-widest ">
                  1234 5678 9012 3456
                </h2>
                <ul className="flex items-center justify-between">
                  <li className="text-white  uppercase text-base lg:text-xl tracking-widest">
                    Buraya Bakarlar
                  </li>
                  <li className="text-white  lg:text-xl tracking-widest">
                    01/10
                  </li>
                </ul>
              </div>
            </article>
            <article className="back-card relative">
              <p className="absolute right-10  text-lg lg:text-xl text-white tracking-widest ">
                123
              </p>
            </article>
          </div>
          <div>form</div>
        </div>
      </section>
    </>
  );
}
