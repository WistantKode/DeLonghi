'use client';

import React, { useState } from 'react';
import YouTube from 'react-youtube';
import Link from 'next/link';
import { FaPlayCircle, FaRegCopy, FaYoutube } from 'react-icons/fa';

interface InteractiveYoutubePlayerProps {
  videoId: string;
  youtubeUrl: string;
  youtubeChannelUrl: string;
}

const InteractiveYoutubePlayer: React.FC<InteractiveYoutubePlayerProps> = ({
  videoId,
  youtubeUrl,
  youtubeChannelUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getThumbnailUrl = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  const videoCoverImage = getThumbnailUrl(videoId);

  const playerOpts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
    },
  };

  const handleCopyLink = (url: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url)
        .then(() => alert('Lien YouTube copié !'))
        .catch(() => {
          const textarea = document.createElement('textarea');
          textarea.value = url;
          document.body.appendChild(textarea);
          textarea.select();
          try {
            document.execCommand('copy');
            alert('Lien YouTube copié ! (via fallback)');
          } catch (err) {
            console.error('Erreur lors de la copie (fallback):', err);
          }
          document.body.removeChild(textarea);
        });
    } else {
      alert(`Veuillez copier manuellement ce lien : ${url}`);
    }
  };

  return (
    <section className="w-full relative bg-black aspect-video flex justify-center items-center overflow-hidden">
      {isPlaying ? (
        <div className="w-full h-full absolute inset-0">
          <YouTube
            videoId={videoId}
            opts={playerOpts}
            className="w-full h-full"
            onEnd={() => setIsPlaying(false)}
          />
        </div>
      ) : (
        <div
          className="w-full h-full absolute inset-0 bg-cover bg-center transition-opacity duration-300 hover:opacity-90 cursor-pointer group"
          style={{
            backgroundImage: `url(${videoCoverImage})`,
            backgroundColor: '#e7e7e7',
          }}
          onClick={() => setIsPlaying(true)}
        >
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>

          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 text-white z-10">
            {/* Header Vidéo */}
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col gap-2">
                <div className="flex items-center text-xs sm:text-sm bg-black/50 rounded-full px-3 py-1 backdrop-blur-sm w-fit">
                  <Link
                    href={youtubeChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-gray-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaYoutube className="w-4 h-4 mr-2 text-red-600" />
                    <span className="font-bold">De&apos;Longhi France</span>
                  </Link>
                </div>
              </div>

              <button
                className="flex flex-col items-center justify-center cursor-pointer group/btn p-2 hover:bg-white/10 rounded-lg transition"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopyLink(youtubeUrl);
                }}
                title="Copier le lien"
              >
                <FaRegCopy className="w-5 h-5 text-white group-hover/btn:text-gray-200 transition-colors" />
                <span className="text-[10px] mt-1 opacity-0 group-hover/btn:opacity-100 transition-opacity">Copier</span>
              </button>
            </div>

            {/* Bouton Play Central */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <FaPlayCircle className="w-16 h-16 sm:w-24 sm:h-24 text-white/90 group-hover:scale-110 transition-transform duration-300 drop-shadow-xl" />
            </div>

            {/* Footer Vidéo */}
            <div className="self-start">
              <Link
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xs sm:text-sm bg-black/60 hover:bg-red-600 px-4 py-2 rounded-full transition-colors backdrop-blur-md"
                onClick={(e) => e.stopPropagation()}
              >
                <FaPlayCircle className="w-4 h-4 mr-2" /> Regarder sur YouTube
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InteractiveYoutubePlayer;
