import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Flower2 } from 'lucide-react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  spinSpeed: number;
  opacity: number;
  color: string;
  type: 'marigold' | 'rose' | 'gold-leaf';
}

export const PetalCelebrationCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isActive) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Color palette for festive Telugu wedding petals
    const petalColors = {
      marigold: ['#F4B63F', '#FFA500', '#E8833A', '#FFD700'],
      rose: ['#C0392B', '#962D22', '#7A1F2B', '#E74C3C'],
      'gold-leaf': ['#DFB15B', '#FFE8B4', '#C9A24B'],
    };

    const petalCount = window.innerWidth < 768 ? 20 : 38;
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      const type = Math.random() > 0.4 ? 'marigold' : Math.random() > 0.3 ? 'rose' : 'gold-leaf';
      const colors = petalColors[type];
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 9 + 7,
        speedY: Math.random() * 1.2 + 0.8,
        speedX: Math.random() * 1.5 - 0.75,
        angle: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.03,
        opacity: Math.random() * 0.5 + 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        type,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.angle) * 0.8 + p.speedX;
        p.angle += p.spinSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;

        // Draw organic petal shape
        ctx.beginPath();
        if (p.type === 'marigold') {
          // Marigold curly petal
          ctx.fillStyle = p.color;
          ctx.ellipse(0, 0, p.size * 0.9, p.size * 0.6, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'rose') {
          // Rose velvety petal
          ctx.fillStyle = p.color;
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size * 0.8, p.size * 0.5, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.5, -p.size * 0.8, -p.size * 0.5, 0, -p.size);
          ctx.fill();
        } else {
          // Golden sparkle shard
          ctx.fillStyle = p.color;
          ctx.ellipse(0, 0, p.size * 0.5, p.size * 0.25, p.angle, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  return (
    <>
      {isActive && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-[35] select-none"
        />
      )}

      {/* Floating Petal Effect Toggle Button */}
      <button
        onClick={() => setIsActive(!isActive)}
        className={`fixed bottom-24 right-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full border transition-all duration-300 shadow-royal backdrop-blur-md ${
          isActive
            ? 'bg-[#7A1F2B] border-[#F4B63F] text-[#FFFBF5]'
            : 'bg-[#2B1810]/85 border-[#C9A24B]/40 text-[#F5EBD7]/70 hover:border-[#C9A24B]'
        }`}
        title={isActive ? 'Pause Festive Petal Shower' : 'Enable Festive Marigold Petals'}
        aria-label="Toggle festive petal shower"
      >
        <Flower2 className={`w-4 h-4 ${isActive ? 'text-[#F4B63F] animate-spin-slow' : ''}`} />
        <span className="hidden sm:inline text-[11px] font-serif tracking-wider">
          {isActive ? 'Petals On' : 'Petals Off'}
        </span>
      </button>
    </>
  );
};
