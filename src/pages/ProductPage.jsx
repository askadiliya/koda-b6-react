import React, { useRef } from 'react'
import ProductBg from '../assets/img/Rectangle 299.png'

function ProductPage() {
  const promoRef = useRef(null)

  const scrollLeft = () => {
    promoRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    })
  }

  const scrollRight = () => {
    promoRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    })
  }

  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <section
        className="w-full h-96 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${ProductBg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex items-center h-full px-6 md:px-16">
          <h1 className="text-white text-3xl md:text-4xl font-semibold">
            We Provide Good Coffee and Healthy <br /> Meals
          </h1>
        </div>
      </section>

      {/* ================= TODAY PROMO ================= */}
      <section className="px-6 md:px-16 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            Today <span className="text-orange-500">Promo</span>
          </h2>

          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              ←
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-orange-500 text-white hover:bg-orange-600"
            >
              →
            </button>
          </div>
        </div>

        {/* ================= PROMO CARDS ================= */}
        <div
          ref={promoRef}
          className="
            flex gap-6
            overflow-x-auto
            flex-nowrap
            scroll-smooth
            pb-4
            [&::-webkit-scrollbar]:hidden
          "
        >
          {/* CARD */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="min-w-[280px] bg-green-200 rounded-2xl p-5 flex gap-4"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                ☕
              </div>
              <div>
                <p className="font-bold text-sm">HAPPY MOTHER’S DAY!</p>
                <p className="text-sm">
                  Get one of our favorite menu for free!
                </p>
                <p className="text-xs mt-2 font-medium">Klaim Kupon</p>
              </div>
            </div>
          ))}

          {/* HIGHLIGHT */}
          <div className="min-w-[320px] bg-yellow-300 rounded-2xl p-5 flex gap-4">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              ☕
            </div>
            <div>
              <p className="font-bold text-sm">
                Get a cup of coffee for free
              </p>
              <p className="text-sm">Only at 7 to 9 AM</p>
            </div>
          </div>
        </div>
      </section>

            {/* ================= OUR PRODUCT ================= */}
      <section className="px-6 md:px-16 py-16">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-10">
          Our <span className="text-orange-500">Product</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* ===== FILTER SIDEBAR ===== */}
          <aside className="bg-black text-white rounded-2xl p-6 h-fit">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Filter</h3>
              <button className="text-sm text-gray-300 hover:text-white">
                Reset Filter
              </button>
            </div>

            {/* Search */}
            <div className="mb-6">
              <p className="mb-2 font-medium">Search</p>
              <input
                type="text"
                placeholder="Search Your Product"
                className="w-full px-4 py-2 rounded-md text-black outline-none"
              />
            </div>

            {/* Category */}
            <div className="mb-6">
              <p className="mb-3 font-medium">Category</p>
              {['Favorite Product', 'Coffee', 'Non Coffee', 'Foods', 'Add-On'].map(
                (item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 mb-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={item === 'Coffee'}
                      className="accent-orange-500 w-4 h-4"
                    />
                    <span>{item}</span>
                  </label>
                )
              )}
            </div>

            {/* Sort */}
            <div className="mb-6">
              <p className="mb-3 font-medium">Sort By</p>
              {['Buy 1 get 1', 'Flash sale', 'Birthday Package', 'Cheap'].map(
                (item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 mb-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={item === 'Flash sale'}
                      className="accent-orange-500 w-4 h-4"
                    />
                    <span>{item}</span>
                  </label>
                )
              )}
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="mb-3 font-medium">Range Price</p>
              <input type="range" className="w-full accent-orange-500" />
              <div className="flex justify-between text-sm mt-2">
                <span>Idr. 374</span>
                <span>Idr. 500</span>
              </div>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-medium">
              Apply Filter
            </button>
          </aside>

          {/* ===== PRODUCT GRID ===== */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl overflow-hidden border shadow-sm"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={`https://picsum.photos/400/300?random=${item}`}
                    alt="product"
                    className="w-full h-56 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    FLASH SALE!
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">
                    Hazelnut Latte
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">
                    You can explore the menu that we provide with fun and have
                    their own taste and make your day better.
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <span className="text-orange-500">★★★★★</span>
                    <span className="text-gray-500">5.0</span>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="line-through text-sm text-gray-400 mr-2">
                      IDR 20.000
                    </span>
                    <span className="text-orange-500 font-semibold">
                      IDR 10.000
                    </span>
                  </div>

                  {/* Action */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md">
                      Buy
                    </button>
                    <button className="w-10 border border-orange-500 text-orange-500 rounded-md">
                      🛒
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default ProductPage
