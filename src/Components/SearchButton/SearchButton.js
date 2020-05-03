import React from "react";
import { Link } from "react-router-dom";

export default function SearchButton() {
  return (
    <Link to="/search">
      <div className="open-search">
        <button>Add a book</button>
      </div>
    </Link>
  );
}
