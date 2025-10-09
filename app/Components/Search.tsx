"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

/**
 * Props:
 * - initialValue: string (optional) to populate input on first render
 */
export default function Search({ initialValue = "" }) {
  const [value, setValue] = useState(initialValue);
  const router = useRouter();
  const debounceRef = useRef(null);

  // Debounce updating the URL so we don't spam history or re-renders
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const trimmed = (value || "").trim();
      const encoded = encodeURIComponent(trimmed);

      // replace so we don't fill up browser history on each keystroke
      const url = encoded ? `/blog?search=${encoded}&page=1` : `/blog`;
      router.replace(url);
    }, 300);

    return () => clearTimeout(debounceRef.current);
  }, [value, router]);

  return (
    <fieldset className="bg-base-200 border-base-300 rounded-box border p-4 mb-6">
      <legend className="fieldset-legend text-amber-100">Search Posts</legend>
      <div className="join">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter keywords"
          className="input join-item focus:border-0 border-amber-100 md:w-190 lg:w-290 sm:w-150"
        />
         
      </div>
    </fieldset>
  );
}
