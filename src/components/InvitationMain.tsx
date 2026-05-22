"use client";

import { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import OpeningCover from "../sections/OpeningCover";
import Hero from "../sections/Hero";
import Countdown from "../sections/Countdown";
import EventDetail from "../sections/EventDetail";
import Gallery from "../sections/Gallery"; 
import StoryTimeline from "../sections/StoryTimeLine";
import Comments from "../sections/Comments";

export default function InvitationMain() {
  const searchParams = useSearchParams();
  const rawGuestName = searchParams.get("to");
  const guestName = rawGuestName ? decodeURIComponent(rawGuestName) : "Tamu Undangan";

  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);
    
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay music terblock browser:", err);
      });
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* File Audio Latar */}
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        loop
      />

      {/* AnimatePresence mendeteksi ketika komponen di dalamnya unmount/hilang */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <OpeningCover key="cover-screen" guestName={guestName} onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      {/* Tampilkan Konten Utama dengan Animasi Masuk Halus */}
      {isOpen && (
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="min-h-screen bg-slate-100 relative"
        >
          {/* Floating Music Button */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            onClick={toggleMusic}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-amber-600 transition-all active:scale-95 cursor-pointer text-lg"
          >
            {isPlaying ? "🎵" : "🔇"}
          </motion.button>

          {/* KONTAINER UTAMA (MOBILE FIRST LAYOUT) */}
          <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl border-x border-slate-200 overflow-hidden">
            
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Countdown Section */}
            <Countdown />

            {/* 3. Event Detail Section */}
            <EventDetail />

            {/* 4. Gallery Section */}
            <Gallery />

            {/* 5. Story Timeline Section */}
            <StoryTimeline />

            {/* 6. Comments Section */}
            <Comments />

            {/* Footer */}
            <footer className="py-8 bg-slate-50 border-t border-slate-100 text-center text-[10px] text-slate-400">
              © 2026 Rifqi & Pasangan. All Rights Reserved.
            </footer>

          </div>
        </motion.main>
      )}
    </>
  );
}