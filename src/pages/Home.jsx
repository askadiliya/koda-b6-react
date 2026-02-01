import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <section className="grid grid-cols-6">
        <div className="col-span-3 flex flex-col justify-center gap-6 p-5 bg-gradient-to-b from-[#777C82] to-[#0B0909]
 md:p-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Start Your Day with <br /> Coffee and Good <br /> Meals</h1>
          <p className="text-white">
            We provide high quality beans, good taste, and healthy meals made by
            love just for you. Start your day with us for a bigger smile!
          </p>
          <a href="#" className="bg-[#FF8906] text-white font-semibold px-6 py-3 rounded-lg w-max ">
            Get Started
          </a>
          <div className="flex gap-8 mt-10 text-white text-2xl">
            <div className="stat-item">
              <span>90+</span>
              <p>Staff</p>
            </div>
            <div className="stat-item">
              <span>30+</span>
              <p>Stores</p>
            </div>
            <div className="stat-item">
              <span>800+</span>
              <p>Customer</p>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <img className="h-screen w-full" src="/images/sectionHero.png" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Home;
