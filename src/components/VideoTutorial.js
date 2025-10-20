import React, { useState } from 'react';
import { CheckCircle, ExternalLink, Play, Clock } from 'lucide-react';

const VideoTutorial = ({ handleVideoComplete }) => {
  const [videosWatched, setVideosWatched] = useState({
    video1: false,
    video2: false,
    video3: false
  });
  
  const videos = [
    {
      id: "video1",
      youtubeId: "H_yxAO6TgCI",
      title: "Tutorial membuat gantungan kunci",
    },
    {
      id: "video2", 
      youtubeId: "elh-kIQ_Bos",
      title: "Tutorial membuat scrunchie",
    },
    {
      id: "video3",
      youtubeId: "wafWlDIe19s", 
      title: "Tutorial membuat pouch",
    }
  ];

  const handleVideoCheck = (videoId, checked) => {
    setVideosWatched(prev => ({
      ...prev,
      [videoId]: checked
    }));
  };

  const allVideosWatched = Object.values(videosWatched).every(watched => watched);
  const watchedCount = Object.values(videosWatched).filter(watched => watched).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Tutorial DIY Craftinova Kit</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Ikuti serangkaian tutorial lengkap tentang DIY Craftinova Kit. 
            Tonton ketiga video untuk mempermudah membuat kit.
          </p>
          
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm text-gray-600">{watchedCount}/3 video selesai</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(watchedCount / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-1">
          {videos.map((video, index) => (
            <div key={video.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full font-semibold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{video.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{video.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </div>
                
                {/* Video Player */}
                <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg mb-4">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Checkbox */}
                <div className="flex items-center justify-center">
                  <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={videosWatched[video.id]}
                      onChange={(e) => handleVideoCheck(video.id, e.target.checked)}
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>Saya telah menonton video ini</span>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Continue Button */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Siap untuk Memulai Aktivitas?</h3>
            <p className="text-gray-600 mb-6">
              {allVideosWatched 
                ? "Hebat! Anda telah menonton semua video tutorial. Sekarang saatnya untuk mulai berkreasi!" 
                : `Silakan tonton ${3 - watchedCount} video yang tersisa untuk melanjutkan ke aktivitas.`
              }
            </p>
            
            <button
              onClick={handleVideoComplete}
              disabled={!allVideosWatched}
              className={`py-4 px-10 rounded-xl font-semibold flex items-center justify-center space-x-3 mx-auto transition-all transform ${
                allVideosWatched
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:scale-105 shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">Lanjut ke Aktivitas Selanjutnya</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorial;