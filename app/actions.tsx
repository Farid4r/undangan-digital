"use server";

import { kv } from "@vercel/kv";

// Struktur data komentar yang akan disimpan di Redis
export interface CommentData {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

// Key unik untuk menyimpan list komentar di Redis
const KV_COMMENTS_KEY = "wedding:comments";

/**
 * 1. ACTION UNTUK MENGAMBIL DATA UCAPAN (FETCH)
 */
export async function getCommentsAction(): Promise<CommentData[]> {
  try {
    // Mengambil semua data dari list Redis (0 sampai -1 artinya semua item)
    const rawComments = await kv.lrange<string | CommentData>(KV_COMMENTS_KEY, 0, -1);
    
    if (!rawComments) return [];

    // Redis menyimpan data dalam bentuk string JSON, mari kita parsing kembali ke Object
    return rawComments.map((item) => {
      if (typeof item === "string") {
        return JSON.parse(item) as CommentData;
      }
      return item;
    });
  } catch (error) {
    console.error("Gagal mengambil data dari Vercel KV di sisi server:", error);
    return [];
  }
}

/**
 * 2. ACTION UNTUK MENGIRIM UCAPAN BARU (INSERT)
 */
export async function addCommentAction(name: string, message: string): Promise<{ success: boolean; error?: string }> {
  // Validasi keamanan di sisi server (Server-Side Validation)
  if (!name.trim() || !message.trim()) {
    return { success: false, error: "Nama dan ucapan tidak boleh kosong!" };
  }

  if (name.length > 40 || message.length > 300) {
    return { success: false, error: "Karakter melewati batas maksimal!" };
  }

  try {
    const newComment: CommentData = {
      id: `comment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: name.trim(),
      message: message.trim(),
      created_at: new Date().toISOString(),
    };

    // LPUSH berfungsi memasukkan data baru ke urutan paling awal/atas (Newest First)
    await kv.lpush(KV_COMMENTS_KEY, JSON.stringify(newComment));
    
    return { success: true };
  } catch (error) {
    console.error("Gagal menyimpan data ke Vercel KV di sisi server:", error);
    return { success: false, error: "Gagal menyimpan data ke database server." };
  }
}