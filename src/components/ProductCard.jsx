import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // Fungsi untuk format mata uang agar rapi (Contoh: 10000 -> 10.000)
  const formatIDR = (price) => {
    return new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="max-w-75 bg-white rounded-lg shadow-md overflow-hidden relative font-sans">
      {/* Badge Flash Sale! (Muncul jika ada oldPrice/diskon) */}
      {product.oldPrice && (
        <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase italic z-10">
          FLASH SALE!
        </div>
      )}

      {/* Bagian Gambar */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Bagian Konten */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {product.name}
        </h3>
        
        {/* Deskripsi (dibatasi 2 baris agar tetap rapi) */}
        <p className="text-xs text-gray-500 mt-2 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Rating Bintang */}
        <div className="flex items-center mt-3 gap-1">
          <div className="flex text-orange-400 text-xs">
            {"★".repeat(Math.floor(product.rating || 5))}
          </div>
          <span className="text-xs text-gray-400 ml-1">
            {(product.rating || 5).toFixed(1)}
          </span>
        </div>

        {/* Harga */}
        <div className="flex items-center gap-2 mt-2">
          {product.oldPrice && (
            <span className="text-red-500 line-through text-[10px] italic font-medium">
              IDR {formatIDR(product.oldPrice)}
            </span>
          )}
          <span className="text-orange-500 font-bold text-lg">
            IDR {formatIDR(product.price)}
          </span>
        </div>

        {/* Tombol Aksi */}
        <div className="flex gap-2 mt-4">
          <Link 
            to={`/product/${product.id}`}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium transition text-center text-sm flex items-center justify-center"
          >
            Buy
          </Link>
          <button className="border border-orange-500 p-2 rounded-md group hover:bg-orange-50 transition">
            <svg
              xmlns="http://www.w3.org"
              className="h-5 w-5 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
