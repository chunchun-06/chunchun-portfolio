import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    const templateParams = {
    name: formData.name,
    email: formData.email,
    title: formData.subject,
    message: formData.message,
    };

    try {
      const res= await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log("success", res);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      console.log("error", error);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-gradient-to-b from-[#071C36] to-[#020817] flex flex-col items-center overflow-hidden z-20">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col items-center relative z-10 min-h-[80vh]">
        
        <div className="flex flex-col lg:flex-row w-full gap-16 lg:gap-24 mb-20">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col w-full lg:w-5/12"
          >
            <span className="text-[#F3E4C9] font-semibold uppercase tracking-widest text-[12px] mb-4 drop-shadow-[0_0_5px_rgba(243,228,201,0.3)]">
              CONTACT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Build Something Great Together
            </h2>


            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="mailto:chunchunrai23@gmail.com" className="flex flex-col p-5 rounded-[20px] bg-[#0b1f3a]/75 backdrop-blur-[18px] border border-[#f3e4c9]/12 hover:border-[#3B82F6]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-400 group">
                <FiMail className="text-[24px] text-[#F3E4C9] mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium mb-1">Email</span>
                <span className="text-sm text-[#94A3B8] truncate">Say hello</span>
              </a>

              <a href="https://www.linkedin.com/in/chun-chun-25b597326/" target="_blank" rel="noreferrer" className="flex flex-col p-5 rounded-[20px] bg-[#0b1f3a]/75 backdrop-blur-[18px] border border-[#f3e4c9]/12 hover:border-[#3B82F6]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-400 group">
                <FiLinkedin className="text-[24px] text-[#F3E4C9] mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium mb-1">LinkedIn</span>
                <span className="text-sm text-[#94A3B8] truncate">Let's connect</span>
              </a>

              <a href="https://github.com/chunchun-06" target="_blank" rel="noreferrer" className="flex flex-col p-5 rounded-[20px] bg-[#0b1f3a]/75 backdrop-blur-[18px] border border-[#f3e4c9]/12 hover:border-[#3B82F6]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-400 group">
                <FiGithub className="text-[24px] text-[#F3E4C9] mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium mb-1">GitHub</span>
                <span className="text-sm text-[#94A3B8] truncate">View code</span>
              </a>

              <div className="flex flex-col p-5 rounded-[20px] bg-[#0b1f3a]/75 backdrop-blur-[18px] border border-[#f3e4c9]/12 hover:border-[#3B82F6]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-400 group">
                <FiMapPin className="text-[24px] text-[#F3E4C9] mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium mb-1">Location</span>
                <span className="text-sm text-[#94A3B8] truncate">Tamil Nadu, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-grow w-full lg:w-7/12"
          >
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col p-8 md:p-10 rounded-[24px] bg-[#0b1f3a]/75 backdrop-blur-[18px] border border-[#f3e4c9]/12 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative"
            >
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-[#CBD5E1] mb-2 pl-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 outline-none focus:border-[#3B82F6] focus:bg-white/10 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-[#CBD5E1] mb-2 pl-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 outline-none focus:border-[#3B82F6] focus:bg-white/10 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-6">
                <label className="text-sm font-medium text-[#CBD5E1] mb-2 pl-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 outline-none focus:border-[#3B82F6] focus:bg-white/10 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all"
                />
              </div>

              <div className="flex flex-col mb-8">
                <label className="text-sm font-medium text-[#CBD5E1] mb-2 pl-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Chunchun, I'd like to talk about..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 outline-none focus:border-[#3B82F6] focus:bg-white/10 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all resize-none custom-scrollbar"
                />
              </div>

              <button 
                type="submit"
                disabled={status === "submitting"}
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-[15px] transition-all duration-300 ${
                  status === "submitting" 
                    ? "bg-[#F3E4C9]/50 text-[#071226]/50 cursor-not-allowed" 
                    : "bg-[#F3E4C9] text-[#071226] hover:-translate-y-1 hover:bg-[#E5D5BA] hover:shadow-[0_15px_30px_rgba(59,130,246,0.25)]"
                }`}
              >
                {status === "submitting" ? (
                  <div className="w-5 h-5 border-2 border-[#071226]/20 border-t-[#071226] rounded-full animate-spin mr-2" />
                ) : (
                  <FiSend size={18} />
                )}
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {/* Status Toasts */}
              {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-16 left-0 right-0 flex items-center justify-center gap-2 text-[#4ade80] bg-[#4ade80]/10 border border-[#4ade80]/20 py-3 rounded-xl backdrop-blur-md"
                >
                  <FiCheckCircle />
                  <span className="text-sm font-medium">✓ Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-16 left-0 right-0 flex items-center justify-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 py-3 rounded-xl backdrop-blur-md"
                >
                  <FiAlertCircle />
                  <span className="text-sm font-medium">Failed to send message. Please try again.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>

      </div>

     

    </section>
  );
};

export default Contact;
