
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ResponseButtons = () => {
  const [showResponse, setShowResponse] = useState<'positive' | 'neutral' | null>(null);

  const handlePositiveResponse = () => {
    setShowResponse('positive');
  };

  const handleNeutralResponse = () => {
    setShowResponse('neutral');
  };

  if (showResponse) {
    return (
      <Card className="max-w-lg mx-auto bg-white/95 backdrop-blur-sm shadow-2xl border-4 border-baby-pink animate-fly-in">
        <CardContent className="p-8 text-center">
          {showResponse === 'positive' ? (
            <div className="space-y-4">
              <div className="text-6xl mb-4">🥳</div>
              <h3 className="text-2xl font-pacifico text-baby-purple">
                Hảaaa trời ơi thiệt hả 😭💖
              </h3>
              <p className="font-quicksand text-lg text-gray-700">
                Tớ hạnh phúc quáaaaaa!!!<br/>
                Mình đi chơi 1/6 nhaaaa 😭✨
              </p>
              <div className="flex justify-center space-x-2 text-3xl">
                <span className="animate-bounce-heart">💖</span>
                <span className="animate-float">🎉</span>
                <span className="animate-wiggle">🥰</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-6xl mb-4">🥺</div>
              <h3 className="text-2xl font-pacifico text-baby-purple">
                Không sao đâu bé ơi 🥺
              </h3>
              <p className="font-quicksand text-lg text-gray-700">
                Tớ chỉ muốn làm cậu vui thôi.<br/>
                Tớ vẫn chờ được mà 😚💕
              </p>
              <div className="flex justify-center space-x-2 text-3xl">
                <span className="animate-float">🌸</span>
                <span className="animate-bounce-heart">💝</span>
                <span className="animate-wiggle">😊</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-lg mx-auto bg-white/95 backdrop-blur-sm shadow-2xl border-4 border-baby-mint animate-fly-in">
      <CardContent className="p-8 text-center">
        <div className="space-y-6">
          <div className="text-5xl mb-4">💭</div>
          <h3 className="text-2xl font-pacifico text-baby-purple mb-4">
            Cậu nghĩ sao về tớ? 🥺
          </h3>
          
          <div className="space-y-4">
            <Button
              onClick={handlePositiveResponse}
              className="w-full bg-baby-pink hover:bg-baby-purple text-white font-quicksand font-semibold py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              ✅ Tớ cũng thích cậu 🥺💖
            </Button>
            
            <Button
              onClick={handleNeutralResponse}
              className="w-full bg-baby-mint hover:bg-baby-blue text-gray-700 font-quicksand font-semibold py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              ❔ Tớ chưa biết nữa...
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResponseButtons;
