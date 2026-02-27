import React from 'react';

const StatCard = ({ title, value, trend, label, color = "aura-cyan" }) => {
    return (
        <div className="glass-pro p-6 rounded-[24px] border border-white/5 bg-[#0D1321]/40 flex flex-col justify-between group hover:border-white/10 transition-all">
            <div className="flex justify-between items-start mb-4">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{title}</p>
                <div className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${trend?.startsWith('+') ? 'text-aura-green bg-aura-green/10' : 'text-aura-red bg-aura-red/10'
                    }`}>
                    {trend || '+0%'}
                </div>
            </div>

            <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white">{value}</span>
                <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">{label}</span>
            </div>

            <div className="mt-4 flex items-end gap-1 h-8">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className={`flex-1 rounded-sm bg-${color} opacity-20`}
                        style={{ height: `${20 + Math.random() * 80}%` }}
                    />
                ))}
            </div>
        </div>
    );
};

export default StatCard;
