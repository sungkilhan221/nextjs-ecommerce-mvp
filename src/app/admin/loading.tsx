import { Loader2 } from "lucide-react";
import React from "react";

export default function AdminLoading() {
  return (
    <div className="flex justify-center">
      <Loader2 className="size-24 animate-spin text-slate-500 mt-[50%]" />
    </div>
  );
}
