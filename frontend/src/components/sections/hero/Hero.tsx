import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';
import { HeroIllustration } from './HeroIllustration';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-gray-200/60 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-spot-green animate-pulse" />
              <span className="text-xs font-bold tracking-wide text-gray-600 uppercase">Intelligent Campus Parking Prediction</span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-6xl lg:text-[5rem] font-bold tracking-tight text-spot-dark mb-8 leading-[1.05]">
                Never Guess Your <br className="hidden lg:block" /> Parking Again.
              </h1>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-500 mb-12 leading-relaxed max-w-lg font-light">
              SpotWise predicts campus parking demand before you arrive by analyzing academic activity patterns, helping students make smarter commuting decisions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-14">
              <Link to="/live">
                <Button size="lg" className="shadow-xl shadow-spot-dark/10 h-14 px-8 text-base">View Live Parking</Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="outline" size="lg" className="h-14 px-8 text-base bg-white/50 backdrop-blur-sm border-gray-200/60">Learn More</Button>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="flex h-14 items-center px-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-sm">
                <span className="text-2xl mr-3">🟡</span>
                <div>
                  <div className="text-sm font-bold text-spot-dark">Moderate Parking Demand</div>
                  <div className="text-xs font-medium text-gray-500">Updated just now</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column (Illustration) */}
          <div className="hidden lg:block relative">
            <HeroIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
