
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const MusicControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // In a real app, you would control actual audio here
    console.log(isPlaying ? 'Stopping music' : 'Playing music');
  };

  return (
    <Button
      onClick={toggleMusic}
      className="fixed top-4 right-4 z-30 bg-white/80 hover:bg-white text-baby-purple rounded-full p-3 shadow-lg backdrop-blur-sm"
      size="sm"
    >
      {isPlaying ? '🎵' : '🔇'} {isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
    </Button>
  );
};

export default MusicControl;
