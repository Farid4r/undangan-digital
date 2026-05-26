"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  // Menggunakan gambar placeholder dari Unsplash yang romantis dan estetik
  const images = [
    "/images/image1.webp",
    "/images/image4.webp",
    "/images/image6.webp",
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="font-wedding text-4xl text-white">
          Galeri Bahagia
        </h2>
        <p className="text-xs text-silver uppercase tracking-widest mt-1">
          Momen Indah Kami
        </p>
      </div>

      {/* Grid Layout 1 Kolon Penuh dengan Gap yang Lega */}
      <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl bg-blue-slate/20 border border-blue-slate/30"
          >
            <img
              src={src}
              alt={`Foto Prewedding Rifqi ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}