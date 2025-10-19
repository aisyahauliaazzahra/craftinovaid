import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { supabaseService } from "../services/supabaseService";

const Gallery = ({ setCurrentView, setShowPasswordModal, companyInfo }) => {
  const [posts, setPosts] = useState([]);
  const [newCaption, setNewCaption] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // 🔹 Fetch gallery posts dari Supabase
  const fetchGallery = async () => {
    const { data, error } = await supabaseService.getGalleryPosts();
    if (error) {
      console.error("Gagal mengambil data galeri:", error);
    } else {
      setPosts(data || []);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // 🔹 Handle pilih gambar
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // 🔹 Upload post baru
  const handlePost = async () => {
    if (!newImage || !newCaption.trim()) {
      alert("Lengkapi gambar dan caption dulu ya 💚");
      return;
    }

    try {
      setIsUploading(true);

      const fileName = `${Date.now()}_${newImage.name}`;
      const { error: uploadError } = await supabaseService.uploadGalleryImage(fileName, newImage);
      if (uploadError) throw uploadError;

      const { publicUrl } = supabaseService.getPublicImageUrl(fileName);

      const newPost = {
        image_url: publicUrl,
        caption: newCaption,
        created_at: new Date().toISOString(),
      };

      const { error: insertError } = await supabaseService.addGalleryPost(newPost);
      if (insertError) throw insertError;

      await fetchGallery(); // ⏱️ refresh otomatis setelah upload

      setNewCaption("");
      setNewImage(null);
      setPreview(null);
      alert("Karya berhasil diunggah 🎨");
    } catch (err) {
      console.error("Gagal mengunggah:", err);
      alert("Terjadi kesalahan saat mengunggah 😢");
    } finally {
      setIsUploading(false);
    }
  };

  // 🔹 Hapus post dari database
  const handleDelete = async (id) => {
    if (!window.confirm("Yakin mau hapus karya ini? 😢")) return;
    try {
      await supabaseService.deleteUserAnswer(id); // panggil function delete dari service
      await fetchGallery(); // refresh data
      alert("Karya berhasil dihapus 🗑️");
    } catch (error) {
      console.error("Gagal menghapus:", error);
      alert("Terjadi kesalahan saat menghapus");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50">
      <Header
        companyInfo={companyInfo}
        setCurrentView={setCurrentView}
        setShowPasswordModal={setShowPasswordModal}
        activeView="gallery"
      />

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
              disabled={isUploading}
              className={`${
                isUploading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
              } text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all`}
            >
              {isUploading ? "Mengunggah..." : "Unggah Karya"}
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
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden relative"
              >
                <img
                  src={post.image_url}
                  alt={post.caption}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <p className="text-gray-700 mb-2">{post.caption}</p>
                  <p className="text-sm text-gray-400">oleh Anonim 🎭</p>
                </div>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-600 transition"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
