import { motion } from 'framer-motion';
import { Card } from '../../ui/Card';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export function ParkingStatusCard() {
  return (
    <motion.div variants={itemVariants} whileHover={{ y: -4 }} className="h-full">
      <Card className="p-6 h-full hover:shadow-xl hover:shadow-spot-dark/5 transition-all border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">🚗</span>
          <h3 className="font-semibold text-gray-700">Parking Status</h3>
        </div>
        <div className="text-sm text-gray-500 mb-2 font-medium">Status</div>
        <div className="flex items-center gap-2 bg-gray-50 w-fit px-3 py-1.5 rounded-lg border border-gray-100">
          <span className="text-lg">🟡</span>
          <span className="font-bold text-spot-dark">Moderate Demand</span>
        </div>
      </Card>
    </motion.div>
  );
}

export function DemandMeterCard() {
  return (
    <motion.div variants={itemVariants} whileHover={{ y: -4 }} className="h-full">
      <Card className="p-6 h-full hover:shadow-xl hover:shadow-spot-dark/5 transition-all border-gray-100">
        <h3 className="font-semibold text-gray-700 mb-6">Parking Demand Meter</h3>
        <div className="flex justify-between items-end mb-2">
          <span className="text-3xl font-bold text-spot-dark">68%</span>
          <span className="text-sm font-semibold text-spot-amber">Moderate</span>
        </div>
        <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '68%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-spot-amber rounded-full"
          />
        </div>
      </Card>
    </motion.div>
  );
}

export function ConfidenceCard() {
  return (
    <motion.div variants={itemVariants} whileHover={{ y: -4 }} className="h-full">
      <Card className="p-6 h-full hover:shadow-xl hover:shadow-spot-dark/5 transition-all border-gray-100 flex gap-6 items-center">
        <div className="relative w-16 h-16 flex-shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
            <motion.path 
              initial={{ strokeDasharray: "0, 100" }}
              whileInView={{ strokeDasharray: "84, 100" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-spot-green" 
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-spot-dark">84%</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700 mb-1">Prediction Confidence</h3>
          <p className="text-sm text-gray-500 leading-snug">Based on campus academic activity.</p>
        </div>
      </Card>
    </motion.div>
  );
}

export function RecommendationCard() {
  return (
    <motion.div variants={itemVariants} whileHover={{ y: -4 }} className="h-full">
      <Card className="p-6 h-full hover:shadow-xl hover:shadow-spot-dark/5 transition-all border-gray-100 bg-gradient-to-br from-white to-blue-50/50">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">💡</span>
          <h3 className="font-semibold text-gray-700">Recommended Arrival</h3>
        </div>
        <div className="text-3xl font-bold text-spot-dark mb-3">11:20 AM</div>
        <p className="text-sm text-gray-500 leading-relaxed">
          Expected lower parking demand after current peak activity.
        </p>
      </Card>
    </motion.div>
  );
}
