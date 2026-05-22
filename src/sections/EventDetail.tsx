"use client";

import { motion } from "framer-motion";

export default function EventDetail() {
  // Ganti link ini dengan koordinat Google Maps lokasi acaramu
  const googleMapsUrl = "https://maps.google.com";

  return (
    <section className="py-8 px-4 flex flex-col gap-8">
      {/* Kartu Akad Nikah */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center"
      >
        <h3 className="[font-family:var(--font-playfair)] text-xl text-amber-700 font-semibold mb-2">
          Akad Nikah
        </h3>
        <hr className="w-12 mx-auto border-amber-200 my-3" />
        <p className="text-sm font-semibold text-slate-700">Kamis, 31 Desember 2026</p>
        <p className="text-xs text-slate-500 mt-1">Pukul 09:00 WIB - Selesai</p>
        <p className="text-sm text-slate-600 mt-4 font-medium">
          Masjid Agung Kota
        </p>
        <p className="text-xs text-slate-400 max-w-xs mx-auto mt-1">
          Jl. Pahlawan No. 123, Pusat Kota
        </p>
      </motion.div>

      {/* Kartu Resepsi */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center"
      >
        <h3 className="[font-family:var(--font-playfair)] text-xl text-amber-700 font-semibold mb-2">
          Resepsi Pernikahan
        </h3>
        <hr className="w-12 mx-auto border-amber-200 my-3" />
        <p className="text-sm font-semibold text-slate-700">Kamis, 31 Desember 2026</p>
        <p className="text-xs text-slate-500 mt-1">Pukul 11:00 WIB - Selesai</p>
        <p className="text-sm text-slate-600 mt-4 font-medium">
          Gedung Serbaguna Bahagia
        </p>
        <p className="text-xs text-slate-400 max-w-xs mx-auto mt-1">
          Jl. Kemerdekaan No. 45, Pusat Kota
        </p>
      </motion.div>

      {/* Tombol Google Maps */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-2"
      >
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
        >
          📍 Buka Google Maps
        </a>
      </motion.div>
    </section>
  );
}