import React from 'react';
import { Calendar, Target, FileCheck, TrendingUp, UserCheck } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, setActiveTab }) => {
  const bottomItems = [
    { id: 'student-dash', label: 'Hôm nay', icon: Calendar },
    { id: 'practice', label: 'Luyện tập', icon: Target },
    { id: 'exam', label: 'Thi thử', icon: FileCheck },
    { id: 'progress', label: 'Tiến bộ', icon: TrendingUp },
    { id: 'parent-dash', label: 'Tài khoản', icon: UserCheck },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 py-1.5 px-2 shadow-lg">
      <div className="grid grid-cols-5 gap-1">
        {bottomItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
                isActive ? 'text-blue-600 bg-blue-50/80 font-bold' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'text-blue-600 stroke-[2.5]' : ''}`} />
              <span className="text-[11px] leading-tight tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
