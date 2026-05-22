import { Suspense } from "react";
import InvitationMain from "../src/components/InvitationMain";

export default function Home() {
  return (
    <Suspense 
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
          <p className="text-slate-500 font-serif animate-pulse">Memuat Undangan...</p>
        </div>
      }
    >
      <InvitationMain />
    </Suspense>
  );
}