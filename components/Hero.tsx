import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const yearsOfExperience = new Date().getFullYear() - 2012;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Particle setup
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = Math.min(width / 10, 100); // Responsive count

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = document.documentElement.classList.contains('dark') 
          ? 'rgba(255, 255, 255, 0.2)' 
          : 'rgba(0, 0, 0, 0.1)';
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = document.documentElement.classList.contains('dark') 
              ? `rgba(255, 255, 255, ${0.1 - distance / 1500})` 
              : `rgba(0, 0, 0, ${0.05 - distance / 3000})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-50 dark:bg-black">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white animate-fade-in-up">
          Jordan He
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-light mb-8 animate-fade-in-up delay-100">
          Seasoned Actuary <span className="mx-2 text-neutral-300">|</span> Data Enthusiast
        </p>
        <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
          {yearsOfExperience}+ Years Delivering Actuarial Insights
          <br className="hidden md:block" />
          Self-Taught Coder Exploring ML & Data Science
        </p>
        
        <a 
          href="https://jordanhe23.github.io/homepage.github.io/Jordan%20He%20-%20Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg shadow-sm animate-fade-in-up delay-300"
        >
          View Resume
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-400">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;