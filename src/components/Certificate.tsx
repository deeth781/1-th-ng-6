
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CertificateProps {
  onShowResponse: () => void;
}

const Certificate = ({ onShowResponse }: CertificateProps) => {
  const [crushName] = useState("bé yêu");
  const currentDate = new Date().toLocaleDateString('vi-VN');

  return (
    <Card className="max-w-3xl mx-auto bg-gradient-to-br from-baby-yellow to-baby-peach shadow-2xl border-4 border-baby-purple animate-fly-in">
      <CardContent className="p-8">
        <div className="text-center border-4 border-baby-purple border-dashed p-8 bg-white/80 rounded-lg">
          <div className="text-6xl mb-4">🏆</div>
          
          <h1 className="text-3xl font-pacifico text-baby-purple mb-4">
            🎖️ GIẤY CHỨNG NHẬN 🎖️
          </h1>
          
          <div className="text-2xl font-bold text-baby-purple mb-6">
            Em Bé Dễ Thương Nhất Hệ Mặt Trời ☀️
          </div>
          
          <div className="space-y-4 font-quicksand">
            <p className="text-lg">
              <span className="font-semibold">Trao cho:</span> 
              <span className="text-baby-purple font-bold text-xl"> {crushName}</span>
            </p>
            
            <div className="bg-baby-mint/30 p-4 rounded-lg">
              <h3 className="font-semibold text-baby-purple mb-2">🏅 Vì:</h3>
              <ul className="text-left space-y-1">
                <li>✨ Dễ thương không giới hạn</li>
                <li>🌟 Siêu xứng đáng được yêu thương</li>
          
              </ul>
            </div>
            
            <div className="flex justify-between items-center mt-6 text-sm">
              <div>
                <p><span className="font-semibold">Cấp ngày:</span> {currentDate}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">✍️ Người ký:Vũ Tài (Minato)</p>
                <p className="italic text-baby-purple">"Người crush cậu mà chưa dám nói" 😳</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-around mt-6">
            <div className="text-4xl animate-bounce-heart">🎈</div>
            <div className="text-4xl animate-float">🧸</div>
            <div className="text-4xl animate-wiggle">🍭</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Certificate;
