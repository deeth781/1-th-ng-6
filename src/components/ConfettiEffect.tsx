
import { useEffect, useState } from 'react';

interface ConfettiEffectProps {
  isActive: boolean;
}

const ConfettiEffect = ({ isActive }: ConfettiEffectProps) => {
  const [confettiPieces, setConfettiPieces] = useState<Array<{ id: number; x: number; delay: number; color: string }>>([]);

  useEffect(() => {
    if (isActive) {
      const pieces = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 3,
        color: ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'][Math.floor(Math.random() * 6)]
      }));
      setConfettiPieces(pieces);

      const timer = setTimeout(() => {
        setConfettiPieces([]);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 rounded"
          style={{
            left: `${piece.x}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animation: 'confetti-fall 3s linear forwards'
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;
