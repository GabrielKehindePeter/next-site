"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

type Props = {
  initialValue?: string;
};

/**
 * Debounced search input — updates the `/blog` URL (search + page=1)
 * without filling up history on every keystroke.
 */
export default function Search({ initialValue = "" }: Props) {
  const [value, setValue] = useState<string>(initialValue);
  const router = useRouter();

  // Properly type timeout ref so clearTimeout works in TS
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // clear previous timer
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }

    debounceRef.current = setTimeout(() => {
      const trimmed = (value || "").trim();
      const encoded = encodeURIComponent(trimmed);

      // replace so we don't fill up browser history on each keystroke
      const url = encoded ? `/blog?search=${encoded}&page=1` : `/blog`;
      router.replace(url);
    }, 300);

    // cleanup for this effect run
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
    };
  }, [value, router]);

  return (
    <fieldset className="bg-base-200 border-base-300 rounded-box border p-4 mb-6">
      <legend className="fieldset-legend text-amber-100">Search Posts</legend>
      <div className="join">
        <input
          aria-label="Search posts"
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
