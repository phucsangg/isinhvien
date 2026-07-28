import React from 'react';
import { Calendar, Target, FileCheck, TrendingUp, User } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, setActiveTab }) => {
  const bottomItems = [
    { id: 'student-dash', label: 'Hôm nay', icon: Calendar },
    { id: 'topic-practice', label: 'Luyện tập', icon: Target },
    { id: 'exam-library', label: 'Thi thử', icon: FileCheck },
    { id: 'roadmap', label: 'Lộ trình', icon: TrendingUp },
    { id: 'profile', label: 'Tài khoản', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 py-1.5 px-2 shadow-2xl">
      <div className="grid grid-cols-5 gap-1 max-w-md mx-auto">
        {bottomItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 rounded-2xl transition-all duration-200 active:scale-95 ${
                isActive 
                  ? 'text-rose-600 bg-rose-50/90 font-black shadow-sm border border-rose-200/60' 
                  : 'text-slate-500 hover:text-slate-900 font-semibold'
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 transition-transform ${isActive ? 'text-rose-600 scale-110' : ''}`} />
              <span className="text-[10px] leading-tight tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
