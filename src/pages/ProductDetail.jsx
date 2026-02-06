import React, { useState } from "react";

function ProductDetail() {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("Regular");
  const [temp, setTemp] = useState("Ice");

  return (
    <main className="px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* ================= LEFT IMAGE ================= */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            alt="Hazelnut Latte"
            className="w-full h-105 object-cover rounded-xl mb-6"
          />

          {/* Thumbnail */}
          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`https://images.unsplash.com/photo-1509042239860-f550ce710b93?sig=${i}`}
                alt="thumb"
                className="w-24 h-24 object-cover rounded-lg cursor-pointer border hover:border-orange-500"
              />
            ))}
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div>
          {/* Badge */}
          <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4">
            FLASH SALE!
          </span>

          <h1 className="text-3xl font-semibold mb-2">Hazelnut Latte</h1>

          {/* Price */}
          <div className="flex items-center gap-3 mb-3">
            <span className="line-through text-sm text-gray-400">
              IDR 20.000
            </span>
            <span className="text-orange-500 text-xl font-semibold">
              IDR 10.000
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm mb-4">
            <span className="text-orange-500">★★★★★</span>
            <span className="text-gray-500">5.0</span>
            <span className="text-gray-400">| 200+ Review</span>
            <span className="text-orange-500 flex items-center gap-1">
              Recommendation 
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Cold brewing is a method of brewing that combines ground coffee and
            cool water and uses time instead of heat to extract the flavor. It
            is brewed in small batches and steeped for as long as 48 hours.
          </p>

          {/* ================= QTY ================= */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => qty > 1 && setQty(qty - 1)}
              className="w-8 h-8 border border-orange-500 rounded text-orange-500"
            >
              -
            </button>
            <span className="font-medium">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="w-8 h-8 bg-orange-500 text-white rounded"
            >
              +
            </button>
          </div>

          {/* ================= SIZE ================= */}
          <div className="mb-6">
            <p className="font-medium mb-3">Choose Size</p>
            <div className="flex gap-4">
              {["Regular", "Medium", "Large"].map((item) => (
                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className={`px-6 py-2 border rounded-md
                    ${
                      size === item
                        ? "border-orange-500 text-orange-500"
                        : "border-gray-300 text-gray-500"
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ================= HOT / ICE ================= */}
          <div className="mb-8">
            <p className="font-medium mb-3">Hot / Ice?</p>
            <div className="flex gap-4">
              {["Ice", "Hot"].map((item) => (
                <button
                  key={item}
                  onClick={() => setTemp(item)}
                  className={`px-6 py-2 border rounded-md
                    ${
                      temp === item
                        ? "border-orange-500 text-orange-500"
                        : "border-gray-300 text-gray-500"
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ================= ACTION ================= */}
          <div className="flex gap-4">
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium">
              Buy
            </button>

            <button className="flex-1 border border-orange-500 text-orange-500 py-3 rounded-md font-medium flex items-center justify-center gap-2">
              🛒 add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
