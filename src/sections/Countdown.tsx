"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
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

  // Susunan nama hari dalam seminggu
  const weekdays = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];

  // Mapping tanggal Desember 2026. 
  // Dua string kosong di awal karena tanggal 1 Desember 2026 jatuh pada hari Selasa.
  const calendarDays = [
    "", "", 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31
  ];

  return (
    <section className="py-10 bg-blue-slate/10 rounded-2xl my-6 mx-4 p-6 border border-blue-slate/20 flex flex-col items-center">
      <p className="text-xs uppercase tracking-widest text-silver text-center mb-6">
        Menuju Hari Bahagia
      </p>
      
      {/* 1. Grid Blok Hitung Mundur */}
      <div className="grid grid-cols-4 gap-2 w-full max-w-sm mx-auto mb-6">
        {timeBlocks.map((block, index) => (
          <motion.div
            key={block.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="flex flex-col items-center bg-blue-slate/30 p-3 rounded-xl shadow-sm border border-blue-slate/40"
          >
            <span
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {String(block.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-silver mt-1">
              {block.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* 2. Tampilan Teks Cetak Tanggal Pernikahan */}
      <div className="text-center text-sm font-medium tracking-widest text-coral-glow my-2">
        31 • 12 • 2026
      </div>

      {/* 3. Garis Pembatas Minimalis */}
      <hr className="w-full max-w-sm border-blue-slate/20 my-4" />

      {/* 4. Komponen Kalender Mini */}
      <div className="w-full max-w-sm mx-auto text-center mt-2">
        <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-5">
          DESEMBER 2026
        </h4>

        {/* Baris Nama Hari */}
        <div className="grid grid-cols-7 gap-y-2 text-center text-[10px] text-silver font-bold tracking-wider mb-3">
          {weekdays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Grid Angka Tanggal */}
        <div className="grid grid-cols-7 gap-y-3 text-center text-xs font-medium text-silver/80">
          {calendarDays.map((day, idx) => {
            const isTargetDay = day === 31; // Menyorot hari H pernikahan (tanggal 31)
            
            return (
              <div key={idx} className="flex items-center justify-center relative h-7 w-7 mx-auto">
                {isTargetDay ? (
                  /* Efek lingkaran menyala/glowing pada tanggal pernikahan */
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 bg-coral-glow text-white font-bold rounded-full shadow-lg shadow-coral-glow/30 flex items-center justify-center h-7 w-7"
                  >
                    <span>{day}</span>
                  </motion.div>
                ) : (
                  <span>{day}</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend / Penanda di bagian bawah kalender */}
        <div className="flex items-center justify-center gap-2 text-[10px] text-silver/70 mt-6 tracking-wide">
          <span className="h-2 w-2 rounded-full bg-coral-glow inline-block animate-pulse" />
          <span>Hari Pernikahan Kami</span>
        </div>
      </div>
    </section>
  );
}