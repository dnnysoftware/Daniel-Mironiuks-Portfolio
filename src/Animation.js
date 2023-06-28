import { useEffect, useRef } from 'react';
import './css/Animation.css';

function MatrixRainAnimation() {
    const canvasRef = useRef(null);
    const dropsRef = useRef([]);
    const columnsRef = useRef(0);
    const fontSize = 10;
    const letters = '10'.split('');
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const { width, height } = canvas;
  
      const columns = Math.floor(width / fontSize);
      columnsRef.current = columns;
  
      const drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
      dropsRef.current = drops;
  
      const draw = () => {
        context.fillStyle = 'rgba(0, 0, 0, .1)';
        context.fillRect(0, 0, width, height);
        for (let i = 0; i < drops.length; i++) {
          const text = letters[Math.floor(Math.random() * letters.length)];
          context.fillStyle = '#0f0';
          context.fillText(text, i * fontSize, drops[i] * fontSize);
          drops[i]++;
          if (drops[i] * fontSize > height && Math.random() > 0.95) {
            drops[i] = 0;
          }
        }
      };
      let animationId;
  
      const animate = () => {
        draw();
        animationId = setTimeout(animate, 50); // Increase the delay to slow down the animation (e.g., 100 milliseconds)
      };
  
      animate();
  
      return () => {
        clearTimeout(animationId);
      };
    }, [letters]);
  
    return (
      <canvas ref={canvasRef} className="matrix"/>
    );
}

export default MatrixRainAnimation;