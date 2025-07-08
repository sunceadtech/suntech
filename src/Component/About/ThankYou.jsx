import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/');
  };

  return (
    <>
      <div className="flex justify-center space-y-6 m-6 md:mt-28 mt-16">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in">

          <div className="text-center">
            <div className="mx-auto flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              <strong>Sunceadtech</strong> has received your message. Our team will contact you as soon as possible.Mean while you can contact below as well.
            </p>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800 mb-2">
                <strong>Email:</strong> <span className="text-gray-700">sunceadtech@gmail.com</span>
              </p>
              <p className="text-sm text-blue-800">
                <strong>Phone:</strong> <span className="text-gray-700">+91 9211877900</span>
              </p>
            </div>


            <button
              onClick={handleClose}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              Visit Our Website
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYou;

