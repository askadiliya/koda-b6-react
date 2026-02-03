import React from 'react';
// Import gambar latar belakang untuk produk, jika diperlukan di file ini
// import HazelnutLatteImg from '../assets/img/hazelnut-latte.png'; 

function PaymentDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        
        {/* Header Halaman */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Payment Details</h1>
        </header>

        {/* Konten Utama (Kiri & Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Kolom Kiri: Pesanan & Formulir Pengiriman */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold">Your Order</h2>
            
            {/* Item Pesanan (Dua item yang sama) */}
            {[1, 2].map(index => (
              <div key={index} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center">
                  {/* Placeholder Gambar Produk */}
                  <div className="w-20 h-20 bg-gray-200 rounded-lg mr-4 flex-shrink-0">
                      {/* Ganti div ini dengan tag <img src={HazelnutLatteImg} alt="Hazelnut Latte" /> */}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Hazelnut Latte</p>
                    <p className="text-xs text-gray-500">2pcs | Regular | Ice | Dine In</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-gray-400 line-through mr-2">IDR 40.000</span>
                      <span className="text-sm font-bold text-orange-500">IDR 20.000</span>
                    </div>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700" aria-label="Remove item">
                    {/* Ikon hapus/lingkaran X */}
                    &#10799;
                </button>
              </div>
            ))}

            {/* Tombol Add Menu */}
            <button className="w-full py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-50 transition">
              + Add Menu
            </button>

            {/* Formulir Info Pembayaran & Pengiriman */}
            <h2 className="text-xl font-semibold mt-8">Payment Info & Delivery</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" placeholder="Enter Your Email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" placeholder="Enter Your Full Name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" placeholder="Enter Your Address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
              </div>
            </div>

            {/* Opsi Pengiriman */}
            <h3 className="text-lg font-medium">Delivery</h3>
            <div className="flex gap-4">
                <button className="flex-1 px-4 py-2 border-2 border-orange-500 bg-orange-50 text-orange-600 rounded-lg font-semibold">
                    Dine in
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
                    Door Delivery
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
                    Pick Up
                </button>
            </div>
          </div>

          {/* Kolom Kanan: Ringkasan Total & Pembayaran */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Total</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Order</span>
                <span>Idr. 40.000</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>Idr. 0</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>Idr. 4000</span>
              </div>
              <div className="flex justify-between pt-3 border-t font-bold">
                <span>Sub Total</span>
                <span>Idr. 44.000</span>
              </div>
            </div>

            {/* Tombol Checkout */}
            <button className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition">
              Checkout
            </button>

            {/* Metode Pembayaran */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">We Accept</h3>
              <div className="flex items-center gap-4">
                {/* Placeholders Logo Bank/E-wallet */}
                <div className="w-16 h-8 bg-gray-200 rounded"></div> {/* BCA */}
                <div className="w-16 h-8 bg-gray-200 rounded"></div> {/* OVO */}
                {/* Tambahkan logo lainnya di sini */}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                *Get Discount if you pay with Bank Central Asia
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PaymentDetailsPage;
