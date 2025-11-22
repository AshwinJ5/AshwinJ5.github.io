"use client";

import { educationData, skills } from "../datas";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // ← ADD

const skillsWithPercentage = skills.filter((skill) => typeof skill.percentage === "number");
const mid = Math.ceil(skillsWithPercentage.length / 2);
const skillColumns = [skillsWithPercentage.slice(0, mid), skillsWithPercentage.slice(mid)];

export default function EducationSkills() {
    return (
        <div
            className={`font-display min-h-screen bg-[#0E1111] text-slate-200 selection:bg-[#ff0000] selection:text-white`}
        >
            <Header />

            <div className="relative min-h-screen w-full overflow-x-hidden font-display">
                {/* Background Effects... */}
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
                    <main className="py-16 sm:py-24 space-y-16 sm:space-y-24">
                        {/* 🔥 Page Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col gap-6"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                                Education & <span className="text-[#ff0000]">Skills</span>
                            </h1>
                            <p className="text-gray-400 max-w-2xl text-lg sm:text-xl leading-relaxed">
                                My academic path started with a foundation in Mechanical Engineering...
                            </p>
                        </motion.div>

                        {/* 🎓 Education Section */}
                        <section>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-2xl sm:text-3xl font-bold leading-tight mb-8 sm:mb-12 border-l-4 border-[#ff0000] pl-4"
                            >
                                Education
                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                {educationData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.15 }}
                                        className="group flex flex-col rounded-xl border border-[#222222] bg-zinc-950/50 p-6 sm:p-8 transition-all hover:border-[#ff0000]/50 hover:shadow-[0_0_30px_rgba(255,0,0,0.1)]"
                                    >
                                        <p className="text-xl font-bold group-hover:text-[#ff0000] transition-colors">
                                            <span className="text-[#ff0000] mr-2">▪</span> {item.title}
                                        </p>
                                        <div className="pl-5 border-l border-zinc-800 ml-1.5 mt-2">
                                            <p className="text-gray-300 sm:text-lg font-medium">{item.degree}</p>
                                            <p className="text-gray-500 text-sm">{item.date}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* 🧠 Technical Skills */}
                        <section>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 border-l-4 border-[#ff0000] pl-4"
                            >
                                Technical <span className="text-[#ff0000]">Skills</span>
                            </motion.h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                                {skillColumns.map((column, index) => (
                                    <div key={index} className="flex flex-col gap-6 sm:gap-8">
                                        {column.map((skill, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                            >
                                                <SkillBar name={skill.name} percentage={skill.percentage!} />
                                            </motion.div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}
function SkillBar({ name, percentage }: { name: string; percentage: number }) {
    const [width, setWidth] = useState(0);
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(() => setWidth(percentage), 200);
                observer.disconnect();
            }
        });
        observer.observe(barRef.current!);
        return () => observer.disconnect();
    }, [percentage]);

    return (
        <motion.div whileHover={{ scale: 1.01 }} className="space-y-2 group" ref={barRef}>
            <div className="flex justify-between font-medium">
                <span className="group-hover:text-[#ff0000] transition-colors">{name}</span>
                <span className="text-gray-400">{percentage}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-[#222222] overflow-hidden">
                <div
                    className="h-full bg-[#ff0000] rounded-full transition-all duration-1500 ease-out group-hover:shadow-[0_0_10px_#ff0000]"
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </motion.div>
    );
}
