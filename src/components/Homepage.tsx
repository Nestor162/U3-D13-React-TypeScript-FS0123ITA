import React from "react";
import ArticlesFetch from "./ArticlesFetch";

function Homepage() {
  return (
    <>
      <h1 className="text-center mb-4 mt-5">Breaking News 🚀</h1>
      <ArticlesFetch />
    </>
  );
}

export default Homepage;
