
"use client"
import React, { useState } from "react";
const Search = () => {

let [search,setSearch] = useState('')

  const handleSearch =()=>{
    alert(search)
  }

  return (
       <fieldset className="bg-base-200 border-base-300 rounded-box border p-4 mb-10">
            <legend className="fieldset-legend text-amber-100">Search Posts</legend>
            <div className="join">
                <input type="text" name="search" onChange={(e)=>setSearch((e).target.value)} className="input join-item focus:border-0 border-amber-100  sm:w-100 lg:w-250" placeholder="Enter key words" />
                <button onClick={handleSearch} className="btn join-item bg-black border-amber-100 border-amber-100">Search</button>
            </div>
        </fieldset>
  )
}

export default Search