import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("Regular");
  const [temp, setTemp] = useState("Ice");

  const URL = "https://raw.githubusercontent.com/askadiliya/data/refs/heads/main/data/data.json";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        const found = data.flashSaleProducts.find((p) => p.id === parseInt(id));
        setProduct(found || null);
      } catch (err) {
        console.error("Gagal mengambil data produk:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!product) return <p className="text-center mt-10 text-red-500">Produk tidak ditemukan!</p>;

  // fungsi Buy → simpan ke cart di localStorage
  const handleBuy = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // cek apakah produk sudah ada di cart
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      exists.qty += qty;
    } else {
      cart.push({
        id: product.id,
        qty,
        size,
        temp,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/payment"); // arahkan ke PaymentDetailsPage
  };

  return (
    <main className="px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT IMAGE */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-105 object-cover rounded-xl mb-6"
          />
          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`${product.image}?sig=${i}`}
                alt="thumb"
                className="w-24 h-24 object-cover rounded-lg cursor-pointer border hover:border-orange-500"
              />
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {product.oldPrice && (
            <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4">
              FLASH SALE!
            </span>
          )}

          <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>

          <div className="flex items-center gap-3 mb-3">
            {product.oldPrice && (
              <span className="line-through text-sm text-gray-400">
                IDR {product.oldPrice.toLocaleString("id-ID")}
              </span>
            )}
            <span className="text-orange-500 text-xl font-semibold">
              IDR {product.price.toLocaleString("id-ID")}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* QTY */}
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

          {/* SIZE */}
          <div className="mb-6">
            <p className="font-medium mb-3">Choose Size</p>
            <div className="flex gap-4">
              {["Regular", "Medium", "Large"].map((item) => (
                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className={`px-6 py-2 border rounded-md ${
                    size === item
                      ? "border-orange-500 text-orange-500"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* TEMP */}
          <div className="mb-8">
            <p className="font-medium mb-3">Hot / Ice?</p>
            <div className="flex gap-4">
              {["Ice", "Hot"].map((item) => (
                <button
                  key={item}
                  onClick={() => setTemp(item)}
                  className={`px-6 py-2 border rounded-md ${
                    temp === item
                      ? "border-orange-500 text-orange-500"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ACTION */}
          <div className="flex gap-4">
            <button
              onClick={handleBuy}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium"
            >
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
