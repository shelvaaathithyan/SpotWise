import { motion } from 'framer-motion';
import { ParkingStatusCard, DemandMeterCard, ConfidenceCard, RecommendationCard } from './PreviewCards';
import { DashboardPreview } from './DashboardPreview';

export function LivePreview() {
  return (
    <section id="live-preview" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-spot-dark uppercase mb-4">Live Parking Preview</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-spot-dark tracking-tight mb-6 leading-tight">
              Know the parking situation before you enter campus.
            </h3>
            <p className="text-xl text-gray-500 leading-relaxed font-light">
              SpotWise analyzes campus activity and presents an easy-to-understand parking demand prediction, helping students make smarter commuting decisions.
            </p>
          </motion.div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Cards */}
          <motion.div 
            className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <ParkingStatusCard />
            <DemandMeterCard />
            <ConfidenceCard />
            <RecommendationCard />
          </motion.div>

          {/* Right Side: Dashboard Mock */}
          <div className="lg:col-span-7 h-full">
            <DashboardPreview />
          </div>

        </div>
      </div>
    </section>
  );
}
