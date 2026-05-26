"use client";

import { motion } from "framer-motion";

export default function EventDetail() {
  // Ganti link ini dengan koordinat Google Maps lokasi acaramu (Format Embed)
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589.4424583541415!2d106.25857814591754!3d-6.357739983164567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4211c75347d6c7%3A0x5a6a234c6b8bfed4!2sMultimedia%20Darel%20Azhar!5e0!3m2!1sid!2sid!4v1779451046750!5m2!1sid!2sid";

  const eventBg = "images/image6.webp";

  return (
    <section className="relative py-16 px-4 overflow-hidden border-b border-blue-slate/20">
      
      {/* 1. Background Gambar Tekstur */}
      <img 
        src={eventBg}
        alt="Event Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 2. Overlay Sangat Gelap */}
      <div className="absolute inset-0 bg-jet-black/85 z-10" />

      {/* 3. Konten Utama (z-index tinggi) */}
      <div className="relative z-20 flex flex-col gap-8 max-w-sm mx-auto">
        <div className="text-center mb-4">
          <h2 className="font-wedding text-4xl text-white">
            Waktu & Tempat
          </h2>
          <p className="text-xs text-silver uppercase tracking-widest mt-1">
            Melangsungkan Acara
          </p>
        </div>

        {/* Kartu Resepsi - Menggunakan backdrop blur */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-blue-slate/20 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-blue-slate/30 text-center"
        >
          <h3 className="font-(--font-playfair) text-2xl text-white mb-2">
            Resepsi Pernikahan
          </h3>
          <hr className="w-12 mx-auto border-blue-slate/50 my-4" />
          <p className="text-sm font-bold text-white tracking-wide">Kamis, 31 Desember 2026</p>
          <p className="text-xs text-silver mt-1">Pukul 11:00 WIB - Selesai</p>
          <p className="text-sm text-white mt-5 font-semibold">
            Gedung Serbaguna Darel azhar
          </p>
          <p className="text-xs text-silver/80 max-w-xs mx-auto mt-1 font-light leading-relaxed">
            Jl. Komplek Pendidikan No. 45, Muara Ciujung Timur
          </p>
        </motion.div>

        {/* TAMPILAN MAPS EMBED DIREK */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-52 overflow-hidden rounded-2xl border border-blue-slate/30 shadow-2xl bg-blue-slate/10"
        >
          {/* Filter opsional digeser ke atas sini: Membuat peta agak redup agar senada dengan tema dark mode */}
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-85 brightness-95"
          />
        </motion.div>
      </div>
    </section>
  );
}