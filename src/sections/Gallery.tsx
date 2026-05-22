"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  // Menggunakan gambar placeholder dari Unsplash yang romantis dan estetik
  const images = [
    "/images/image1.webp",
    "/images/image2.webp",
    "/images/image3.webp",
    "/images/image4.webp",
    "/images/image5.webp",
    "/images/image6.webp",
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="font-(--font-playfair) text-2xl text-slate-100">
          Galeri Bahagia
        </h2>
        <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
          Momen Indah Kami
        </p>
      </div>

      {/* Grid Layout untuk Foto */}
      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative aspect-3/4 overflow-hidden rounded-xl shadow-sm bg-slate-100"
          >
            <img
              src={src}
              alt={`Foto Prewedding Rifqi ${index + 1}`}
              loading="lazy" // Mengaktifkan Lazy Loading sesuai NFR di PRD
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}