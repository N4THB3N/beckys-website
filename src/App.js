import React, { useEffect } from 'react';
import './App.css';
import ourPicture from './assets/our-picture.jpg';

function App() {

  const createKisses = () => {
    // Create a new kiss container
    const kissContainer = document.createElement('div');
    kissContainer.classList.add('kisses-container');
    document.body.appendChild(kissContainer);

    // Generate kisses
    const generateKisses = () => {
      const kiss = document.createElement('div');
      kiss.classList.add('kiss');
      kiss.textContent = '💋'; // Adding the kiss emoji
      const size = Math.random() * 30 + 20 + 'px'; // Random sizes for kisses
      kiss.style.fontSize = size;
      kiss.style.left = Math.random() * 100 + 'vw';
      kiss.style.animationDelay = Math.random() * 2 + 's';
      kissContainer.appendChild(kiss);

      // Remove kisses from the DOM once animation is done
      setTimeout(() => {
        kiss.remove();
      }, 5000); // Time must match the animation duration
    };

    // Start generating kisses on an interval
    const intervalId = setInterval(generateKisses, 200); // Create kisses every 200ms

    // Cleanup function to stop the interval when component unmounts
    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    createKisses();
  }, []);

  return (
    <div className="app">
      <h1>¡Feliz cumpleaños, mi Becky!</h1>
      <p>Hola, mi amor ❤️. Te amo mucho; hice esto con mucho cariño para tí 💗. Disfruta de esta celebración 🍰🎉. <br></br> Haz venido a traer tanta felicidad a mi vida 💕.</p>
      <img 
        src={ourPicture}  
        alt="Celebración de cumpleaños" 
        className="birthday-image"
      />
    </div>
  );
}

export default App;
