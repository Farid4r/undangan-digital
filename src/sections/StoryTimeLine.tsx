"use client";

import { motion } from "framer-motion";

export default function StoryTimeline() {
  // Foto latar belakang estetik untuk bagian kisah perjalanan hubungan
  const storyBg = "/images/image5.webp";

  const stories = [
    {
      title: "Awal Bertemu",
      date: "Maret 2023",
      description: "Pertama kali dipertemukan dalam sebuah proyek kerja kelompok di kampus.",
    },
    {
      title: "Komitmen Bersama",
      date: "Januari 2024",
      description: "Setelah saling mengenal, kami memutuskan untuk berkomitmen melangkah ke arah yang lebih serius.",
    },
    {
      title: "Lamaran",
      date: "Agustus 2025",
      description: "Pertemuan keluarga besar untuk mengikat janji suci sebelum melangkah ke jenjang pernikahan.",
    },
  ];

  return (
    <section className="relative py-16 px-6 border-b border-blue-slate/20 overflow-hidden">
      
      {/* 1. Background Gambar dengan Lazy Loading */}
      <img
        src={storyBg}
        alt="Story Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 2. Overlay Gelap Jet Black */}
      <div className="absolute inset-0 bg-jet-black/85 z-10" />

      {/* 3. Konten Utama (z-index tinggi) */}
      <div className="relative z-20 max-w-sm mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-(--font-playfair) text-3xl text-white">
            Kisah Kami
          </h2>
          <p className="text-xs text-silver uppercase tracking-widest mt-1">
            Our Love Story
          </p>
        </div>

        {/* Kontainer Utama Vertical Timeline */}
        <div className="relative border-l border-blue-slate/40 pl-6 ml-4">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-10 relative"
            >
              {/* Titik Penanda di Garis Timeline - Menggunakan aksen Coral Glow */}
              <span className="absolute -left-7.75 top-1.5 bg-coral-glow w-4 h-4 rounded-full border-4 border-jet-black shadow-md" />

              {/* Konten Badge Tanggal */}
              <span className="text-[10px] uppercase font-bold tracking-wider text-coral-glow bg-blue-slate/30 border border-blue-slate/40 px-2.5 py-1 rounded-md">
                {story.date}
              </span>
              
              <h3 className="font-semibold text-white text-base mt-3">
                {story.title}
              </h3>
              
              <p className="text-xs text-silver mt-1.5 leading-relaxed font-light">
                {story.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}