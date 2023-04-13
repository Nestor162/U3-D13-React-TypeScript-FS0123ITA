import React, { useEffect, useState } from "react";
import { IArticles } from "../interfaces/IArticles";
import Articles from "./Articles";

function ArticlesFetch() {
  const API_URL = "https://api.spaceflightnewsapi.net/v4/articles";

  const [articles, setArticles] = useState<IArticles>();

  const articlesFetch = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setArticles(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    articlesFetch();
  }, []);

  return (
    <>
      {articles &&
        articles.results.map(article => {
          return <Articles article={article} />;
        })}
    </>
  );
}

export default ArticlesFetch;
