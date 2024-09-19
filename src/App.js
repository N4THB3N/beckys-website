import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Happy Birthday, My Love!</h1>
      <p>Wishing you a day filled with love, joy, and everything beautiful!</p>
      <img 
        src="https://source.unsplash.com/featured/?birthday" 
        alt="Birthday Celebration" 
        className="birthday-image"
      />
      <button onClick={() => alert('Sending you all my love!')}>Send a Kiss 💋</button>
    </div>
  );
}

export default App;