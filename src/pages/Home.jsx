import React from "react";

function Home() {
  return (
    <div>

      <section className="grid grid-cols-6">
        <div className="col-span-3 flex flex-col justify-center gap-6 p-5 bg-gradient-to-b from-[#777C82] to-[#0B0909] md:p-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Start Your Day with <br /> Coffee and Good <br /> Meals
          </h1>

          <p className="text-white">
            We provide high quality beans, good taste, and healthy meals made by
            love just for you. Start your day with us for a bigger smile!
          </p>

          <a
            href="#"
            className="bg-[#FF8906] text-white font-semibold px-6 py-3 rounded-lg w-max"
          >
            Get Started
          </a>

          <div className="flex gap-8 mt-10 text-white text-2xl">
            <div>
              <span>90+</span>
              <p>Staff</p>
            </div>
            <div>
              <span>30+</span>
              <p>Stores</p>
            </div>
            <div>
              <span>800+</span>
              <p>Customer</p>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <img
            className="h-screen w-full object-cover"
            src="/img/Rectangle 287.png"
            alt="Hero"
          />
        </div>
      </section>

      <div className="flex flex-col-reverse md:flex-row h-512 md:h-screen md:max-h-192">
                <div className="copytext-container flex-1 flex items-center justify-center">
                    <div className="copytext w-[80%] px-6 py-10 flex flex-col gap-4">
                        <h2 className="copytext-headline text-5xl border-l-4 pl-4">We Provide <span className="text-[#8E6447]">Good Coffee</span> And <span className="text-[#8E6447]">Healthy Meals</span></h2>
                        <p className="">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                        <ul className="list-image-[url(/src/assets/img/centang.svg)] flex flex-col gap-8">
                            <li>High quality beans</li>
                            <li>Healthy meals, you can request the ingredients</li>
                            <li>Chat with our staff to get better experience for ordering</li>
                            <li>Free member card with a minimum purchase of IDR 200.000.</li>
                        </ul>
                    </div>
                </div>
                <div className="hero-image flex-1 h-128 md:h-auto bg-[url('/src/assets/img/herro.png')] bg-cover bg-center bg-no-repeat">
                </div>
            </div>
    </div>
  );
}

export default Home;
