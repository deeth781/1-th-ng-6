
import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import FloatingIcons from '@/components/FloatingIcons';
import ConfettiEffect from '@/components/ConfettiEffect';
import MusicControl from '@/components/MusicControl';
import GiftBox from '@/components/GiftBox';
import LoveLetter from '@/components/LoveLetter';
import Certificate from '@/components/Certificate';
import ResponseButtons from '@/components/ResponseButtons';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'loading' | 'gift' | 'letter' | 'certificate' | 'response'>('loading');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleLoadingComplete = () => {
    setCurrentStep('gift');
  };

  const handleGiftOpen = () => {
    setShowConfetti(true);
    setCurrentStep('letter');
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleShowCertificate = () => {
    setCurrentStep('certificate');
  };

  const handleShowResponse = () => {
    setCurrentStep('response');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'loading':
        return <LoadingScreen onComplete={handleLoadingComplete} />;
      case 'gift':
        return (
          <div className="min-h-screen flex items-center justify-center p-4">
            <GiftBox onOpen={handleGiftOpen} />
          </div>
        );
      case 'letter':
        return (
          <div className="min-h-screen flex items-center justify-center p-4">
            <LoveLetter onShowCertificate={handleShowCertificate} />
          </div>
        );
      case 'certificate':
        return (
          <div className="min-h-screen flex items-center justify-center p-4">
            <Certificate onShowResponse={handleShowResponse} />
          </div>
        );
      case 'response':
        return (
          <div className="min-h-screen flex items-center justify-center p-4">
            <ResponseButtons />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {currentStep !== 'loading' && (
        <>
          <FloatingIcons />
          <MusicControl />
          <ConfettiEffect isActive={showConfetti} />
        </>
      )}
      {renderCurrentStep()}
    </div>
  );
};

export default Index;
