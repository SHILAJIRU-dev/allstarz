// ./components/LogoutButton.tsx
"use client";

import { supabase } from "@/lib/supaBaseClient";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/'); // Redirect to home page after logout
    router.refresh(); // Refresh the page to update the header
  };

  return (
    <button
      onClick={handleLogout}
      className="py-2 px-5 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
    >
      Log Out
    </button>
  );
}