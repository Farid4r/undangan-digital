"use client";

import { motion } from "framer-motion";

interface OpeningCoverProps {
  guestName: string;
  onOpen: () => void;
}

export default function OpeningCover({ guestName, onOpen }: OpeningCoverProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between p-8 text-center bg-jet-black text-white overflow-hidden"
    >
      {/* Background Image dengan Overlay Minimalist Dark */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('images/image2.webp')` // Ganti dengan gambar cover yang kamu inginkan
        }}
      />
      
      {/* Overlay Gelap Jet Black */}
      <div className="absolute inset-0 bg-jet-black/75 z-10" />

      {/* Konten Atas dengan Animasi */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-20 mt-12"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-silver font-medium">
          The Wedding Of
        </p>
        <h2 className="text-4xl md:text-5xl font-(--font-playfair) mt-4 text-wh tracking-wide">
          Rifqi Subakti & Natasya Zahra 
        </h2>
      </motion.div>

      {/* Konten Tengah (Nama Tamu) - Menggunakan Glassmorphism Blue-Slate */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-20 my-auto max-w-md w-full bg-blue-slate/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-slate/30 shadow-2xl"
      >
        <p className="text-xs text-silver italic mb-2">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-white">
          {guestName}
        </h1>
      </motion.div>

      {/* Konten Bawah (Tombol Buka) - Menggunakan Aksen Coral Glow */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-20 mb-12"
      >
        <button
          onClick={onOpen}
          className="px-10 py-3.5 bg-coral-glow hover:bg-coral-glow/0 text-white font-semibold rounded-full tracking-widest shadow-lg shadow-coral-glow/20 transition-all hover:scale-105 active:scale-95 cursor-pointer text-xs uppercase"
        >
          Buka Undangan
        </button>
      </motion.div>
    </motion.div>
  );
}