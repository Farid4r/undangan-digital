"use client";

import { motion } from "framer-motion";

export default function StoryTimeline() {
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
    <section className="py-12 px-6 border-b border-slate-100 bg-slate-50/50">
      <div className="text-center mb-10">
        <h2 className="font-(--font-playfair) text-2xl text-slate-800">
          Kisah Kami
        </h2>
        <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
          Our Love Story
        </p>
      </div>

      {/* Kontainer Utama Vertical Timeline */}
      <div className="relative border-l border-amber-200 max-w-sm mx-auto pl-6 ml-6">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 relative"
          >
            {/* Titik Penanda di Garis Timeline */}
            <span className="absolute -left-7.75 top-1.5 bg-amber-500 w-4 h-4 rounded-full border-4 border-white shadow-sm" />

            {/* Konten Cerita */}
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
              {story.date}
            </span>
            <h3 className="font-semibold text-slate-800 text-sm mt-2">
              {story.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              {story.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}