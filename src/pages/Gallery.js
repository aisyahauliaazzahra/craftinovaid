import React, { useState } from 'react';
import Header from '../components/Header';

const Gallery = ({ setCurrentView, setShowPasswordModal, companyInfo }) => {
  const [posts, setPosts] = useState([]);
  const [newCaption, setNewCaption] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle upload gambar
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Upload post baru
  const handlePost = () => {
    if (!newImage && !newCaption.trim()) return;

    const imageUrl = newImage ? URL.createObjectURL(newImage) : '/dump.png';
    const newPost = { image: imageUrl, caption: newCaption };

    setPosts([newPost, ...posts]);
    setNewCaption('');
    setNewImage(null);
    setPreview(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50">
      {/* Header */}
      <Header
        companyInfo={companyInfo}
        setCurrentView={setCurrentView}
        setShowPasswordModal={setShowPasswordModal}
        activeView="gallery"
      />

      {/* Main content */}
      <div className="max-w-6xl mx-auto p-6 md:p-10">
        <h2 className="text-4xl font-bold text-teal-700 mb-6 text-center">
          Galeri Karya
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Unggah hasil karya terbaikmu dan bagikan inspirasi dengan yang lain 💚
        </p>

        {/* Upload Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <label className="block font-medium text-gray-700 mb-2">
                Upload Gambar
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 cursor-pointer file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-teal-500 file:text-white hover:file:bg-teal-600"
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-4 rounded-lg shadow-md max-h-56 object-cover w-full"
                />
              )}
            </div>

            <div className="flex-1">
              <label className="block font-medium text-gray-700 mb-2">
                Caption
              </label>
              <textarea
                value={newCaption}
                onChange={(e) => setNewCaption(e.target.value)}
                placeholder="Tulis caption atau cerita singkat karya kamu..."
                className="w-full h-32 p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none resize-none"
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={handlePost}
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all"
            >
              Unggah Karya
            </button>
          </div>
        </div>

        {/* Gallery Section */}
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center italic">
            Belum ada karya diunggah 😢
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={`Karya ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <p className="text-gray-700 mb-2">{post.caption}</p>
                  <p className="text-sm text-gray-400">oleh Anonim 🎭</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
