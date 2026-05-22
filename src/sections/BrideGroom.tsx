"use client";

import { motion } from "framer-motion";

interface ProfileCardProps {
  image: string;
  nickName: string;
  fullName: string;
  description: string;
  isReverse?: boolean;
}

function ProfileCard({ image, nickName, fullName, description, isReverse }: ProfileCardProps) {
  return (
    <div className={`flex flex-col ${isReverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 mb-16 md:mb-24 last:mb-0`}>
      {/* 1. FOTO MEMPELAI: Ukuran lebih kecil, pinggiran border putih DIHAPUS */}
      <motion.div
        initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-52 md:w-60 h-72 md:h-80 overflow-hidden rounded-[32px] shadow-2xl bg-blue-slate/10 border border-blue-slate/20"
      >
        <img 
          src={image} 
          alt={nickName} 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 2. DETAIL BIO: Warna disesuaikan dengan tema Dark Minimalist */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`flex-1 text-center ${isReverse ? "md:text-right" : "md:text-left"}`}
      >
        {/* Menggunakan Aksen Coral Glow */}
        <h3 className="font-(--font-playfair) text-5xl md:text-6xl text-white mb-2">
          {nickName}
        </h3>
        
        {/* Nama Lengkap Putih */}
        <h4 className="text-lg md:text-xl font-bold text-silver tracking-wide uppercase mb-4">
          {fullName}
        </h4>
        
        {/* Deskripsi Orang Tua berwarna Silver dengan auto-margin responsif yang presisi */}
        <p className={`text-xs md:text-sm text-coral-glow leading-relaxed max-w-sm mx-auto ${isReverse ? "md:mr-0 md:ml-auto" : "md:ml-0 md:mr-auto"}`}>
          {description}
        </p>
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
          image="/images/ripki.jpg"
          nickName="Rifqi"
          fullName="Rifqi Subakti"
          description="Putra pertama dari pasangan Bapak Asep Subakti dan Ibu Titin"
        />

        {/* Mempelai Wanita */}
        <ProfileCard
          image="/images/nanat.jpg"
          nickName="Natasya"
          fullName="Natasya Zahra Nurdin"
          description="Putri Pertama dari pasangan (Alm) Bapak Nurdim dan Ibu ...."
          isReverse
        />
      </div>
    </section>
  );
}