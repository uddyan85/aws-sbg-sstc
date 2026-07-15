"use client";

import { useState, useRef, ChangeEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { Upload, ArrowRight, ShieldCheck, QrCode, Image as ImageIcon } from "lucide-react";
import { toPng } from "html-to-image";

export default function ThemeBadgeGenerator() {
  const [name, setName] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [credentialId, setCredentialId] = useState<string>("SCD-BLI-0X");
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const exportWrapperRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    setCredentialId(`SCD-${randomHex}`);
  }, []);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    if (!name.trim() && !imagePreview) return;
    if (!exportWrapperRef.current) return;
    
    setIsGenerating(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      
      const dataUrl = await toPng(exportWrapperRef.current, {
        quality: 1,
        pixelRatio: 4,
        cacheBust: true,
        backgroundColor: 'transparent',
        style: { transform: 'none' }
      });
      
      const link = document.createElement("a");
      link.download = `AWS-SCD-Ticket-${name.replace(/\s+/g, '-') || 'Builder'}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to generate credential:", err);
      alert("Export failed. Please ensure your image is a valid format.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    // Changed overflow-hidden to overflow-x-hidden to prevent vertical cropping on mobile
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#030409] py-20 px-4 sm:px-6 overflow-x-hidden text-white font-sans selection:bg-[#B375FF]/30">
      
      {/* Enhanced Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#A45AFA]/15 blur-[140px] rounded-full pointer-events-none mix-blend-screen" />
      
      {/* Increased gap for mobile spacing */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
        
        {/* ================= LEFT COLUMN: THE TICKET CREDENTIAL ================= */}
        <div className="w-full lg:w-1/2 flex justify-center perspective-[2000px] py-4">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="w-full max-w-[320px] sm:max-w-[340px] relative group"
          >
            <div ref={exportWrapperRef} className="p-2 bg-transparent relative">
              
              {/* THE PHYSICAL CARD */}
              <div className="relative aspect-[0.68] w-full rounded-[24px] bg-[#0A0B14] overflow-hidden shadow-[0_20px_60px_-15px_rgba(164,90,250,0.3)] border border-white/20 ring-1 ring-white/10 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                
                {/* Vibrant Top Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(179,117,255,0.25),transparent_60%)] pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E9D9FF] to-transparent opacity-70 z-20" />
                <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

                {/* Adjusted internal padding for mobile scaling */}
                <div className="relative z-10 flex flex-col items-center h-full px-4 py-6 sm:px-6 sm:py-8">
                  
                  {/* Top Logos */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="flex flex-col">
                      <span className="font-black text-lg tracking-tighter leading-none text-white drop-shadow-md">aws</span>
                      <span className="text-[6px] font-bold tracking-[0.2em] text-[#D4B5FF] mt-1 uppercase">SSTC Bhilai</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#B375FF]/10 border border-[#B375FF]/30 backdrop-blur-sm shadow-[0_0_15px_rgba(179,117,255,0.2)]">
                      <ShieldCheck className="w-3 h-3 text-[#E9D9FF]" />
                      <span className="text-[7px] font-black tracking-widest text-[#E9D9FF] uppercase">Verified</span>
                    </div>
                  </div>

                  {/* Highlight Headline - Removed Sparkles, Adjusted Text Size */}
                  <div className="flex items-center justify-center mb-6 w-full">
                    <h2 className="text-[22px] sm:text-[26px] font-black uppercase tracking-tight bg-gradient-to-r from-[#FFFFFF] via-[#E9D9FF] to-[#B375FF] bg-clip-text text-transparent drop-shadow-sm leading-none text-center">
                      I Am Attending
                    </h2>
                  </div>

                  {/* Circular Draggable Photo */}
                  <div className="relative z-20 mb-6 group/photo cursor-grab active:cursor-grabbing">
                    <div className="absolute inset-[-6px] rounded-full bg-gradient-to-b from-[#B375FF] to-transparent opacity-40 blur-lg pointer-events-none group-hover/photo:opacity-60 transition-opacity duration-500" />
                    
                    {/* Adjusted dimensions for smaller screens */}
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#05060A] border-2 border-white/10 ring-4 ring-[#1A1C29] overflow-hidden relative flex flex-col items-center justify-center shadow-2xl group-hover/photo:border-[#B375FF]/50 transition-colors duration-300">
                      <div ref={constraintsRef} className="absolute inset-0 flex items-center justify-center rounded-full">
                        {imagePreview ? (
                          <motion.img 
                            src={imagePreview} 
                            alt="Attendee" 
                            drag
                            dragConstraints={constraintsRef}
                            dragElastic={0}
                            dragMomentum={false}
                            className="min-w-[120%] min-h-[120%] max-w-none object-cover pointer-events-auto" 
                          />
                        ) : (
                          <div className="flex flex-col items-center gap-2 p-4 text-center group-hover/photo:scale-110 transition-transform duration-500">
                            <ImageIcon className="w-7 h-7 text-[#B375FF] animate-bounce" />
                            <span className="text-[9px] font-bold leading-relaxed px-2 uppercase tracking-widest text-slate-400">Awaiting<br/>Visuals</span>
                          </div>
                        )}
                      </div>
                      <div className="absolute inset-0 shadow-[inset_0_0_25px_rgba(0,0,0,0.9)] pointer-events-none rounded-full" />
                    </div>
                  </div>

                  {/* Display Name */}
                  <div className="w-full text-center mb-1">
                    <h3 className={`text-xl sm:text-2xl font-black uppercase tracking-tight leading-none drop-shadow-lg line-clamp-1 px-2 ${name ? 'text-white' : 'text-white/20'}`}>
                      {name || "YOUR NAME"}
                    </h3>
                    <p className="text-[8px] sm:text-[9px] font-black tracking-[0.3em] uppercase text-[#B375FF] mt-2 drop-shadow-sm">
                      Community Builder
                    </p>
                  </div>

                  {/* Event Details Footer */}
                  <div className="mt-auto w-full flex flex-col items-center text-center">
                    <div className="h-px w-full max-w-[150px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
                    <span className="font-black text-lg sm:text-xl tracking-tight leading-none text-white/95">COMMUNITY DAY</span>
                    <span className="font-bold text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#D4B5FF] mt-2">
                      Sep 26, 2026
                    </span>
                  </div>

                  {/* Secure Features */}
                  <div className="absolute bottom-4 sm:bottom-5 left-5 right-5 sm:left-6 sm:right-6 flex justify-between items-end z-30">
                    <div className="flex flex-col gap-1">
                      <span className="text-[6px] text-slate-400 tracking-[0.2em] uppercase font-bold">Secure ID</span>
                      <span className="text-[8px] sm:text-[9px] text-[#E9D9FF] font-mono tracking-widest bg-white/10 px-2 py-0.5 rounded border border-white/10 shadow-inner">
                        {credentialId}
                      </span>
                    </div>
                    <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg">
                      <QrCode className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            {/* Ambient Ambient Card Shadow */}
            <div className="absolute inset-4 -z-10 bg-[#B375FF]/30 blur-[70px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        </div>

        {/* ================= RIGHT COLUMN: THE EDITOR ================= */}
        <div className="w-full lg:w-1/2 max-w-[28rem] flex flex-col gap-8 relative z-20 py-4">
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tight text-white drop-shadow-sm">
              Claim your <br />
              <span className="block bg-gradient-to-r from-[#D4B5FF] via-[#FFFFFF] to-[#B375FF] bg-clip-text text-transparent pb-1 mt-1">
                Event Ticket
              </span>
            </h2>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed font-medium">
              Design and export your official "I Am Attending" badge for the AWS Student Community Day at SSTC Bhilai.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 w-full">
            
            {/* Display Name Input */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mb-2 ml-1">
                Display Name
              </label>
              <div className="relative group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aditya Kumar"
                  maxLength={20}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-xl font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-[#B375FF]/50 focus:ring-2 focus:ring-[#B375FF]/20 focus:bg-white/10 transition-all duration-300 shadow-inner"
                />
              </div>
            </motion.div>

            {/* Profile Avatar Upload */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mb-2 ml-1">
                Profile Avatar
              </label>
              
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                ref={fileInputRef} 
                onChange={handleImageChange}
              />
              
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="group cursor-pointer relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border-2 border-dashed border-white/10 hover:bg-[#B375FF]/5 hover:border-[#B375FF]/50 hover:shadow-[0_0_30px_-10px_rgba(179,117,255,0.3)] transition-all duration-300 overflow-hidden"
              >
                <div className="relative z-10 w-14 h-14 mb-4 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-[#B375FF] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(179,117,255,0.5)] transition-all duration-400 ease-out">
                  <Upload className="w-6 h-6" />
                </div>
                <h4 className="relative z-10 text-white font-bold text-sm mb-1.5">Upload Visuals</h4>
                <p className="relative z-10 text-slate-400 text-[11px] font-medium text-center max-w-[280px] leading-relaxed">
                  High resolution works best. After uploading, <strong className="text-[#E9D9FF]">drag the image</strong> on the badge to frame your face perfectly inside the circle.
                </p>
              </div>
            </motion.div>

            {/* Mint Button */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <button
                onClick={handleDownload}
                disabled={(!name.trim() && !imagePreview) || isGenerating}
                className="group relative w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white font-black text-[12px] tracking-[0.25em] uppercase disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#B375FF] hover:shadow-[0_0_30px_-5px_rgba(179,117,255,0.4)] active:scale-[0.98] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                  {isGenerating ? "Minting Ticket..." : "Mint Ticket"}
                  {!isGenerating && (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 group-hover:text-[#E9D9FF] transition-transform duration-300" />
                  )}
                </span>
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}