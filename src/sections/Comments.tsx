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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert("Nama dan ucapan tidak boleh kosong!");
      return;
    }

    try {
      setIsSubmitting(true);
      const result = await addCommentAction(name.trim(), message.trim());

      if (!result.success) {
        alert(result.error || "Terjadi kesalahan.");
        return;
      }

      setName("");
      setMessage("");
      await loadComments();
    } catch (error) {
      console.error("Eror saat mengirim ucapan:", error);
      alert("Gagal terhubung ke server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-6 border-b border-blue-slate/20 bg-transparent">
      <div className="text-center mb-8">
        <h2 className="font-(--font-playfair) text-2xl text-white">
          Ucapan & Doa
        </h2>
        <p className="text-xs text-silver uppercase tracking-widest mt-1">
          Berikan Doa Restu Anda
        </p>
      </div>

      {/* FORM INPUT UCAPAN */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto mb-10 bg-blue-slate/20 p-5 rounded-2xl border border-blue-slate/30">
        <div>
          <label className="block text-xs font-semibold text-silver uppercase tracking-wider mb-1">
            Nama Anda
          </label>
          <input
            type="text"
            placeholder="Masukkan nama..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            maxLength={40}
            className="w-full px-4 py-2.5 bg-jet-black border border-blue-slate/40 rounded-xl text-sm focus:outline-none focus:border-coral-glow disabled:opacity-60 text-white placeholder-silver/40"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-silver uppercase tracking-wider mb-1">
            Ucapan / Doa
          </label>
          <textarea
            rows={3}
            placeholder="Tulis ucapan selamat & doa di sini..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSubmitting}
            maxLength={300}
            className="w-full px-4 py-2.5 bg-jet-black border border-blue-slate/40 rounded-xl text-sm focus:outline-none focus:border-coral-glow disabled:opacity-60 text-white resize-none placeholder-silver/40"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2.5 bg-coral-glow hover:bg-coral-glow/90 disabled:bg-coral-glow/50 text-white font-medium text-sm rounded-xl shadow-sm transition-all active:scale-[0.98] cursor-pointer"
        >
          {isSubmitting ? "Mengirim ke Server..." : "Kirim Ucapan"}
        </button>
      </form>

      {/* DAFTAR LIVE COMMENT DISPLAY */}
      <div className="max-w-sm mx-auto space-y-4 max-h-100 overflow-y-auto pr-1">
        {isLoading ? (
          <p className="text-center text-xs text-silver italic py-4 animate-pulse">
            Memuat ucapan tamu...
          </p>
        ) : comments.length === 0 ? (
          <p className="text-center text-xs text-silver italic py-4">
            Belum ada ucapan. Jadilah yang pertama!
          </p>
        ) : (
          comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-slate/30 p-4 rounded-xl border border-blue-slate/20"
            >
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="font-semibold text-white text-sm truncate max-w-50">
                  {comment.name}
                </h4>
                <span className="text-[9px] text-silver/70">
                  {new Date(comment.created_at).toLocaleDateString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <p className="text-xs text-silver leading-relaxed wrap-break-word whitespace-pre-line">
                {comment.message}
              </p>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}