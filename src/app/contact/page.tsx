"use client";

import React, { useState } from "react";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { personalData } from "../datas";

// Initialize font
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-space-grotesk",
});
export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here (e.g., API call)
        console.log("Form submitted:", formData);
        alert("Message sent! (This is a demo)");
    };

    return (
        <div
            className={`${spaceGrotesk.variable} font-sans bg-black text-gray-50 min-h-screen flex flex-col selection:bg-[#FF0000] selection:text-white`}
        >
            {/* Load Material Symbols Font */}
            <style jsx global>{`
                .material-symbols-outlined {
                    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
                }
                .font-display {
                    font-family: var(--font-space-grotesk), sans-serif;
                }
            `}</style>

            <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 -left-48 h-160 w-160 bg-red-900/40 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
                <div className="absolute bottom-0 -right-48 h-160 w-160 bg-red-900/30 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

                {/* Header */}
                <Header />

                <main className="flex-1 z-10">
                    <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 lg:py-32">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                            {/* Left Column: Info */}
                            <div className="flex flex-col justify-center space-y-8">
                                <div className="space-y-4">
                                    <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] sm:text-6xl md:text-7xl">
                                        Let&apos;s Connect
                                    </h1>
                                    <p className="text-gray-400 text-lg font-normal leading-normal max-w-md">
                                        Feel free to reach out for collaborations, job opportunities, or just to say hello!
                                        I&apos;m always open to discussing new projects and ideas.
                                    </p>
                                </div>

                                <div className="flex flex-col space-y-4 gap-5">
                                    {/* Email */}
                                    <Link
                                        className="group flex items-center gap-4 rounded-lg p-3 -m-3 transition-colors "
                                        href={`mailto:${personalData?.email}` || "#"}
                                        target="_blank"
                                    >
                                        <div className="text-gray-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gray-900 group-hover:bg-[#FF0000] transition-colors">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="truncate text-base font-medium text-white">
                                                ashwinjoseph03@gmail.com
                                            </p>
                                        </div>
                                    </Link>

                                    {/* LinkedIn */}
                                    <Link
                                        className="group flex items-center gap-4 rounded-lg p-3 -m-3 transition-colors "
                                        href={personalData?.socialMedia?.linkedin || "#"}
                                        target="_blank"
                                    >
                                        <div className="text-gray-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gray-900 group-hover:bg-[#FF0000] transition-colors">
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                <rect height="12" width="4" x="2" y="9"></rect>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="truncate text-base font-medium text-white">LinkedIn Profile</p>
                                        </div>
                                    </Link>

                                    {/* GitHub */}
                                    <Link
                                        className="group flex items-center gap-4 rounded-lg p-3 -m-3 transition-colors "
                                        href={personalData?.socialMedia?.github || "#"}
                                        target="_blank"
                                    >
                                        <div className="text-gray-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gray-900 group-hover:bg-[#FF0000] transition-colors">
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="truncate text-base font-medium text-white">GitHub Profile</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column: Form */}
                            <div className="flex items-center justify-center lg:items-start">
                                <div className="w-full max-w-lg rounded-xl border border-gray-100/10 bg-black/50 p-6 sm:p-8 backdrop-blur-sm shadow-2xl">
                                    <div className="flex flex-col space-y-6">
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-bold text-white">Send me a message</h3>
                                            <p className="text-gray-400">I&apos;ll get back to you as soon as possible.</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-2">
                                                <label
                                                    className="text-sm font-medium leading-none text-gray-300"
                                                    htmlFor="name"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-[#FF0000]/50 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0000] focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    className="text-sm font-medium leading-none text-gray-300"
                                                    htmlFor="email"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-[#FF0000]/50 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0000] focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all"
                                                    id="email"
                                                    placeholder="you@example.com"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    className="text-sm font-medium leading-none text-gray-300"
                                                    htmlFor="message"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    className="flex min-h-20 w-full rounded-md border border-[#FF0000]/50 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0000] focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all resize-none"
                                                    id="message"
                                                    placeholder="Your message..."
                                                    rows={5}
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    required
                                                ></textarea>
                                            </div>
                                            <button
                                                className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#FF0000] text-white text-sm font-bold leading-normal tracking-[0.015em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0000] focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all  hover:bg-white hover:text-[#ff0000]"
                                                type="submit"
                                            >
                                                <span className="truncate">Send Message</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
