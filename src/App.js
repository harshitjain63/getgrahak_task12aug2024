
import './App.css';

import React, { useState } from 'react';
import Quote from './Quote';

function App() {

  const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is what happens when you're busy making other plans.",
    "The only way to do great work is to love what you do.",
    "You miss 100% of the shots you don't take.",
    "Whether you think you can or you think you can't, you're right.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Success usually comes to those who are too busy to be looking for it.",
    "I find that the harder I work, the more luck I seem to have.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Act as if what you do makes a difference. It does.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "You must be the change you wish to see in the world.",
    "It is never too late to be what you might have been.",
    "Believe you can and you're halfway there.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Opportunities don't happen, you create them.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Dream big and dare to fail.",
    "You are never too old to set another goal or to dream a new dream.",
    "Everything you can imagine is real.",
    "Success is not in what you have, but who you are.",
    "What we fear doing most is usually what we most need to do.",
    "In the middle of every difficulty lies opportunity.",
    "The best revenge is massive success.",
    "The only way to achieve the impossible is to believe it is possible.",
    "A person who never made a mistake never tried anything new.",
    "Don't watch the clock; do what it does. Keep going.",
    "You only live once, but if you do it right, once is enough.",
    "It's not whether you get knocked down, it's whether you get up.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "The only place where success comes before work is in the dictionary.",
    "Your time is limited, don't waste it living someone else's life.",
    "If you want to lift yourself up, lift up someone else.",
    "The way to get started is to quit talking and begin doing.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The man who moves a mountain begins by carrying away small stones.",
    "If you can dream it, you can do it.",
    "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
    "We may encounter many defeats, but we must not be defeated.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
    "You can't build a reputation on what you are going to do.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "The secret of getting ahead is getting started.",
    "Failure will never overtake me if my determination to succeed is strong enough.",
    "I am not a product of my circumstances. I am a product of my decisions.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The future depends on what you do today.",
    "If you can imagine it, you can achieve it; if you can dream it, you can become it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "You must expect great things of yourself before you can do them.",
    "It does not matter how slowly you go as long as you do not stop."
  ];

  const [quote , setQuote] = useState('');
  const [showQuote , setShowQuote] = useState(false);
  
  
  function getRandomQuote() {

    const randomIndex = Math.floor(Math.random() * quotes.length ); 
    setQuote(quotes[randomIndex]);
    console.log(quote); 
    setShowQuote(true);
    //console.log(randomIndex)
    //console.log(quotes[randomIndex])
  }

  return (
    <div className="center-container">
      <h1 className="heading"> This is harshit Jain's code base . Enjoy Viewer </h1>
      <button className="button" onClick={getRandomQuote}>Click On me</button>
      <Quote  person={{ quote: quote, permission: showQuote }} />
    </div>
  );
}

export default App;
