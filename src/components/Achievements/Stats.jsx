import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { STATS_DATA } from "./AchievementsData";

const Counter = ({ from, to, duration = 2, isDecimal = false, suffix = "" }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setDisplayValue(isDecimal ? value.toFixed(2) : Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isDecimal, inView]);

  return (
    <span ref={nodeRef} className="font-bold">
      {displayValue}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full mt-24 mb-16"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 bg-navy-950/40 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        
        {STATS_DATA.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(59,130,246,0.1)] border border-transparent hover:border-blue-500/20"
          >
            <div className="mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-[1.08] group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
              <stat.icon 
                size={22} 
                strokeWidth={1.8} 
                className="text-warm opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
              />
            </div>
            <div className="text-4xl md:text-5xl text-white font-sans tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-blue-200 group-hover:to-orange-200">
              <Counter from={0} to={stat.number} isDecimal={stat.isDecimal} suffix={stat.suffix} />
            </div>
            <span className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-widest group-hover:text-blue-200 transition-colors duration-300">
              {stat.label}
            </span>
          </motion.div>
        ))}

      </div>
    </motion.div>
  );
};

export default Stats;
