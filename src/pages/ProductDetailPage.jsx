import React from 'react';
// import { Trash2, Mail, User, MapPin, Plus } from 'lucide-react';

const PaymentDetailsPage = () => {
  const cartItems = [
    { id: 1, name: 'Hazelnut Latte', price: 20000, oldPrice: 40000, qty: '2pcs', option: 'Regular | Ice | Dine In' },
    { id: 2, name: 'Hazelnut Latte', price: 20000, oldPrice: 40000, qty: '2pcs', option: 'Regular | Ice | Dine In' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-8">Payment Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* KIRI: Order & Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Section Your Order */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your Order</h2>
              <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition">
                <Plus size={16} /> Add Menu
              </button>
            </div>
            
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-4 items-center">
                  <img src="https://via.placeholder.com" alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                  <div className="flex-1">
                    <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">FLASH SALE!</span>
                    <h3 className="font-bold text-lg mt-1">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.qty} | {item.option}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-400 line-through text-sm">IDR{item.oldPrice.toLocaleString('id-ID')}</span>
                      <span className="text-orange-500 font-bold">IDR {item.price.toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                  <button className="text-red-500 hover:bg-red-50 p-2 rounded-full border border-red-200">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section Payment Info & Delivery */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Payment Info & Delivery</h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input type="email" placeholder="Enter Your Email" className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input type="text" placeholder="Enter Your Full Name" className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Address</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input type="text" placeholder="Enter Your Address" className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Delivery</label>
              <div className="grid grid-cols-3 gap-4">
                <button className="py-2 border-2 border-orange-500 text-orange-500 rounded-md font-medium">Dine in</button>
                <button className="py-2 border rounded-md text-gray-500 hover:bg-gray-50">Door Delivery</button>
                <button className="py-2 border rounded-md text-gray-500 hover:bg-gray-50">Pick Up</button>
              </div>
            </div>
          </div>
        </div>

        {/* KANAN: Total & Checkout */}
        <div className="bg-gray-50 p-6 rounded-xl h-fit border border-gray-100">
          <h2 className="text-xl font-bold mb-6 text-gray-700">Total</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Order</span>
              <span className="font-semibold">Idr. 40.000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery</span>
              <span className="font-semibold">Idr. 0</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span className="text-gray-600">Tax</span>
              <span className="font-semibold">Idr. 4000</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Sub Total</span>
              <span>Idr. 44.000</span>
            </div>
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-md font-bold hover:bg-orange-600 transition mb-6 shadow-md shadow-orange-200">
            Checkout
          </button>

          <div className="space-y-3">
            <p className="text-sm text-gray-500">We Accept</p>
            <div className="flex flex-wrap gap-4 items-center opacity-70">
                <span className="font-bold text-blue-800">BRI</span>
                <span className="font-bold text-blue-500 italic text-xl">BCA</span>
                <span className="font-bold text-purple-600 font-serif italic">OVO</span>
                <span className="font-bold text-blue-900 italic">PayPal</span>
            </div>
            <p className="text-[10px] text-gray-400 italic mt-2">*Get Discount if you pay with Bank Central Asia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsPage;
