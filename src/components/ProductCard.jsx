// function ProductCard({ product }) {
//   return (
//     <div className="border rounded-lg shadow hover:shadow-lg overflow-hidden flex flex-col h-full">
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4 flex flex-col flex-1">
//         <h3 className="font-semibold text-lg">{product.title}</h3>
//         <p className="text-gray-500 text-sm flex-1">{product.description}</p>

//         {/* Harga & rating selalu di bawah */}
//         <div className="mt-2">
//           <div className="flex items-center justify-between">
//             <span className="text-[#FF8906] font-bold">Rp{product.price}</span>
//             <span className="text-gray-400 line-through text-sm">
//               Rp{product.oldPrice}
//             </span>
//           </div>
//           <div className="mt-2 text-yellow-400">
//             {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import React from "react";

export default function ProductCard({ item, onBuy }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="font-bold text-lg">{item.title}</h2>
        <p className="text-gray-500 text-sm">{item.category}</p>

        <div className="flex justify-between items-center mt-3">
          <p className="font-bold text-green-600">Rp {item.price}</p>

          <button
            onClick={() => onBuy(item)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
