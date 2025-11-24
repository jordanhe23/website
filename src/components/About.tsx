import React from 'react';
import { ExperienceItem } from '../types';
import { BarChart3, Laptop, Calendar, Briefcase } from 'lucide-react';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Texas Windstorm Insurance Association\nTexas Fair Plan Association",
    role: "Senior Actuary",
    period: "2023 - Present",
    description: "",
    highlights: [
      "Reserving Processes: Oversee quarterly and monthly reserving for wind and hail claims, including projecting ultimate losses, estimating incurred but not reported (IBNR) losses, and managing outstanding reserves to ensure financial stability",
      "Rate Analysis and Filings: Perform annual rate adequacy analysis and complete annual rate filings as required by law and regulations",
      "Reinsurance & Catastrophe Modeling: Determine probable maximum Loss, optimize reinsurance strategies, and evaluate catastrophe exposure to effectively manage risks",
      "Growth Projections: Examines policy data to track and project growth in policies, exposures and premiums, focusing on the shift in the residual market",
      "Legislative Initiatives: Provide pricing support and underwriting expertise for the launch of a new property owners’ association insurance product for Texas FAIR Plan",
      "Regulatory Reporting: Fulfill financial and regulatory reporting, including preparing annual statements, Schedule P, and other reports mandated by the Texas Department of Insurance",
      "Regulatory Compliance: Comply with periodic examinations and address inquiries from regulators",
      "Analytical Support: Discuss analytical needs with various stakeholders across enterprises to implement actuarial solutions supporting company mission"
    ]
  },
  {
    id: 2,
    company: "PwC Risk Modeling Services",
    role: "Consulting Actuary - Reserving",
    period: "2012 - 2023",
    description: "",
    highlights: [
      "Managed engagements for PwC’s large insurance audit clients, evaluating reserve balances and actuarial processes to ensure compliance with accounting and actuarial standards",
      "Conducted comprehensive loss reserving analyses and issued Statements of Actuarial Opinions, aiding clients in meeting annual regulatory requirements surrounding the actuarial opinion process",
      "Delivered quarterly reserving analyses for corporate self-insurers, which includes projections of estimated ultimate losses and outstanding loss reserves; collaborated with the accounting team to prepare regulatory and financial schedules, including Schedule P, to facilitate management's year-end financial assessments and annual reporting",
      "Performed year-end solvency reviews for governmental insurers and non-profit insurance cooperatives, developed unpaid claim estimates for financial reporting, and offered expert insights into the program’s capital adequacy"
    ]
  },
  {
    id: 3,
    company: "PwC Risk Modeling Services",
    role: "Consulting Actuary - Pricing",
    period: "2012 - 2023",
    description: "",
    highlights: [
      "Performed annual rate level reviews for non-profit insurance risk pools, developed various rate options and collaboratively worked with management and the board to evaluate the risk and reward of various rate level options",
      "Evaluated and identified new rating variables for the underwriting process, conducted impact analyses for the integration of additional parameters, and formulated transition plans for implementation",
      "Designed and implemented fair and actuarially sound experience rating systems for self-insured pools to improve underwriting accuracy and foster equitable premium allocation"
    ]
  },
  {
    id: 4,
    company: "PwC Risk Modeling Services",
    role: "Consulting Actuary - Risk & Capital",
    period: "2012 - 2023",
    description: "",
    highlights: [
      "Leveraged ERM principles to help dozens of governmental and non-profit organizations develop operating reserve targets that reflect their specific financial objectives and risk drivers",
      "Managed engagements to build, enhance and validated economic capital models for self-insurers and public risk pools across the country, focusing on quantifying risk drivers and defining risk tolerance"
    ]
  },
  {
    id: 5,
    company: "PwC Risk Modeling Services",
    role: "Consulting Actuary - Claims & Analytics",
    period: "2012 - 2023",
    description: "",
    highlights: [
      <span key="analytics-link">
        Collaborated with financial engineers and data scientists to successfully build out the core capabilities of PwC’s <a href="https://explore.pwc.com/advancedfinanceanalytics/earnings-analysis" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 dark:text-white underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-900 dark:hover:decoration-white transition-all">Advanced Finance Analytics Platform</a> via AWS QuickSight, which included earnings analysis, real-time forecasting, product profitability & performance management, capital and asset-liability management, investment management and risk & shareholder value management
      </span>,
      "Developed Power BI & Tableau dashboards providing high-level overviews and granular insights into losses and claims, frequency and severity trends, and specific attributes such as category of losses and nature of injury. Integrated interactive features enhancing user engagement with data visualizations, filter application, and side-by-side data comparisons"
    ]
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-40">
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start order-1">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neutral-500/10 dark:bg-white/5 blur-[80px] rounded-full z-0"></div>
               <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white dark:border-neutral-900 shadow-2xl relative z-10">
                 <img 
                   src="https://jordanhe23.github.io/homepage.github.io/pics/Headshot.JPG" 
                   alt="Jordan He" 
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                 />
               </div>
               <div className="absolute -top-0 -right-4 md:-right-8 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-white/50 dark:border-neutral-700 p-3 rounded-2xl shadow-lg animate-float z-20">
                 <BarChart3 className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
               </div>
               <div className="absolute bottom-4 -left-4 md:-left-8 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-white/50 dark:border-neutral-700 p-3 rounded-2xl shadow-lg animate-float-delayed z-20">
                 <Laptop className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
               </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-2">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">About Me</h2>
              <div className="h-1.5 w-16 bg-gradient-to-r from-neutral-400 to-neutral-600 rounded-full"></div>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 mb-10">
              <p>
                As a <strong className="text-neutral-900 dark:text-white font-semibold">Senior Actuary</strong> at the Texas Windstorm Insurance Association and Texas Fair Plan Association, I lead actuarial and analytical initiatives for residual market property insurance, specializing in wind and hail coverages along the Texas coast.
              </p>
              <p>
                Prior to joining Texas Windstorm, I was a consulting actuary for <strong className="text-neutral-900 dark:text-white font-semibold">12 years</strong>, where I served a diverse range of clients—from traditional insurers and reinsurers to captives, large corporates, public entities, and self-insured risk pools. My work encompassed loss reserving, insurance pricing, capital modeling, simulation modeling, experience rating, and risk financing.
              </p>
              <p>
                Outside the boardroom, I'm a self-taught coder passionate about data science and machine learning. I tinker with projects in my spare time to stay ahead of analytics trends.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">Professional Experience</h2>
             <p className="text-lg text-neutral-500 dark:text-neutral-400">A timeline of my career in actuarial science and risk consulting.</p>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-300 via-neutral-500 to-transparent dark:from-neutral-700 dark:via-neutral-500 transform -translate-x-1/2"></div>
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-300 via-neutral-500 to-transparent dark:from-neutral-700 dark:via-neutral-500"></div>
            <div className="space-y-12 md:space-y-24">
              {experiences.map((exp, index) => (
                <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-0 md:left-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black dark:bg-black border border-neutral-300 dark:border-neutral-600 flex items-center justify-center z-10 shadow-lg transform md:-translate-x-1/2 -translate-x-1/2 translate-y-[0px]">
                     <Briefcase className="w-5 h-5 text-white dark:text-white" />
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                  <div className={`w-full md:w-1/2 mt-4 md:mt-0 pl-12 ${
                    index % 2 === 0 
                      ? 'md:pr-12 md:pl-0' 
                      : 'md:pl-12 md:pr-0'
                  }`}>
                     <div className="group bg-white dark:bg-neutral-900/50 dark:backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300">
                        <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 font-mono text-sm font-medium mb-3 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">{exp.role}</h3>
                        <h4 className="text-lg font-medium text-neutral-500 dark:text-neutral-400 mb-6 whitespace-pre-line">{exp.company}</h4>
                        <ul className="space-y-4">
                          {exp.highlights.map((highlight, i) => {
                            if (typeof highlight !== 'string') {
                               return (
                                 <li key={i} className="flex items-start gap-3 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                   <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0 group-hover:bg-neutral-600 dark:group-hover:bg-neutral-300 transition-colors"></span>
                                   <span>{highlight}</span>
                                 </li>
                               );
                            }
                            const parts = highlight.split(':');
                            const hasTitle = parts.length > 1;
                            return (
                              <li key={i} className="flex items-start gap-3 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0 group-hover:bg-neutral-600 dark:group-hover:bg-neutral-300 transition-colors"></span>
                                <span>
                                  {hasTitle ? (
                                    <>
                                      <strong className="text-neutral-900 dark:text-white font-bold">{parts[0]}:</strong>
                                      {parts.slice(1).join(':')}
                                    </>
                                  ) : (
                                    highlight
                                  )}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;