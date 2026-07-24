import React, { useState, useEffect } from 'react';
import { AlertCircle, Clock, Calendar, Sparkles } from 'lucide-react';

export const DisclaimerBanner: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [phase, setPhase] = useState<'dot1' | 'dot2'>('dot1');

  // Exam Dates for V-ACT 2027
  // Phase 1: March 28, 2027 07:30:00 AM
  // Phase 2: May 30, 2027 07:30:00 AM
  const examDates = {
    dot1: new Date('2027-03-28T07:30:00').getTime(),
    dot2: new Date('2027-05-30T07:30:00').getTime(),
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = examDates[phase];
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [phase]);

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-white text-xs py-2 px-3 sm:px-4">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Live Exam Countdown Widget */}
        <div className="flex items-center flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>ĐẾM NGƯỢC THI V-ACT 2027</span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700/80 rounded-xl px-2.5 py-1">
            <button
              onClick={() => setPhase('dot1')}
              className={`px-2 py-0.5 rounded-md font-bold transition-all text-[11px] ${
                phase === 'dot1' ? 'bg-rose-500 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Đợt 1 (29/03)
            </button>
            <button
              onClick={() => setPhase('dot2')}
              className={`px-2 py-0.5 rounded-md font-bold transition-all text-[11px] ${
                phase === 'dot2' ? 'bg-rose-500 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Đợt 2 (31/05)
            </button>
          </div>

          <div className="flex items-center gap-1.5 font-mono font-bold text-slate-200">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <div className="flex items-center gap-1">
              <span className="bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded text-amber-300 font-bold">{timeLeft.days}</span> <span className="text-[10px] text-slate-400">ngày</span>
              <span className="bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded text-amber-300 font-bold">{String(timeLeft.hours).padStart(2, '0')}</span> <span className="text-[10px] text-slate-400">giờ</span>
              <span className="bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded text-amber-300 font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span> <span className="text-[10px] text-slate-400">phút</span>
              <span className="bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded text-rose-400 font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span> <span className="text-[10px] text-slate-400">giây</span>
            </div>
          </div>
        </div>

        {/* Right: Independent platform notice */}
        <div className="flex items-center gap-1.5 text-slate-400 text-[11px] text-center md:text-right">
          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 hidden sm:inline-block" />
          <span>Sangsang.edu.vn là nền tảng luyện thi độc lập, đồng hành số 1 cùng sĩ tử V-ACT 2027.</span>
        </div>

      </div>
    </div>
  );
};

