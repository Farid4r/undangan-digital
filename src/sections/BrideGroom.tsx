"use client";

import { motion } from "framer-motion";

interface ProfileCardProps {
  image: string;
  nickName: string;
  fullName: string;
  description: string;
  instagramUrl: string; // Tambahan properti untuk link Instagram
  isReverse?: boolean;
}

function ProfileCard({ image, nickName, fullName, description, instagramUrl, isReverse }: ProfileCardProps) {
  return (
    <div className={`flex flex-col ${isReverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 mb-16 md:mb-24 last:mb-0`}>
      {/* 1. FOTO MEMPELAI: Diubah menjadi bulat sempurna (rounded-full) dengan aspek rasio 1:1 */}
      <motion.div
        initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-48 h-48 overflow-hidden rounded-full shadow-2xl bg-blue-slate/10 border border-blue-slate/20 flex-shrink-0"
      >
        <img 
          src={image} 
          alt={nickName} 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 2. DETAIL BIO & TOMBOL INSTAGRAM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`flex-1 text-center ${isReverse ? "md:text-right" : "md:text-left"} flex flex-col ${isReverse ? "md:items-end" : "md:items-start"} items-center`}
      >
        <h3 className="font-wedding text-5xl md:text-6xl text-white mb-2">
          {nickName}
        </h3>
        
        <h4 className="text-lg md:text-xl font-wedding text-silver tracking-wide uppercase mb-3">
          {fullName}
        </h4>
        
        <p className={`text-xs md:text-sm text-coral-glow leading-relaxed max-w-sm mx-auto mb-4 ${isReverse ? "md:mr-0 md:ml-auto" : "md:ml-0 md:mr-auto"}`}>
          {description}
        </p>

        {/* TOMBOL INSTAGRAM MINIMALIS */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-coral-glow/40 hover:border-coral-glow text-silver hover:text-white bg-coral-glow/5 hover:bg-coral-glow/10 text-xs rounded-full shadow-sm transition-all duration-300 active:scale-95 cursor-pointer font-medium tracking-wide"
        >
          {/* Ikon Instagram SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-coral-glow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          @{nickName.toLowerCase()}
        </a>
      </motion.div>
    </div>
  );
}

export default function BrideGroom() {
  return (
    <section className="py-20 px-6 bg-transparent border-b border-blue-slate/20 overflow-hidden">
      <div className="max-w-md mx-auto">
        {/* Mempelai Pria */}
        <ProfileCard
          image="images/ripqi.jpg"
          nickName="Rifqi"
          fullName="Rifqi Subakti"
          description="Putra pertama dari pasangan Bapak Asep Subakti dan Ibu Titin"
          instagramUrl="https://instagram.com/rifqi" // <--- Ganti dengan link IG asli Rifqi
        />

        {/* Mempelai Wanita */}
        <ProfileCard
          image="/images/nanat.jpg"
          nickName="Natasya"
          fullName="Natashya Zahra"
          description="Putri kedua dari pasangan Bapak Nurdin dan Ibu"
          instagramUrl="https://instagram.com/natasya" // <--- Ganti dengan link IG asli Natasya
          isReverse
        />
      </div>
    </section>
  );
}