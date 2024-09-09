import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../home/Nav/Navbar';
import Footer from '../home/footer/Footer';

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
      <Navbar></Navbar>
      <h1>{article.title}</h1>
      <p>{article.article}</p>
      <p><strong>Category:</strong> {article.category}</p>
      <img src={article.picture} alt={article.title} />
      <p><strong>Date:</strong> {article.date}</p>
      <Footer></Footer>
    </div>
  );
};

export default ArticleDetail;