import React, { useState } from 'react';

const UserInfoModal = ({ show, onClose, onSave }) => {
  const [nama, setNama] = useState('');
  const [usia, setUsia] = useState('');
  const [pekerjaan, setPekerjaan] = useState('');
  const [asal, setAsal] = useState('');

  if (!show) return null;

  const handleSave = () => {
    if (nama && usia && pekerjaan && asal) {
      onSave({ nama, usia, pekerjaan, asal });
    } else {
      alert('Mohon isi semua data.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-xl font-bold text-teal-800 mb-4">Informasi User</h2>
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full p-3 border border-teal-300 rounded-lg mb-4"
        />
        <input
          type="number"
          placeholder="Usia"
          value={usia}
          onChange={(e) => setUsia(e.target.value)}
          className="w-full p-3 border border-teal-300 rounded-lg mb-4"
        />
        <input
          type="text"
          placeholder="Pekerjaan"
          value={pekerjaan}
          onChange={(e) => setPekerjaan(e.target.value)}
          className="w-full p-3 border border-teal-300 rounded-lg mb-4"
        />
        <input
          type="text"
          placeholder="Asal"
          value={asal}
          onChange={(e) => setAsal(e.target.value)}
          className="w-full p-3 border border-teal-300 rounded-lg mb-6"
        />
        <div className="flex space-x-3">
          <button
            onClick={handleSave}
            className="flex-1 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700"
          >
            Simpan
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoModal;
