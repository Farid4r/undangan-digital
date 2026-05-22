"use client";

import { motion } from "framer-motion";

interface OpeningCoverProps {
  guestName: string;
  onOpen: () => void;
}

export default function OpeningCover({ guestName, onOpen }: OpeningCoverProps) {
  return (
    <motion.div
      // Keadaan awal halaman muncul
      initial={{ opacity: 1, y: 0 }}
      // Animasi ketika tombol diklik (menghilang ke atas dengan smooth)
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Efek meluncur elegan
      className="fixed inset-0 z-50 flex flex-col items-center justify-between p-8 text-center bg-slate-900 text-white overflow-hidden"
    >
      {/* Background Image dengan Overlay */}
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200')` 
        }}
      />

      {/* Konten Atas dengan Animasi Fade-In & Slide-Down */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 mt-12"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
          The Wedding Of
        </p>
        <h2 className="text-4xl md:text-5xl font-(--font-playfair) mt-4 text-amber-200">
          Rifqi & Pasangan
        </h2>
      </motion.div>

      {/* Konten Tengah (Nama Tamu) dengan Animasi Zoom Halus */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10 my-auto max-w-md bg-black/30 p-6 rounded-2xl backdrop-blur-sm border border-white/10"
      >
        <p className="text-sm text-slate-300 italic mb-2">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
        <h1 className="text-2xl md:text-3xl tracking-wide text-white font-[family:var(--font-inter)]">
          {guestName}
        </h1>
      </motion.div>

      {/* Konten Bawah (Tombol Buka) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 mb-12"
      >
        <button
          onClick={onOpen}
          className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-medium rounded-full tracking-wider shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          ✉️ Buka Undangan
        </button>
      </motion.div>
    </motion.div>
  );
}