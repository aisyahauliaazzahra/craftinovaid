import React from 'react';
import { AlertCircle } from 'lucide-react';

const Result = ({ stressLevel, resetCustomerJourney }) => {
  if (!stressLevel) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <AlertCircle className={`w-16 h-16 mx-auto mb-4 ${stressLevel.color}`} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Hasil Assessment</h2>
          
          {/* Hasil kit membantu */}
          <div className={`text-3xl font-bold mb-4 ${stressLevel.color}`}>
            {stressLevel.result} 
          </div>

          {/* Penjelasan tambahan */}
          <p className="text-gray-600">{stressLevel.description}</p>
        </div>
        
        <button
          onClick={resetCustomerJourney}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all"
        >
          Mulai Lagi
        </button>
      </div>
    </div>
  );
};

export default Result;
