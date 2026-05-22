"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getCommentsAction, addCommentAction, CommentData } from "../../app/actions";

export default function Comments() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState<CommentData[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Ambil data ucapan melalui Server Action
  const loadComments = async () => {
    try {
      setIsLoading(true);
      const data = await getCommentsAction();
      setComments(data);
    } catch (error) {
      console.error("Gagal memuat ucapan:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadComments();
  }, []);

  // 2. Kirim ucapan baru melalui Server Action
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi client-side dasar
    if (!name.trim() || !message.trim()) {
      alert("Nama dan ucapan tidak boleh kosong!");
      return;
    }

    try {
      setIsSubmitting(true);

      // Memanggil fungsi server action gaib kita
      const result = await addCommentAction(name.trim(), message.trim());

      if (!result.success) {
        alert(result.error || "Terjadi kesalahan.");
        return;
      }

      // Reset Form setelah sukses
      setName("");
      setMessage("");

      // Muat ulang daftar ucapan agar langsung sinkron
      await loadComments();
    } catch (error) {
      console.error("Eror saat mengirim ucapan:", error);
      alert("Gagal terhubung ke server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-6 border-b border-slate-100 bg-white">
      <div className="text-center mb-8">
        <h2 className="font-[family:var(--font-playfair)] text-2xl text-slate-800">
          Ucapan & Doa
        </h2>
        <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
          Berikan Doa Restu Anda (Vercel KV Engine)
        </p>
      </div>

      {/* FORM INPUT UCAPAN */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto mb-10 bg-slate-50 p-5 rounded-2xl border border-slate-100">
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
            Nama Anda
          </label>
          <input
            type="text"
            placeholder="Masukkan nama..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            maxLength={40}
            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 disabled:opacity-60 text-slate-800"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
            Ucapan / Doa
          </label>
          <textarea
            rows={3}
            placeholder="Tulis ucapan selamat & doa di sini..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSubmitting}
            maxLength={300}
            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 disabled:opacity-60 text-slate-800 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-slate-950 font-medium text-sm rounded-xl shadow-sm transition-all active:scale-[0.98] cursor-pointer"
        >
          {isSubmitting ? "Mengirim ke Server..." : "✨ Kirim Ucapan"}
        </button>
      </form>

      {/* DAFTAR LIVE COMMENT DISPLAY */}
      <div className="max-w-sm mx-auto space-y-4 max-h-[400px] overflow-y-auto pr-1">
        {isLoading ? (
          <p className="text-center text-xs text-slate-400 italic py-4 animate-pulse">
            Memuat ucapan tamu...
          </p>
        ) : comments.length === 0 ? (
          <p className="text-center text-xs text-slate-400 italic py-4">
            Belum ada ucapan. Jadilah yang pertama!
          </p>
        ) : (
          comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-50/70 p-4 rounded-xl border border-slate-100"
            >
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="font-semibold text-slate-800 text-sm truncate max-w-[200px]">
                  {comment.name}
                </h4>
                <span className="text-[9px] text-slate-400">
                  {new Date(comment.created_at).toLocaleDateString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed break-words whitespace-pre-line">
                {comment.message}
              </p>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}