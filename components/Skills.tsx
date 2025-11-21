import React from 'react';
import { Database, LayoutDashboard, Code2, BrainCircuit } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const actuarialData = [
  { subject: 'Loss Reserving', A: 100, fullMark: 100 },
  { subject: 'Insurance Pricing', A: 100, fullMark: 100 },
  { subject: 'Capital Modeling', A: 100, fullMark: 100 },
  { subject: 'Risk Financing', A: 100, fullMark: 100 },
  { subject: 'Experience Rating', A: 100, fullMark: 100 },
  { subject: 'Regulatory Compliance', A: 100, fullMark: 100 },
  { subject: 'Financial Reporting', A: 100, fullMark: 100 },
  { subject: 'Stochastic Modeling', A: 100, fullMark: 100 },
];

const techSkills = [
  { name: "SQL / Databases", icon: Database },
  { name: "Tableau / PowerBI", icon: LayoutDashboard },
  { name: "Python & R", icon: Code2 },
  { name: "Machine Learning", icon: BrainCircuit }
];

const CustomTick = ({ payload, x, y, cx, cy, textAnchor }: any) => {
  const words = payload.value.split(' ');
  
  // Calculate offset to push labels away from center to avoid overlap with the chart
  const distanceOffset = 25; 
  let newX = x;
  let newY = y;

  if (cx && cy) {
    const dx = x - cx;
    const dy = y - cy;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance > 0) {
      newX = cx + (dx / distance) * (distance + distanceOffset);
      newY = cy + (dy / distance) * (distance + distanceOffset);
    }
  }

  return (
    <text
      x={newX}
      y={newY}
      textAnchor={textAnchor}
      fill="#a3a3a3"
      fontSize={11}
      fontWeight={500}
    >
      {words.map((word: string, index: number) => (
        <tspan x={newX} dy={index === 0 ? (words.length > 1 ? -6 : 4) : 12} key={index}>
          {word}
        </tspan>
      ))}
    </text>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
            A blend of traditional actuarial rigor and modern data science techniques.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          {/* Actuarial Expertise Chart */}
          <div className="bg-white dark:bg-neutral-950 p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col min-h-[450px]">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 text-center">
              Actuarial Expertise
            </h3>
            <div className="flex-grow flex items-center justify-center -ml-4 -mr-4 md:ml-0 md:mr-0">
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart cx="50%" cy="50%" outerRadius="45%" data={actuarialData} margin={{ top: 40, right: 50, bottom: 40, left: 50 }}>
                  <PolarGrid stroke="#525252" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={CustomTick}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Actuarial"
                    dataKey="A"
                    stroke="#e5e5e5"
                    strokeWidth={2}
                    fill="#d4d4d4"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div className="bg-white dark:bg-neutral-950 p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col min-h-[450px]">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
              Technical Skills
            </h3>
            <div className="flex-grow grid grid-cols-2 gap-4 md:gap-6">
              {techSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 group cursor-default text-center"
                >
                  <div className="mb-4 p-3 rounded-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-700 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <skill.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;