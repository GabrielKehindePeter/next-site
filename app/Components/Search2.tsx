"use client";

import { useRouter } from "next/navigation"; 
 
import React, { useEffect, useState } from "react"; 
 

const Search = () => {

 
  let [search, setSearch] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (search == "") {
       
      router.push('/blog');
      
    } else {
       
      router.push(`/blog?search=${search}`);
    }
  }, [search, router]);
 

  return (
    <fieldset className="bg-base-200 border-base-300 rounded-box border p-4 mb-10">
      
      <legend className="fieldset-legend text-amber-100">
        Search Posts
      </legend>
  
      <div className="join">
      
        <input
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
         
          className="input join-item focus:border-0 border-amber-400 sm:w-100 lg:w-290"
          placeholder="Enter key words"
        />
 
      </div>
    </fieldset>
  );
};

export default Search;
