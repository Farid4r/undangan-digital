"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  // Target waktu acara (Silakan sesuaikan tanggalnya, contoh: 31 Desember 2026)
  const targetDate = new Date("2026-12-31T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hari: d, jam: h, menit: m, detik: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { label: "Hari", value: timeLeft.hari },
    { label: "Jam", value: timeLeft.jam },
    { label: "Menit", value: timeLeft.menit },
    { label: "Detik", value: timeLeft.detik },
  ];

  return (
    <section className="py-10 bg-amber-50/50 rounded-2xl my-6 mx-4 p-6 border border-amber-100">
      <p className="text-xs uppercase tracking-widest text-slate-500 text-center mb-4">
        Menuju Hari Bahagia
      </p>
      <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto">
        {timeBlocks.map((block, index) => (
          <motion.div
            key={block.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="flex flex-col items-center bg-white p-3 rounded-xl shadow-sm border border-slate-100"
          >
            <span
              className="text-2xl font-bold text-amber-600"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {String(block.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 mt-1">
              {block.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}