import React from 'react';

const PasswordModal = ({ adminPassword, setAdminPassword, handleAdminLogin, setShowPasswordModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Admin Login</h2>
        <input
          type="password"
          placeholder="Masukkan password admin"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
          onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
        />
        <div className="flex space-x-3">
          <button
            onClick={handleAdminLogin}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
          <button
            onClick={() => {setShowPasswordModal(false); setAdminPassword('');}}
            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal;