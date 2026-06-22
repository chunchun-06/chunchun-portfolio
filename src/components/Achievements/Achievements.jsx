import { motion } from "framer-motion";
import { Trophy, GraduationCap } from "lucide-react";
import { ACHIEVEMENTS_DATA, CERTIFICATIONS_DATA } from "./AchievementsData";
import AchievementCard from "./AchievementCard";
import CertificationCard from "./CertificationCard";
import Stats from "./Stats";

const textFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Achievements = () => {
  return (
    <section id="achievements" className="relative flex flex-col items-center w-full py-24 bg-navy-950 overflow-hidden z-20">
      
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-[-10%] w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          variants={textFade} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="flex flex-col items-center gap-4 text-center mb-24"
        >
          <span className="text-warm font-semibold uppercase tracking-[0.4em] text-[12px] drop-shadow-[0_0_8px_rgba(243,228,201,0.5)]">
            JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sans mt-2">
            Achievements & Recognition
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-warm/80 to-transparent mt-4 shadow-[0_0_15px_rgba(243,228,201,0.6)]" />
          <p className="text-slate-400 max-w-2xl mt-6 text-lg">
            Milestones, competitions, certifications, and continuous learning that shape my engineering journey.
          </p>
        </motion.div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16">
          
          {/* Left Panel: Achievements Timeline */}
          <div className="flex flex-col gap-10">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-4 flex items-center gap-3"
            >
              <Trophy className="text-[#F3E4C9]" size={28} strokeWidth={1.5} /> 
              Achievements
            </motion.h3>
            
            <div className="relative pl-12">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[24px] top-6 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent" />
              
              <div className="flex flex-col gap-10">
                {ACHIEVEMENTS_DATA.map((item, index) => (
                  <AchievementCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Certifications Timeline */}
          <div className="flex flex-col gap-10">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-4 flex items-center gap-3"
            >
              <GraduationCap className="text-[#F3E4C9]" size={28} strokeWidth={1.5} /> 
              Certifications
            </motion.h3>
            
            <div className="relative pl-12">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[24px] top-6 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent" />
              
              <div className="flex flex-col gap-10">
                {CERTIFICATIONS_DATA.map((item, index) => (
                  <CertificationCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Statistics Dashboard */}
        <Stats />

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-full text-center mt-12 pb-12"
        >
          <p className="text-slate-500/60 font-serif italic text-xl tracking-wide">
            "Always learning. Always building. Always improving."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
