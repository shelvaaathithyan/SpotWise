import { Hero } from '../components/sections/hero/Hero';
import { LivePreview } from '../components/sections/preview/LivePreview';
import { Background } from '../components/ui/Background';

export default function LandingPage() {
  return (
    <>
      <div className="relative">
        <Background />
        <Hero />
      </div>
      <LivePreview />
    </>
  );
}
