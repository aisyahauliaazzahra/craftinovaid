import React from 'react';
import { AlertCircle } from 'lucide-react';

const Result = ({ stressLevel, resetCustomerJourney }) => {
  if (!stressLevel) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <AlertCircle className={`w-16 h-16 mx-auto mb-4 ${stressLevel.color}`} />
          <h2 className="text-2xl font-bold text-teal-800 mb-2">Hasil Assessment</h2>
          
          {/* Hasil kit membantu */}
          <div className={`text-3xl font-bold mb-4 ${stressLevel.color}`}>
            {stressLevel.result} 
          </div>

          {/* Penjelasan tambahan */}
          <p className="text-teal-600">{stressLevel.description}</p>
        </div>
        
        <button
          onClick={resetCustomerJourney}
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all"
        >
          Mulai Lagi
        </button>
      </div>
    </div>
  );
};

export default Result;
