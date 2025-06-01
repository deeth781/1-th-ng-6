
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface GiftBoxProps {
  onOpen: () => void;
}

const GiftBox = ({ onOpen }: GiftBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl md:text-5xl font-pacifico text-white drop-shadow-lg mb-8">
        Hôm nay là 1/6... 🎈
      </h1>
      
      <p className="text-xl md:text-2xl font-quicksand text-white/90 mb-8">
        mà hình như ai đó quên mất rồi thì phải 😗
      </p>
      
      <div 
        className="relative inline-block cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`text-8xl md:text-9xl transition-transform duration-300 ${
            isHovered ? 'animate-wiggle scale-110' : 'animate-float'
          }`}
        >
          🎁
        </div>
        
        {isHovered && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce-heart">
            ✨
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <p className="text-lg md:text-xl font-quicksand text-white/90">
          👉 Bấm vào hộp quà để nhận điều bất ngờ nhé!
        </p>
        
        <Button
          onClick={onOpen}
          className="bg-white text-baby-purple hover:bg-baby-peach hover:text-white font-quicksand font-semibold text-lg px-8 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          Mở quà nào! 🎀
        </Button>
      </div>
    </div>
  );
};

export default GiftBox;
