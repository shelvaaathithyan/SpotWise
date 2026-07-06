import { motion } from 'framer-motion';
import { Card } from '../../ui/Card';
import { DemandMeter } from '../../ui/DemandMeter';
import { Clock, TrendingUp, Users, BookOpen } from 'lucide-react';

export function DashboardPreview() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-full lg:min-h-[700px] rounded-[2rem] bg-gray-50 border border-gray-200 shadow-2xl p-4 sm:p-6 flex flex-col gap-4 overflow-hidden"
    >
      {/* Decorative Browser/App Bar */}
      <div className="flex items-center gap-2 px-2 pb-2">
        <div className="w-3 h-3 rounded-full bg-gray-300" />
        <div className="w-3 h-3 rounded-full bg-gray-300" />
        <div className="w-3 h-3 rounded-full bg-gray-300" />
      </div>

      {/* Top Card */}
      <Card className="p-5 shadow-sm bg-white shrink-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-sm font-medium text-gray-500 mb-1">Parking Status</div>
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 rounded-full bg-spot-amber animate-pulse" />
              <span className="text-lg font-bold text-spot-dark">Moderate</span>
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500 mb-2">Demand</div>
            <DemandMeter value={68} className="scale-75 origin-left -ml-2" />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500 mb-1">Confidence</div>
            <div className="text-lg font-bold text-spot-green">84%</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500 mb-1">Last Updated</div>
            <div className="text-sm font-medium text-spot-dark flex items-center gap-1">
              <Clock size={14} className="text-gray-400" /> 09:31 AM
            </div>
          </div>
        </div>
      </Card>

      {/* Middle: Mini Google Maps Mockup */}
      <div className="flex-1 min-h-[250px] rounded-xl bg-[#E8EAED] relative overflow-hidden border border-gray-200 shadow-inner">
        {/* Placeholder Map SVG Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(#9ca3af 1px, transparent 1px), linear-gradient(90deg, #9ca3af 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
        {/* Fake roads */}
        <div className="absolute top-1/4 left-0 right-0 h-4 bg-white shadow-sm transform -rotate-6" />
        <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-white shadow-sm transform rotate-12" />
        
        {/* Polygon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg viewBox="0 0 200 200" className="w-64 h-64 text-spot-amber drop-shadow-md">
            <path fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" d="M50,40 L150,60 L130,160 L40,140 Z" />
          </svg>
          <div className="absolute w-10 h-10 bg-spot-amber rounded-full border-4 border-white shadow-xl flex items-center justify-center animate-bounce">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Bottom: Prediction Details */}
      <Card className="p-5 shadow-sm bg-white shrink-0">
        <h4 className="text-sm font-semibold text-gray-700 mb-4">Prediction Details</h4>
        <div className="grid sm:grid-cols-3 gap-4">
          <PredictionItem icon={<TrendingUp size={16} />} text="Peak morning arrival" />
          <PredictionItem icon={<Users size={16} />} text="High academic activity" />
          <PredictionItem icon={<BookOpen size={16} />} text="Multiple departments active" />
        </div>
      </Card>
    </motion.div>
  );
}

function PredictionItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
        {icon}
      </div>
      <span className="text-sm font-medium text-spot-dark leading-snug">{text}</span>
    </div>
  );
}
