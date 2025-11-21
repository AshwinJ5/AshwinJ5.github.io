"use client";

import { useState } from "react";
import { Space_Grotesk } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects, personalData } from "../datas";
import Link from "next/link";

// Initialize font
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-space-grotesk",
});

// Filter Categories
const categories = ["All", "Professional", "Personal"];
const techTags = ["MongoDB", "Next.js", "TypeScript", "Nest.js", "React", "Tailwind CSS"];

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
        if (activeTech === tech) {
            setActiveTech(null);
        } else {
            setActiveTech(tech);
        }
    };

    return (
        <div className={`${spaceGrotesk.variable} font-sans bg-[#0E1111] text-white min-h-screen flex flex-col selection:bg-[#ff0000] selection:text-white`}>
            <style jsx global>{`
                .material-symbols-outlined {
                    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
                }
                .font-display {
                    font-family: var(--font-space-grotesk), sans-serif;
                }
            `}</style>

            <Header />
            
            {/* Main Content Wrapper */}
            <div className="flex-1 w-full font-display">
                {/* Standardized Container */}
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    
                    {/* Header Text */}
                    <div className="flex flex-col gap-3 mb-8 md:mb-12">
                        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-white">
                            Projects <span className="text-[#ff0000]">Portfolio</span>
                        </h1>
                        <p className="text-zinc-400 text-base md:text-lg font-normal leading-normal max-w-2xl">
                            A showcase of my professional and personal projects using the MERN stack. Feel free to
                            explore and see the code behind them.
                        </p>
                    </div>

                    {/* Filters Bar */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between mb-8">
                        {/* Category Tabs */}
                        <div className="flex h-10 items-center rounded-lg bg-zinc-900 p-1 w-full lg:w-auto">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`flex h-full grow items-center justify-center rounded px-4 md:px-6 text-sm font-medium transition-all cursor-pointer ${
                                        activeCategory === cat
                                            ? "bg-[#ff0000] text-white shadow-md"
                                            : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Tech Tags */}
                        <div className="flex gap-2 flex-wrap items-center">
                            <p className="text-sm font-medium text-zinc-400 mr-2 shrink-0 hidden sm:block">
                                Filter by tech:
                            </p>
                            {techTags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => toggleTech(tag)}
                                    className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full border px-4 transition-all text-sm font-medium cursor-pointer ${
                                        activeTech === tag
                                            ? "bg-[#ff0000] border-[#ff0000]/80 text-[#ffffff]"
                                            : "border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col rounded-xl bg-zinc-900 border border-[#ff0000] overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl  hover:border-[#ff0000] hover:shadow-[#ff0000]/20"
                                >
                                    <div
                                        className="w-full bg-center bg-top bg-no-repeat aspect-video bg-cover group-hover:scale-105 transition-transform duration-500"
                                        style={{ backgroundImage: `url("${project.image_url}")` }}
                                        role="img"
                                        aria-label={`Screenshot of ${project.title}`}
                                    ></div>
                                    <div className="p-5 flex flex-col gap-4 grow bg-zinc-900 z-10">
                                        <div className="grow">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-white text-xl font-bold leading-normal">
                                                    {project.title}
                                                </h3>
                                                {/* Badge */}
                                                <span className="text-[10px] uppercase tracking-wider border border-zinc-700 px-2 py-0.5 rounded text-zinc-400">
                                                    {project.type}
                                                </span>
                                            </div>
                                            <p className="text-zinc-400 text-sm font-normal leading-relaxed mt-2">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="flex h-6 items-center justify-center rounded-full bg-zinc-800 px-3 text-xs font-medium text-zinc-300 border border-zinc-700  hover:bg-white hover:text-[#ff0000]"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex gap-3 mt-auto pt-4">
                                            <Link
                                                href={project.demoLink}
                                                target="_blank"
                                                className="flex-1 flex items-center justify-center h-10 px-4 rounded-lg bg-[#ff0000] text-white text-sm font-bold gap-2 hover:bg-white hover:text-[#ff0000] transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-lg">
                                                    open_in_new
                                                </span>
                                                Live Demo
                                            </Link>
                                            {project.codeLink && (
                                                <Link
                                                    href={project.codeLink}
                                                    target="_blank"
                                                    className="flex-1 flex items-center justify-center h-10 px-4 rounded-lg bg-zinc-800 text-white text-sm font-bold gap-2 hover:bg-zinc-700 transition-colors border border-zinc-700"
                                                >
                                                    <span className="material-symbols-outlined text-lg">code</span>
                                                    Code
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center text-zinc-500">
                                <span className="material-symbols-outlined text-5xl mb-4 block">folder_off</span>
                                <p className="text-lg">No projects found matching the selected filters.</p>
                                <button
                                    onClick={() => {
                                        setActiveCategory("All");
                                        setActiveTech(null);
                                    }}
                                    className="mt-4 text-[#ff0000] hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 mb-12">
                        <div className="flex flex-col items-center gap-4 rounded-xl bg-zinc-900 p-8 md:p-12 text-center border border-zinc-800 relative overflow-hidden group">
                            <div
                                className="absolute inset-0 z-0 bg-no-repeat bg-bottom-right opacity-5 transition-opacity group-hover:opacity-10"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyadS7cRCP14YGNYgwSgGZqj2gWIXPS9qltUWl-51alb414cku_Q07EQIvGHHUZ_bZAaEc3qwcyeMZQcoZ2JUPyHZdKcai_zuay_YGMFEQqunVjm7kummPJQWyOj9YiE4EQxDJSlifWOUz8HqSEYZPGJmUJZ1ptvcejcFVr1a7gzDntEq5njvpVrnRfs962HgtAeWdfypV0nSVO0O6Af2O72zSzY96CEelG96ucQ2Rx6q-F-A7n2MNjQNGFRp1bByAK4xzBrL5xCs')",
                                    backgroundSize: "50% auto",
                                }}
                            ></div>
                            <div className="relative z-10 flex flex-col items-center gap-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-white">Want to see more?</h3>
                                <p className="text-zinc-300 max-w-md text-lg">
                                    I have a variety of other projects, from small experiments to larger
                                    applications. Check out my GitHub profile for a complete list.
                                </p>
                                <Link
                                    href={`${personalData?.socialMedia?.github}?tab=repositories` || "#"}
                                    target="_blank"
                                    className="mt-4 flex h-12 items-center justify-center rounded-lg bg-[#ff0000] px-8 text-base font-bold text-white shadow-lg shadow-[#ff0000]/20 transition-all hover:bg-red-700 hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    <span className="material-symbols-outlined mr-2">arrow_forward</span>
                                    View on GitHub
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}