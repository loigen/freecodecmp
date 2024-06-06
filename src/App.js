import React, { useState, useEffect } from 'react';
import './App.css';

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;

  return (
    <div id="quote-box" className="quote-box">
      <p id="text" className="quote-text">{quote}</p>
      <p id="author" className="quote-author">- {author}</p>
      <button id="new-quote" className="new-quote-btn" onClick={fetchQuote}>New Quote</button>
      <a id="tweet-quote" className="tweet-quote" href={tweetUrl} target="_blank">Tweet Quote</a>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;
