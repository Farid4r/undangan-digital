"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface GiftCardProps {
  type: "Bank" | "E-Wallet";
  name: string;
  number: string;
  holder: string;
}

function GiftCard({ type, name, number, holder }: GiftCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin teks:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-sm mx-auto bg-blue-slate/20 border border-blue-slate/30 p-6 rounded-2xl shadow-sm relative overflow-hidden"
    >
      {/* Decorative Badge */}
      <span className="absolute top-3 right-3 bg-coral-glow/10 text-coral-glow text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
        {type}
      </span>

      <div className="flex flex-col items-start text-left">
        {/* Logo / Brand Name */}
        <h4 className="text-xl font-extrabold tracking-wide text-white mb-4 uppercase">
          {name}
        </h4>

        {/* Account Number */}
        <p className="text-xs text-silver/60 uppercase tracking-widest mb-1">
          Nomor Rekening / HP
        </p>
        <p className="text-lg font-mono font-bold text-white tracking-wider mb-4">
          {number}
        </p>

        {/* Account Holder */}
        <p className="text-xs text-silver/60 uppercase tracking-widest mb-1">
          Atas Nama
        </p>
        <p className="text-sm font-medium text-white mb-6">
          {holder}
        </p>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`w-full py-2.5 rounded-xl font-medium text-xs tracking-wider uppercase transition-all duration-300 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 ${
            copied
              ? "bg-emerald-600 text-white shadow-md"
              : "bg-coral-glow text-white hover:bg-coral-glow/90 shadow-sm"
          }`}
        >
          {copied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Tersalin!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Salin Nomor
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default function DigitalGift() {
  return (
    <section className="py-16 px-6 bg-transparent border-b border-blue-slate/20 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10 max-w-md mx-auto"
      >
        <h2 className="font-(--font-playfair) text-3xl text-white mb-2">
          Digital Gift
        </h2>
        <p className="text-xs text-silver leading-relaxed max-w-xs mx-auto">
          Bagi keluarga dan kerabat yang ingin memberikan tanda kasih, Anda dapat mengirimkannya melalui dompet digital atau transfer bank berikut:
        </p>
      </motion.div>

      {/* Grid Container Card */}
      <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
        <GiftCard
          type="Bank"
          name="BCA"
          number="8720193841"
          holder="Rifqi Subakti"
        />

        <GiftCard
          type="E-Wallet"
          name="DANA"
          number="081234567890"
          holder="Rifqi Subakti"
        />
      </div>
    </section>
  );
}