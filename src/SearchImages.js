import React, { useState } from "react";

export default function SearchImages({ searchText }) {
  const [text, setText] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    searchText(text);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="container mx-auto py-4 text-black">
        <input
          onChange={(e) => setText(e.target.value)}
          id="searchfield"
          type="search"
          placeholder="Search..."
          autoFocus="autofocus"
          className="w-full text-grey-800 transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl"
        />
      </form>
    </>
  );
}
