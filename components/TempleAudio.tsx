"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TempleAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Auto-play with low volume for ambient effect
    audio.volume = 0.3;
    audio.loop = true;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.log("Audio play failed:", err);
      });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Only render if audio file exists
  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/temples-and-shrines.wav"
        preload="auto"
        onError={(e) => {
          // Silently fail if audio file doesn't exist
          console.log("Audio file not found - add /public/audio/temples-and-shrines.wav");
        }}
      />
      <button
        onClick={togglePlay}
        onMouseDown={(e) => e.preventDefault()}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-3 rounded-full bg-saffron-600/90 hover:bg-saffron-600 text-white shadow-lg transition-all duration-300",
          "hover:scale-110 active:scale-95",
          "focus:outline-none focus:ring-2 focus:ring-saffron-600 focus:ring-offset-2"
        )}
        aria-label={isPlaying ? "Pause temple bells" : "Play temple bells"}
        title={isPlaying ? "Pause ambient temple bells" : "Play ambient temple bells"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </>
  );
}

