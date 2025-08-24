import React, { useState } from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';

const VideoTutorial = ({ handleVideoComplete }) => {
  const [videoWatched, setVideoWatched] = useState(false);
  
  const youtubeVideoId = "dQw4w9WgXcQ"; 
  const videoTitle = "DIY Art Therapy: Membuat Kerajinan Mindful dengan Limbah Tekstil";
  
  const handleVideoEnd = () => {
    setVideoWatched(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tutorial DIY Art Therapy</h2>
        
        {/* Video Section */}
        <div className="mb-6">
          <div className="bg-gray-100 rounded-xl p-4 mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{videoTitle}</h3>
            <p className="text-sm text-gray-600 mb-4">
              Tutorial lengkap tentang cara membuat kerajinan tangan yang menenangkan menggunakan limbah tekstil. 
              Video ini akan membantu Anda dalam proses art therapy sambil berkontribusi pada lingkungan.
            </p>
          </div>
          
          <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
              title={videoTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        {/* Button Section */}
        <div className="text-center">
          <div className="mb-4">
            <label className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={videoWatched}
                onChange={(e) => setVideoWatched(e.target.checked)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>Saya telah menonton video tutorial ini</span>
            </label>
          </div>
          
          <button
            onClick={handleVideoComplete}
            disabled={!videoWatched}
            className={`py-3 px-8 rounded-xl font-semibold flex items-center justify-center space-x-2 mx-auto transition-all ${
              videoWatched
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            <span>Lanjut ke Aktivitas</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorial;
