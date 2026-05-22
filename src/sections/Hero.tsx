"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-12 flex flex-col items-center justify-center border-b border-slate-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.2em] text-amber-600 font-medium mb-3">
          Walimatul 'Ursy
        </p>
        <h1 className="text-4xl font-(--font-playfair) text-slate-800 my-2">
          Rifqi & Pasangan
        </h1>
        <p className="text-sm text-slate-500 italic max-w-xs mx-auto mt-4 px-4">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya..."
        </p>
      </motion.div>
    </section>
  );
}