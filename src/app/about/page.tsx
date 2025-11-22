"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { experiences, skills, education, personalData } from "../datas";
import Container from "../components/Container";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

export default function AboutMe() {
    return (
        <div className={`font-display bg-[#0E1111] text-slate-200 selection:bg-[#ff0000] selection:text-white`}>
            <Header />
            <Container>
                <main className="py-10 sm:py-16 flex flex-col gap-24">
                    {/* Hero Section */}
                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12"
                    >
                        <motion.div
                            className="h-40 w-40 shrink-0 rounded-full border-4 border-[#ff0000] bg-cover bg-center shadow-xl shadow-[#ff0000]/20"
                            style={{
                                backgroundImage: personalData?.profileImageUrl
                                    ? `url(${personalData.profileImageUrl})`
                                    : 'url("/ashwin.jpg")',
                            }}
                        ></motion.div>

                        <motion.div variants={fadeUp} className="flex flex-col gap-4 text-center md:text-left">
                            <h1 className="text-5xl font-black">
                                About <span className="text-[#ff0000]">Me</span>
                            </h1>
                            <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
                                I’m a MERN stack developer passionate about crafting scalable and high-performance web
                                applications.
                            </p>
                            <div className="mt-2 flex justify-center gap-4 md:justify-start">
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Link
                                        href="/projects"
                                        className="flex h-10 items-center justify-center rounded-lg bg-[#ff0000] px-5 text-sm font-bold text-white hover:bg-white hover:text-[#ff0000] transition-colors"
                                    >
                                        View My Projects
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <a
                                        href="/resume.pdf"
                                        download="Ashwin-Joseph-Resume.pdf"
                                        className="flex h-10 items-center justify-center rounded-lg border border-slate-700 px-5 text-sm font-bold hover:bg-slate-800 transition-colors"
                                    >
                                        Download Resume
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.section>

                    {/* Core Competencies */}
                    <section>
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="mb-6 text-3xl font-bold"
                        >
                            Core <span className="text-[#ff0000]">Competencies</span>
                        </motion.h2>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="flex flex-wrap gap-3"
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="flex h-9 items-center rounded-lg border border-slate-800 bg-slate-900 px-4 hover:border-[#ff0000]"
                                >
                                    <p className="text-sm font-medium">{skill.name.toUpperCase()}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    {/* Professional Experience */}
                    <section>
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mb-8 text-3xl font-bold"
                        >
                            Professional <span className="text-[#ff0000]">Experience</span>
                        </motion.h2>

                        <div className="relative pl-10">
                            <div className="absolute left-[18px] top-0 h-full w-px bg-[#ff0000]/50"></div>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-12"
                            >
                                {experiences.map((job, index) => (
                                    <motion.div key={index} variants={fadeUp} className="relative group">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="absolute -left-10 flex size-9 items-center justify-center rounded-full border border-[#ff0000] bg-[#0E1111] shadow-[#ff0000]/20 transition-shadow"
                                        >
                                            <span className="material-symbols-outlined text-[#ff0000]">apartment</span>
                                        </motion.div>

                                        <h3 className="text-lg font-bold">{job.title}</h3>
                                        <p className="text-sm text-slate-400">{job.company}</p>
                                        <ul className="ml-4 mt-3 list-disc marker:text-[#ff0000] text-slate-400">
                                            {job.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="pb-16">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="mb-8 text-3xl font-bold"
                        >
                            <span className="text-[#ff0000]">Education</span>
                        </motion.h2>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {education.map((item, index) => (
                                <motion.div key={index} variants={fadeUp} className="flex gap-6 group">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="flex size-9 items-center justify-center rounded-full border border-[#ff0000]"
                                    >
                                        <span className="material-symbols-outlined text-[#ff0000]">{item.label}</span>
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold">{item.title}</h3>
                                        <p className="text-sm text-slate-400">{item.institution}</p>
                                        <p className="mt-2 text-slate-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>
                </main>
            </Container>

            <Footer />
        </div>
    );
}
