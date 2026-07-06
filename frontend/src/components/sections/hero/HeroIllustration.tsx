import { motion } from 'framer-motion';
import { Card } from '../../ui/Card';
import { DemandMeter } from '../../ui/DemandMeter';
import { MapPin, Navigation } from 'lucide-react';

export function HeroIllustration() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center pointer-events-none select-none">
      {/* Main Map Polygon Backdrop */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center opacity-30"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full text-spot-amber drop-shadow-2xl">
          <path fill="currentColor" d="M150,80 L320,120 L280,300 L100,260 Z" />
        </svg>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-20 left-4 top-32"
      >
        <Card className="p-4 shadow-2xl shadow-spot-dark/5 bg-white/90">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-spot-red/10 flex items-center justify-center text-spot-red">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">Campus Activity</div>
              <div className="text-sm font-bold text-spot-dark">High (82 Classes)</div>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute z-30 right-4 top-1/4"
      >
        <Card className="p-6 shadow-2xl shadow-spot-amber/10 border-spot-amber/20 bg-white/95 w-72">
          <div className="text-xs text-gray-500 font-medium mb-4">Live Prediction</div>
          <DemandMeter value={84} />
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-spot-amber animate-pulse" />
            <span className="text-xs font-bold text-spot-amber">Moderate Demand</span>
          </div>
        </Card>
      </motion.div>

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute z-10 bottom-32 left-24"
      >
        <Card className="p-3 shadow-xl shadow-spot-dark/5 bg-white/80 backdrop-blur-xl flex items-center gap-3 pr-6 border-white/40">
          <div className="w-8 h-8 rounded-full bg-spot-green/10 flex items-center justify-center text-spot-green">
            <Navigation size={16} />
          </div>
          <div className="text-sm font-semibold text-spot-dark">ETA 11:20 AM</div>
        </Card>
      </motion.div>
      
      {/* Decorative center ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute w-[450px] h-[450px] rounded-full border border-gray-300/40 border-dashed"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] rounded-full border border-gray-300/30 border-dashed"
      />
    </div>
  );
}
