import React, { useState } from 'react';

// Komponen untuk satu item pesanan dalam daftar
const OrderItem = ({ order }) => {
  return (
    <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Gambar Produk Placeholder */}
      <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4 shrink-0">
          {/* Ganti div ini dengan tag <img> Anda */}
      </div>
      
      {/* Detail Pesanan */}
      <div className="grow grid grid-cols-4 gap-4 text-xs">
        <div>
          <p className="text-gray-500">No. Order</p>
          <p className="font-semibold">{order.noOrder}</p>
        </div>
        <div>
          <p className="text-gray-500">Date</p>
          <p className="font-semibold">{order.date}</p>
        </div>
        <div>
          <p className="text-gray-500">Total</p>
          <p className="font-semibold">{order.total}</p>
        </div>
        <div>
          <p className="text-gray-500">Status</p>
          <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
            order.status === 'On Progress' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
          }`}>
            {order.status}
          </span>
        </div>
      </div>
      
      {/* Tombol Detail Pesanan */}
      <div className="ml-4 shrink-0">
        <button className="text-xs font-semibold text-orange-500 hover:underline">
          Views Order Detail
        </button>
      </div>
    </div>
  );
};

// Data pesanan dummy untuk contoh
const dummyOrders = [
  { noOrder: '#12354-09893', date: '23 January 2023', total: 'Idr 40.000', status: 'On Progress' },
  { noOrder: '#12354-09893', date: '24 January 2023', total: 'Idr 40.000', status: 'On Progress' },
  { noOrder: '#12354-09893', date: '25 January 2023', total: 'Idr 40.000', status: 'On Progress' },
  { noOrder: '#12354-09893', date: '26 January 2023', total: 'Idr 40.000', status: 'On Progress' },
];

// Komponen Halaman Utama History Order
function OrderHistoryPage() {
  const [activeTab, setActiveTab] = useState('On Progress');

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header dan Navigasi Tab */}
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <h1 className="text-3xl font-semibold text-gray-800 mr-4">History Order</h1>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
              2
            </span>
          </div>
          
          {/* Tombol Filter Bulan */}
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>January 2023</option>
              <option>February 2023</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              {/* Ikon panah bawah */}
              &#9660;
            </div>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-300 mb-8">
          {['On Progress', 'Sending Goods', 'Finish Order'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-6 text-sm font-medium transition duration-150 ease-in-out ${
                activeTab === tab
                  ? 'border-b-2 border-orange-500 text-orange-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Layout Utama: Daftar Pesanan (Kiri) & Kotak Pesan (Kanan) */}
        <div className="flex gap-8">
          
          {/* Kolom Kiri: Daftar Pesanan */}
          <div className="grow space-y-4">
            {dummyOrders.map((order, index) => (
              <OrderItem key={index} order={order} />
            ))}
          </div>

          {/* Kolom Kanan: Kotak Pesan Bantuan */}
          <div className="w-80 shrink-0 bg-white p-6 rounded-lg shadow-lg h-min">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
              <h3 className="font-semibold">Send Us Message</h3>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              If you're unable to find an answer or find your product quickly, please describe your problem and tell us, we will give you solution.
            </p>
            <button className="w-full py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
              Send Message
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OrderHistoryPage;
