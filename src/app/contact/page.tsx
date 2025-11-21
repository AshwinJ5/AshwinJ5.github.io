"use client";

import React, { useState } from "react";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { personalData } from "../datas";
import Container from "../components/Container";
import { motion } from "framer-motion";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-space-grotesk",
});

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Message sent! (This is a demo)");
    };

    return (
        <div
            className={`${spaceGrotesk.variable} font-sans bg-[#0E1111] text-gray-50 min-h-screen flex flex-col selection:bg-[#FF0000] selection:text-white`}
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

            <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
                <div className="absolute top-0 -left-48 h-160 w-160 bg-red-900/40 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
                <div className="absolute bottom-0 -right-48 h-160 w-160 bg-red-900/30 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

                <main className="flex-1 z-10">
                    <Container>
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 py-16 md:py-24 lg:py-32">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex flex-col justify-center space-y-8"
                            >
                                <div className="space-y-4">
                                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight">
                                        Let&apos;s <span className="text-[#ff0000]">Connect</span>
                                    </h1>
                                    <p className="text-gray-400 text-lg max-w-md">
                                        Feel free to reach out for collaborations, job opportunities, or just to say hello!
                                    </p>
                                </div>

                                <div className="flex flex-col gap-5">
                                    {[
                                        { label: personalData?.email, icon: "mail", link: `mailto:${personalData?.email}` },
                                        {
                                            label: "LinkedIn",
                                            icon: (
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                    <rect width="4" height="12" x="2" y="9"></rect>
                                                    <circle cx="4" cy="4" r="2"></circle>
                                                </svg>
                                            ),
                                            link: personalData?.socialMedia?.linkedin,
                                        },
                                        {
                                            label: "GitHub",
                                            icon: (
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5-.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a11.42 11.42 0 0 0-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65A4.98 4.98 0 0 0 9 18v4"></path>
                                                </svg>
                                            ),
                                            link: personalData?.socialMedia?.github,
                                        },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 * i, duration: 0.5 }}
                                        >
                                            <Link
                                                className="group flex items-center gap-4 rounded-lg p-3 transition-colors"
                                                href={item.link || "#"}
                                                target="_blank"
                                            >
                                                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 group-hover:bg-[#FF0000] transition-colors">
                                                    <span className="material-symbols-outlined">{item.icon}</span>
                                                </div>
                                                <p className="truncate font-medium">{item.label}</p>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                className="flex items-center justify-center lg:items-start"
                            >
                                <div className="w-full max-w-lg rounded-xl border border-gray-100/10 bg-black/50 p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <h3 className="text-3xl font-bold mb-2">Send me a message</h3>

                                        {["name", "email", "message"].map((field, i) => (
                                            <motion.div
                                                key={field}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * i + 0.3 }}
                                            >
                                                <label className="text-sm font-medium">
                                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                                </label>
                                                {field === "message" ? (
                                                    <textarea
                                                        id={field}
                                                        rows={5}
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        className="w-full rounded-md border border-[#FF0000]/50 bg-black/50 px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-[#FF0000]"
                                                        required
                                                    />
                                                ) : (
                                                    <input
                                                        id={field}
                                                        type={field === "email" ? "email" : "text"}
                                                        value={formData[field as "name" | "email"]}
                                                        onChange={handleInputChange}
                                                        className="w-full rounded-md border border-[#FF0000]/50 bg-black/50 px-3 py-2 text-sm focus:ring-2 focus:ring-[#FF0000]"
                                                        required
                                                    />
                                                )}
                                            </motion.div>
                                        ))}

                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.95 }}
                                            type="submit"
                                            className="w-full rounded-lg bg-[#FF0000] px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-[#ff0000]"
                                        >
                                            Send Message
                                        </motion.button>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </main>

                <Footer />
            </div>
        </div>
    );
}
