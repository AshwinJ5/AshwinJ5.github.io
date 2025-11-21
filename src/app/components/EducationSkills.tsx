"use client";

import { educationData, skills } from "../datas";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useRef, useState } from "react";

const skillsWithPercentage = skills.filter((skill) => typeof skill.percentage === "number");
const mid = Math.ceil(skillsWithPercentage.length / 2);
const skillColumns = [skillsWithPercentage.slice(0, mid), skillsWithPercentage.slice(mid)];

export default function EducationSkills() {
    return (
        <div className={`font-sans min-h-screen bg-black text-white selection:bg-[#ff0000] selection:text-white`}>
            {/* Inline styles for Material Symbols */}
            <style jsx global>{`
                .material-symbols-outlined {
                    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
                }
                .font-display {
                    font-family: var(--font-space-grotesk), sans-serif;
                }
            `}</style>

            {/* Main Container with strict overflow handling */}
            <div className="relative min-h-screen w-full overflow-x-hidden font-display">
                {/* Background Glow Effects Wrapper */}
                {/* absolute inset-0 + overflow-hidden ensures blobs never cause scrollbars */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                    {/* Top Left Blob */}
                    <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-0">
                        <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-linear-to-tr from-[#ff0000] to-[#ff0000]/50 blur-[80px] sm:blur-[120px] opacity-20"></div>
                    </div>

                    {/* Bottom Right Blob */}
                    <div className="absolute bottom-4/9 right-0 translate-x-1/3 translate-y-1/3 z-0">
                        <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-linear-to-bl from-[#ff0000] to-[#ff0000]/50 blur-[80px] sm:blur-[120px] opacity-20"></div>
                    </div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Self-contained Header (Handles its own Mobile Menu) */}
                    <Header />

                    {/* Main Content */}
                    <main className="py-16 sm:py-24">
                        <div className="space-y-16 sm:space-y-24">
                            {/* Page Title */}
                            <div className="flex flex-col gap-6">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                                    Education & <span className="text-[#ff0000]">Skills</span>
                                </h1>
                                <p className="text-gray-400 max-w-2xl text-lg sm:text-xl leading-relaxed">
                                    
                                        My academic path started with a foundation in Mechanical Engineering, which shaped my analytical and problem-solving mindset. Later, I transitioned into modern software development through structured full-stack training, equipping me with practical expertise in building scalable digital solutions.
                                    
                                </p>
                            </div>

                            {/* Education Section */}
                            <section>
                                <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-8 sm:mb-12 border-l-4 border-[#ff0000] pl-4">
                                    Education
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:justify-self-center">
                                    {educationData.map((item, index) => (
                                        <div
                                            key={index}
                                            className="group flex flex-col items-start justify-start rounded-xl border border-[#222222] bg-zinc-950/50 p-6 sm:p-8 transition-all hover:border-[#ff0000]/50 hover:shadow-[0_0_30px_rgba(255,0,0,0.1)]"
                                        >
                                            <div className="flex flex-col items-start justify-start gap-2">
                                                <p className="text-xl font-bold leading-tight tracking-tight group-hover:text-[#ff0000] transition-colors">
                                                    <span className="text-[#ff0000] mr-2">▪</span> {item.title}
                                                </p>
                                                <div className="flex flex-col gap-1 pl-5 border-l border-zinc-800 ml-1.5 mt-2">
                                                    <p className="text-gray-300 text-base sm:text-lg font-medium pl-4">
                                                        {item.degree}
                                                    </p>
                                                    <p className="text-gray-500 text-sm pl-4">{item.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Technical Skills Section */}
                            <section>
                                <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-8 sm:mb-12 border-l-4 border-[#ff0000] pl-4">
                                    Technical Skills
                                </h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                                    {skillColumns.map((column, index) => (
                                        <div key={index} className="flex flex-col gap-6 sm:gap-8">
                                            {column.map((skill, idx) => (
                                                <SkillBar key={idx} name={skill.name} percentage={skill.percentage!} />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}

// Helper Component for Progress Bars
function SkillBar({ name, percentage }: { name: string; percentage: number }) {
    // 1. Initialize width at 0
    const [width, setWidth] = useState(0);
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 2. Use IntersectionObserver to trigger animation only when visible
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Small timeout adds a satisfying visual delay
                    setTimeout(() => {
                        setWidth(percentage);
                    }, 200);
                    // Disconnect so it doesn't reset if user scrolls up and down
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the item is visible
        );

        if (barRef.current) {
            observer.observe(barRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [percentage]);

    return (
        <div className="space-y-2 group" ref={barRef}>
            <div className="flex justify-between font-medium text-base sm:text-lg">
                <span className="group-hover:text-[#ff0000] transition-colors">{name}</span>
                <span className="text-gray-400">{percentage}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-[#222222] overflow-hidden">
                {/* 3. The transition properties here handle the smooth growth */}
                <div
                    className="h-full bg-[#ff0000] rounded-full transition-all duration-1500 ease-out group-hover:shadow-[0_0_10px_#ff0000]"
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </div>
    );
}
