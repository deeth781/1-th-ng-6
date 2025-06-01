
import { useEffect, useState } from 'react';

const FloatingIcons = () => {
  const [icons, setIcons] = useState<Array<{ id: number; emoji: string; x: number; y: number; delay: number }>>([]);

  const emojiList = ['💖', '🎈', '🐻', '🍭', '✨', '🎀', '🧸', '🌟', '💝', '🎂'];

  useEffect(() => {
    const generatedIcons = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4
    }));
    setIcons(generatedIcons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="floating-icon text-2xl opacity-30"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            animationDelay: `${icon.delay}s`
          }}
        >
          {icon.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
