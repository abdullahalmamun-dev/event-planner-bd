import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams(); 
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch('/Events.json') 
      .then((response) => response.json())
      .then((data) => {
        const foundArticle = data.find((item) => item.id === parseInt(id));
        setArticle(foundArticle);
        console.log('Data fetched successfully:', data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.article}</p>
      <p><strong>Category:</strong> {article.category}</p>
      <img src={article.picture} alt={article.title} />
      <p><strong>Date:</strong> {article.date}</p>
    </div>
  );
};

export default ArticleDetail;