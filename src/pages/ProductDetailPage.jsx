import React from 'react';
// import HazelnutLatteImg from '../assets/img/hazelnut-latte.png'; // Placeholder for your image asset

function OrderDetailPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        
        {/* Header: Order Number & Date */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Order #12354-09893</h1>
          <p className="text-sm text-gray-500 mt-1">21 March 2023 at 10:30 AM</p>
        </header>

        {/* Layout Utama: Order Information (Kiri) & Your Order (Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Kolom Kiri: Order Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Order Information</h2>
            
            <div className="space-y-4 text-sm">
              {/* Full Name */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500">
                  <span className="mr-2">👤</span> Full Name
                </div>
                <span className="font-medium">Ghaluh Wizard Anggoro</span>
              </div>

              {/* Address */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500">
                  <span className="mr-2">🏠</span> Address
                </div>
                <span className="font-medium">Griya bandung indah</span>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500">
                  <span className="mr-2">📞</span> Phone
                </div>
                <span className="font-medium">082116304338</span>
              </div>

              {/* Payment Method */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500">
                  <span className="mr-2">💳</span> Payment Method
                </div>
                <span className="font-medium">Cash</span>
              </div>

              {/* Shipping */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500">
                  <span className="mr-2">🚚</span> Shipping
                </div>
                <span className="font-medium">Dine In</span>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500">
                  <span className="mr-2">✅</span> Status
                </div>
                <span className="font-medium bg-green-200 text-green-800 px-3 py-1 rounded-full">Done</span>
              </div>
            </div>

            {/* Total Transaction */}
            <div className="flex justify-between items-center pt-4 border-t-2">
              <span className="text-lg font-bold">Total Transaction</span>
              <span className="text-lg font-bold text-orange-500">Idr 40.000</span>
            </div>
          </div>

          {/* Kolom Kanan: Your Order (Item List) */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Your Order</h2>
            
            {/* Item Pesanan (Dua item yang sama) */}
            {[1, 2].map(index => (
              <div key={index} className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                {/* Placeholder Gambar Produk */}
                <div className="w-20 h-20 bg-gray-200 rounded-lg mr-4">
                    {/* Ganti div ini dengan tag <img> Anda */}
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full mr-2">FLASH SALE</span>
                    <p className="text-sm font-semibold">Hazelnut Latte</p>
                  </div>
                  <p className="text-xs text-gray-500">2pcs | Regular | Ice | Dine In</p>
                  <div className="mt-1">
                    <span className="text-xs text-gray-400 line-through mr-2">IDR 40.000</span>
                    <span className="text-sm font-bold text-orange-500">IDR 20.000</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailPage;
