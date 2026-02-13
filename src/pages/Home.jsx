import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";


function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL ="https://raw.githubusercontent.com/askadiliya/data/refs/heads/main/data/data.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        setProducts(data.flashSaleProducts.slice(0, 4) || []);
        
      } catch (error) {
        console.error("Gagal mengambil data produk:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-3 flex flex-col justify-center gap-6 p-5 bg-linear-to-b from-[#777C82] to-[#0B0909] md:p-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Start Your Day with <br /> Coffee and Good <br /> Meals
          </h1>

          <p className="text-white">
            We provide high quality beans, good taste, and healthy meals made by
            love just for you.
          </p>

          <a
            href="#menu"
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

        <div className="md:col-span-3">
          <img
            className="h-full w-full object-cover"
            src="/img/Rectangle 287.png"
            alt="Hero"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-3 flex flex-col justify-center gap-6 p-5 md:p-20">
            <h2 className="copytext-headline text-5xl border-l-4 pl-4 ">We Provide <span className="text-[#8E6447]">Good Coffee</span> And <span className="text-[#8E6447]">Healthy Meals</span></h2>
            <p className="">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
            <ul className="list-image-[url(/src/assets/img/centang.svg)] flex flex-col gap-8">
              <li>High quality beans</li>
              <li>Healthy meals, you can request the ingredients</li>
              <li>Chat with our staff to get better experience for ordering</li>
              <li>Free member card with a minimum purchase of IDR 200.000.</li>
            </ul>
        </div>

        <div className="md:col-span-3">
          <img
            className="h-full w-full object-cover"
            src="/img/herro.png"
            alt="Hero"
          />
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Here is People’s <span className="text-[#8E6447]">Favorite</span> </h1>
        <p className="text-center text-gray-600 mb-8">Discover our most popular menu items that customers love!</p>

        {loading ? (
          <p className="text-gray-500">Loading products...</p>
        ) : products.length > 0 ? (
          <div className="flex flex-col gap-10 md:flex-row md:justify-center items-center">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <p className="text-red-500">Produk tidak tersedia</p>
        )}
      </section>

      <section>
        <h1 className="text-2xl font-semibold mb-6 text-center">Visit Our Store in the Spot on the Map Below<span className="text-[#8E6447]">Favorite</span> </h1>
        <div>
          <img src="/img/Huge Global.png" alt="Map" className="w-full min-h-full object-cover"/>
        </div>
      </section>

      <section></section>


    </div>
  );
}

export default Home;
