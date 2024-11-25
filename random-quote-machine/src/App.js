import React, { useState, useEffect } from 'react';
// import React from 'react'
// import axios from 'axios'
import './App.css';


function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const quotes = [
    {
      text: ' Life is about making an impact, not making an income.',
      author: 'Kevin Kruse',
    },
    
    {
      text: 'Whatever the mind of man can conceive and believe, it can achieve.',
      author: 'Napoleon Hill',
    },

    {
      text: 'Strive not to be a success, but rather to be of value.',
      author: 'Albert Einstein',
    },

    {
      text: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
      author: 'Robert Frost',
    },

    {
      text: 'I attribute my success to this: I never gave or took any excuse.',
      author: 'Florence Nightingale',
    },

    {
      text: 'You miss 100% of the shots you don’t take.',
      author: 'Wayne Gretzky',
    },

    {
      text: 'I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I\ve failed over and over and over again in my life. And that is why I succeed.',
      author: 'Michael Jordan',
    },

    {
      text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
      author: 'Amelia Earhart',
    },

    {
      text: 'Every strike brings me closer to the next home run.',
      author: 'Babe Ruth',
    },

    {
      text: 'Definiteness of purpose is the starting point of all achievement.',
      author: 'W. Clement',
    },

    {
      text: 'Life isn\'t about getting and having, it\'s about giving and being.',
      author: 'Kevin Kruse',
    },

    {
      text: 'Life is what happens to you while you’re busy making other plans.',
      author: 'John Lennon',
    },

    {
      text: 'We become what we think about.',
      author: 'Earl Nightingale',
    },

    {
      text: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.',
      author: 'Mark Twain',
    },

    {
      text: 'Life is 10% what happens to me and 90% of how I react to it.',
      author: 'Charles Swindoll',
    },

    {
      text: 'The most common way people give up their power is by thinking they don’t have any.',
      author: 'Alice Walker',
    },

    {
      text: 'The mind is everything. What you think you become.',
      author: 'Buddha',
    },

    {
      text: 'The best time to plant a tree was 20 years ago. The second best time is now.',
      author: 'Chinese Proverb',
    },

    {
      text: 'An unexamined life is not worth living',
      author: 'Socrates',
    },

    {
      text: 'Eighty percent of success is showing up.',
      author: 'Woody Allen',
    },

    {
      text: 'Your time is limited, so don’t waste it living someone else’s life.',
      author: 'Steve Jobs',
    },

    {
      text: 'Winning isn’t everything, but wanting to win is.',
      author: 'Vince Lombardi',
    },

    {
      text: 'I am not a product of my circumstances. I am a product of my decisions.',
      author: 'Stephen Covey',
    },

    {
      text: 'Every child is an artist.  The problem is how to remain an artist once he grows up.',
      author: 'Pablo Picasso',
    },

    {
      text: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
      author: 'Christopher Columbus',
    },

    {
      text: 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
      author: 'Maya Angelou',
    },

    {
      text: 'Either you run the day, or the day runs you.',
      author: 'Jim Rohn',
    },

    {
      text: 'Whether you think you can or you think you can’t, you’re right.',
      author: 'Henry Ford',
    },

    {
      text: 'The two most important days in your life are the day you are born and the day you find out why.',
      author: 'Mark Twain',
    },

    {
      text: 'Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.',
      author: 'Johann Wolfgang von Goethe',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },


  ]
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  useEffect(() => {
    const initialQuote = getRandomQuote();
    setQuote(initialQuote.text);
    setAuthor(initialQuote.author);
  }, ['getRandomQuote']);

  const handleNewQuote = () => {
    const newQuote = getRandomQuote();
    setQuote(newQuote.text);
    setAuthor(newQuote.author);
  };

  // https://api.quotable.io/random

  /* const getRandomQuote = async () => {
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
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  } */

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
