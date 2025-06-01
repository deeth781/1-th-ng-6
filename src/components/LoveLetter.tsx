
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface LoveLetterProps {
  onShowCertificate: () => void;
}

const LoveLetter = ({ onShowCertificate }: LoveLetterProps) => {
  const [crushName] = useState("Meo Meo"); // You can make this customizable

  return (
    <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm shadow-2xl border-4 border-baby-pink animate-fly-in">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-pacifico text-baby-purple mb-2">💌 Thư Chúc Mừng 💌</h2>
          <div className="w-16 h-1 bg-baby-pink mx-auto rounded"></div>
        </div>
        
        <div className="space-y-4 font-quicksand text-gray-700 leading-relaxed">
          <p className="text-lg">
            <span className="font-semibold text-baby-purple">Gửi {crushName} dễ thương 🧸</span>
          </p>
          
          <p>
            Hôm nay là 1/6 – ngày của những điều dễ thương...<br/>
            =)) chúc chị Ngày Càng Xinh Hơn Nhé😋
          </p>
          
          
          <p className="text-center bg-baby-peach/30 p-4 rounded-lg">
            <span className="font-semibold text-baby-purple">
              Chúc chị có một ngày 1/6 thật vui vẻ và hạnh phúc nha! 🎀
            </span>
          </p>
          
          <div className="text-right italic text-baby-purple">
            <p className="font-semibold">"Người Tình Không Chung Giường Gối" 🧸</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button
            onClick={onShowCertificate}
            className="bg-baby-purple hover:bg-baby-pink text-white font-quicksand font-semibold px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Xem giấy chứng nhận đặc biệt! 📜✨
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoveLetter;
