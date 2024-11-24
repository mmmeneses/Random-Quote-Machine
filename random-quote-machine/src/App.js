import React, { useState, useEffect } from 'react';
// import React from 'react'
import axios from 'axios'
import './App.css';


function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  /* const quotes = [
    {
      text: '',
      author: '',
    }
  ] */

  // https://api.quotable.io/random

  const getRandomQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      return {
        text: response.data.content,
        author: response.data.author,
      };
    } catch (error) {
      console.error('Error fetching quote: ', error);
      return {
        text: 'An error occurred, Please try again.',
        author: 'Unknown',
      };
    }
  }; 

  const fetchQuote = () => {
    getRandomQuote().then((newQuote) => {
      setQuote(newQuote.text);
      setAuthor(newQuote.author);
    });
  };

  useEffect(() => {
    fetchQuote();
  });

  const handleNewQuote = () => {
    fetchQuote();
  }

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">"{quote}"</p>
        <p id="author">- {author}</p>
        <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
        <a
          id="tweet-quote"
          target="_top"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
}

export default App;
