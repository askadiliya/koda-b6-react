import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transform transition duration-500 hover:scale-105">
            <div className="flex text-[#FF8906] mb-4">
                {Array(5).fill().map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                ))}
                <span className="ml-2 text-gray-600 text-sm">5.0</span>
            </div>
            
            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
            
            <div className="flex items-center">
                <img
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
