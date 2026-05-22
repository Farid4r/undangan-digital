"use client";

import { motion } from "framer-motion";

export default function Hero() {
  // Placeholder foto Prewedding estetik
  const heroBg = "/images/image1.webp"; 

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center border-b border-blue-slate/20 overflow-hidden">
      
      {/* 1. Background Gambar dengan Lazy Loading */}
      <img 
        src={heroBg}
        alt="Hero Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 2. Overlay Gelap untuk Keterbacaan Teks (Jet Black dengan Opasitas) */}
      <div className="absolute inset-0 bg-jet-black/70 z-10" />

      {/* 3. Konten Teks (z-index tinggi agar di atas overlay) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 text-center px-6 py-16 flex flex-col items-center justify-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-silver font-bold mb-3">
          Walimatul 'Ursy
        </p>
        
        <h1 className="text-5xl font-(--font-playfair) text-white my-2 leading-tight">
          Rifqi & Natasya
        </h1>
        
        <div className="w-16 h-0.5 bg-coral-glow/50 mx-auto my-6 rounded-full"></div>
        
        <p className="text-sm text-silver italic max-w-xs mx-auto leading-relaxed font-light">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya..."
        </p>
      </motion.div>
    </section>
  );
}