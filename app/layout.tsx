import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// 1. Konfigurasi Font Judul (Serif)
const weddingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-wedding", // Mengubahnya menjadi CSS Variable
});

// 2. Konfigurasi Font Teks Isi (Sans-Serif)
const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body", // Mengubahnya menjadi CSS Variable
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 3. Pasang variabel font di tag HTML agar bisa dibaca di seluruh halaman
    <html lang="id" className={`${weddingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}