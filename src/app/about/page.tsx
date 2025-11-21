"use client";

import { Space_Grotesk } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { experiences, skills, education, personalData } from "../datas";
import Container from "../components/Container"; // ⬅️ Import the wrapper

// Initialize Font
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-space-grotesk",
});

export default function AboutMe() {
    return (
        <div
            className={`${spaceGrotesk.variable} font-sans bg-[#0E1111] text-slate-200 selection:bg-[#ff0000] selection:text-white`}
        >
            {/* Global Styles */}
            <style jsx global>{`
                .material-symbols-outlined {
                    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
                }
                .font-display {
                    font-family: var(--font-space-grotesk), sans-serif;
                }
            `}</style>

            <Header />

            {/* Main Layout */}
            <Container>
                <main className="py-10 sm:py-16 flex flex-col gap-24">
                    {/* Hero / Intro */}
                    <section className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12">
                        <div
                            className="h-40 w-40 shrink-0 rounded-full border-4 border-[#ff0000] bg-cover bg-center bg-no-repeat shadow-xl shadow-[#ff0000]/20"
                            style={{
                                backgroundImage: personalData?.profileImageUrl
                                    ? `url(${personalData.profileImageUrl})`
                                    : 'url("/ashwin.jpg")',
                            }}
                        ></div>

                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <h1 className="text-5xl font-black tracking-tighter text-slate-50">
                                About <span className="text-[#ff0000]">Me</span>
                            </h1>
                            <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
                                I’m a MERN stack developer who builds scalable and high-performance web applications. With a
                                strong focus on clean architecture and responsive design, I enjoy turning ideas into
                                intuitive digital products.
                            </p>
                            <div className="mt-2 flex justify-center gap-4 md:justify-start">
                                <Link
                                    href={"/projects"}
                                    className="flex h-10 items-center justify-center rounded-lg bg-[#ff0000] px-5 text-sm font-bold text-white hover:bg-white hover:text-[#ff0000] transition-colors"
                                >
                                    View My Projects
                                </Link>
                                <a
                                    href="/resume.pdf"
                                    download="Ashwin-Joseph-Resume.pdf"
                                    className="flex h-10 items-center justify-center rounded-lg border border-slate-700 bg-transparent px-5 text-sm font-bold text-slate-200 hover:bg-slate-800 transition-colors"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Core Competencies */}
                    <section>
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-50">
                            Core <span className="text-[#ff0000]">Competencies</span>
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex h-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 px-4 hover:border-[#ff0000] transition-colors"
                                >
                                    <p className="text-sm font-medium text-slate-300">{skill.name.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Professional Experience */}
                    <section>
                        <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-50">
                            Professional <span className="text-[#ff0000]">Experience</span>
                        </h2>
                        <div className="relative pl-10">
                            <div className="absolute left-[18px] top-0 h-full w-px bg-[#ff0000]/50"></div>
                            <div className="space-y-12">
                                {experiences.map((job, index) => (
                                    <div key={index} className="relative group">
                                        <div className="absolute -left-10 flex size-9 items-center justify-center rounded-full border border-[#ff0000] bg-[#0E1111] shadow-[#ff0000]/20 transition-shadow">
                                            <span className="material-symbols-outlined text-[#ff0000]">apartment</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-50">{job.title}</h3>
                                            <p className="text-sm text-slate-400">{job.company}</p>
                                            <ul className="ml-4 mt-3 list-disc marker:text-[#ff0000] text-slate-400">
                                                {job.points.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="pb-16">
                        <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-50">
                            <span className="text-[#ff0000]">Education</span>
                        </h2>
                        {education.map((item, index) => (
                            <div key={index} className="flex items-start gap-6 group">
                                <div className="mt-0.5 flex size-9 items-center justify-center rounded-full border border-[#ff0000] shadow-[#ff0000]/10 transition-shadow">
                                    <span className="material-symbols-outlined text-[#ff0000]">{item.label}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-50">{item.title}</h3>
                                    <p className="text-sm text-slate-400">{item.institution}</p>
                                    <p className="mt-2 text-slate-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                </main>
            </Container>

            <Footer />
        </div>
    );
}
