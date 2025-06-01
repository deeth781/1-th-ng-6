
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-baby-pink via-baby-purple to-baby-mint flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <div className="relative">
          <Heart 
            size={80} 
            className="text-white animate-bounce-heart mx-auto drop-shadow-lg" 
            fill="currentColor"
          />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-baby-yellow rounded-full animate-ping"></div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-pacifico text-white drop-shadow-lg">
            Đang gói quà cho người dễ thương nhất hệ mặt trời...
          </h1>
          
          <div className="w-64 h-4 bg-white/30 rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-baby-peach to-baby-yellow rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-white/80 font-quicksand">
            {progress}% ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
