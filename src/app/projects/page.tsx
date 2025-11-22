"use client";

import { useState } from "react";
import { Space_Grotesk } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects, personalData } from "../datas";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Initialize font
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-space-grotesk",
});

// Filter Categories
const categories = ["All", "Professional", "Personal"];
const techTags = ["MongoDB", "Next.js", "TypeScript", "Nest.js", "React", "Tailwind CSS"];

// Fixed Variants with proper TypeScript types
const headerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.5, 
            ease: "easeOut" as const 
        } 
    },
};

const filterBarVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.4, 
            ease: "easeOut" as const 
        } 
    },
};

const gridVariants = {
    visible: {
        transition: {
            staggerChildren: 0.04,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
            duration: 0.25, 
            ease: "easeOut" as const 
        } 
    },
    exit: { 
        opacity: 0, 
        scale: 0.9, 
        transition: { 
            duration: 0.2, 
            ease: "easeIn" as const 
        } 
    },
};

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeTech, setActiveTech] = useState<string | null>(null);

    // Filter Logic
    const filteredProjects = projects.filter((project) => {
        const matchesCategory = activeCategory === "All" || project.type === activeCategory;
        const matchesTech = activeTech ? project.tech.includes(activeTech) : true;
        return matchesCategory && matchesTech;
    });

    const toggleTech = (tech: string) => {
        setActiveTech((prev) => (prev === tech ? null : tech));
    };

    return (
        <div
            className={`${spaceGrotesk.variable} font-sans bg-[#0E1111] text-white min-h-screen flex flex-col selection:bg-[#ff0000] selection:text-white`}
        >
            <style jsx global>{`
                .material-symbols-outlined {
                    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
                }
                .font-display {
                    font-family: var(--font-space-grotesk), sans-serif;
                }
            `}</style>

            <Header />

            <div className="flex-1 w-full font-display">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={headerVariants}
                        className="flex flex-col gap-3 mb-8 md:mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
                            Projects <span className="text-[#ff0000]">Portfolio</span>
                        </h1>
                        <p className="text-zinc-400 text-base md:text-lg max-w-2xl">
                            A showcase of my professional and personal projects using the MERN stack.
                        </p>
                    </motion.div>

                    {/* Filters Bar */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={filterBarVariants}
                        className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between mb-8"
                    >
                        {/* Category Tabs */}
                        <div className="flex h-10 items-center rounded-lg bg-zinc-900 p-1 w-full lg:w-auto">
                            {categories.map((cat) => (
                                <motion.button
                                    key={cat}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`flex h-full grow items-center justify-center rounded px-4 md:px-6 text-sm font-medium transition-all cursor-pointer ${
                                        activeCategory === cat
                                            ? "bg-[#ff0000] text-white shadow-md"
                                            : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                                    }`}
                                >
                                    {cat}
                                </motion.button>
                            ))}
                        </div>

                        {/* Tech Tags */}
                        <div className="flex gap-2 flex-wrap items-center">
                            <p className="text-sm font-medium text-zinc-400 mr-2 hidden sm:block">Filter by tech:</p>
                            {techTags.map((tag) => (
                                <motion.button
                                    key={tag}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => toggleTech(tag)}
                                    className={`flex h-8 items-center justify-center rounded-full border px-4 text-sm font-medium cursor-pointer ${
                                        activeTech === tag
                                            ? "bg-[#ff0000] border-[#ff0000]/80 text-white"
                                            : "border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
                                    }`}
                                >
                                    {tag}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        variants={gridVariants}
                        initial="visible"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        transition={{
                            layout: { duration: 0.35, ease: "easeInOut" as const },
                        }}
                    >
                        <AnimatePresence initial={false}>
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project) => (
                                    <motion.div
                                        key={project.title}
                                        layout
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{
                                            layout: { duration: 0.35, ease: "easeInOut" as const },
                                        }}
                                        whileHover={{ y: -4, boxShadow: "0 18px 45px rgba(0,0,0,0.45)" }}
                                        className="group flex flex-col rounded-xl bg-zinc-900 border border-[#ff0000] overflow-hidden transition-colors hover:border-[#ff3333]"
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative w-full aspect-video overflow-hidden">
                                            <div
                                                className="w-full h-full bg-top bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                                                style={{ backgroundImage: `url("${project.image_url}")` }}
                                                role="img"
                                                aria-label={`Screenshot of ${project.title}`}
                                            ></div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col gap-4 grow bg-zinc-900">
                                            <div className="flex justify-between items-start gap-3">
                                                <h3 className="text-white text-xl font-bold leading-snug">
                                                    {project.title}
                                                </h3>
                                                <span className="text-[10px] uppercase tracking-wider border border-zinc-700 px-2 py-0.5 rounded text-zinc-400 shrink-0">
                                                    {project.type}
                                                </span>
                                            </div>

                                            <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((t) => (
                                                    <motion.span
                                                        key={t}
                                                        whileHover={{ scale: 1.06 }}
                                                        className="flex h-6 items-center justify-center rounded-full bg-zinc-800 px-3 text-xs font-medium text-zinc-300 border border-zinc-700 hover:bg-white hover:text-[#ff0000]"
                                                    >
                                                        {t}
                                                    </motion.span>
                                                ))}
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex gap-3 mt-auto pt-4">
                                                <motion.div whileHover={{ y: -1 }} className="flex-1">
                                                    <Link
                                                        href={project.demoLink}
                                                        target="_blank"
                                                        className="flex h-10 w-full items-center justify-center rounded-lg bg-[#ff0000] text-white text-sm font-bold gap-2 hover:bg-white hover:text-[#ff0000] transition-colors"
                                                    >
                                                        <span className="material-symbols-outlined text-base">
                                                            open_in_new
                                                        </span>
                                                        Live Demo
                                                    </Link>
                                                </motion.div>

                                                {project.codeLink && (
                                                    <motion.div whileHover={{ y: -1 }} className="flex-1">
                                                        <Link
                                                            href={project.codeLink}
                                                            target="_blank"
                                                            className="flex h-10 w-full items-center justify-center rounded-lg bg-zinc-800 text-white text-sm font-bold gap-2 hover:bg-zinc-700 border border-zinc-700 transition-colors"
                                                        >
                                                            <span className="material-symbols-outlined text-base">
                                                                code
                                                            </span>
                                                            Code
                                                        </Link>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    key="no-results"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="col-span-full py-20 text-center text-zinc-500 flex flex-col items-center"
                                >
                                    <span className="material-symbols-outlined text-5xl mb-4 block">folder_off</span>
                                    <p className="text-lg mb-3">No projects found matching the selected filters.</p>
                                    <button
                                        onClick={() => {
                                            setActiveCategory("All");
                                            setActiveTech(null);
                                        }}
                                        className="mt-2 text-[#ff0000] hover:underline text-sm font-medium"
                                    >
                                        Clear all filters
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.45, ease: "easeOut" as const }}
                        className="mt-16 mb-12 rounded-xl bg-zinc-900 p-8 md:p-12 border border-zinc-800 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,0,0,0.18),transparent_55%)] opacity-60 pointer-events-none" />
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Want to see more?</h3>
                            <p className="text-zinc-300 mt-2 max-w-md mx-auto">
                                I&apos;ve built more experiments and side projects. Check out my GitHub repositories for
                                the full list.
                            </p>
                            <motion.div whileHover={{ y: -2 }} className="inline-flex mt-6">
                                <Link
                                    href={`${personalData?.socialMedia?.github}?tab=repositories` || "#"}
                                    target="_blank"
                                    className="flex h-12 items-center justify-center rounded-lg bg-[#ff0000] px-8 text-base font-bold text-white shadow-lg shadow-[#ff0000]/30 transition-all hover:bg-red-600"
                                >
                                    <span className="material-symbols-outlined mr-2 text-base">arrow_forward</span>
                                    View on GitHub
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}