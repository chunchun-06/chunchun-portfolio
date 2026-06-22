import { motion } from "framer-motion";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const CertificationCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="relative group w-full"
    >
      {/* Timeline Node */}
      <div className="absolute left-[-31.5px] top-1/2 -translate-y-1/2 w-[15px] h-[15px] rounded-full bg-[#020817] border-[3px] border-[#F3E4C9] shadow-[0_0_10px_rgba(243,228,201,0.5)] z-20 transition-transform duration-300 group-hover:scale-[1.4] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:border-blue-400" />

      {/* Actual Card */}
      <div className="relative w-full h-full min-h-[140px] bg-[rgba(11,31,58,0.75)] backdrop-blur-[18px] border border-[rgba(243,228,201,0.12)] rounded-[24px] overflow-hidden cursor-default transition-all duration-400 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] group-hover:border-[#3B82F6]/40">
        
        {/* Background Animated Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute w-[100px] h-[100px] rounded-full bg-blue-500/10 blur-xl bottom-[-30px] left-[-30px] transition-all duration-700 ease-out group-hover:scale-150 group-hover:left-[80%] group-hover:bg-blue-500/20" />
          <div className="absolute w-[80px] h-[80px] rounded-full bg-orange-500/10 blur-xl top-[-20px] right-[-20px] transition-all duration-700 ease-out group-hover:scale-150 group-hover:right-[80%] group-hover:bg-orange-500/20" />
        </div>

        {/* Glass Content Layer */}
        <div className="relative z-10 p-6 flex flex-col h-full rounded-[24px]">
        
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <HiOutlineBadgeCheck className="text-3xl text-warm opacity-80 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(243,228,201,0.5)]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {item.category}
            </span>
          </div>
          <span className="text-sm font-bold text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            {item.year}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-lg font-bold text-white mb-1 leading-snug group-hover:text-blue-100 transition-colors">
          {item.title}
        </h4>

        {/* Organization */}
        <p className="text-sm text-slate-400 mb-4">
          {item.organization}
        </p>

        {/* Bottom Badge */}
        <div className="mt-auto pt-2">
          <span className="inline-block px-3 py-1 text-[11px] font-semibold text-white/80 uppercase tracking-wider bg-white/5 border border-white/10 rounded-lg group-hover:bg-white/10 group-hover:border-white/30 transition-all">
            {item.badge}
          </span>
        </div>

      </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;
