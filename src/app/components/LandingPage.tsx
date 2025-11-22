"use client";
import Image from "next/image";
import Header from "./Header";
import Particles from "./Particles";
import Footer from "./Footer";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { personalData, skills, projects } from "../datas";
import { motion } from "framer-motion";

const LandingPage = () => {
    // Fixed variants with proper TypeScript types
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
            },
        },
    };

    const stagger = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const skillCards = [
        {
            icon: "lan",
            title: "Full-Stack Solutions",
            description:
                "Integrating databases like MongoDB and PostgreSQL to deliver complete, scalable MERN stack applications.",
        },
        {
            icon: "database",
            title: "Backend Development",
            description:
                "Building robust server-side applications and APIs with Node.js, Express, and ensuring secure data handling.",
        },
        {
            icon: "code",
            title: "Frontend Development",
            description:
                "Crafting responsive and dynamic user interfaces with React, Next.js, and modern CSS frameworks like Tailwind.",
        },
    ];

    return (
        <div className={`font-sans bg-[#0E1111] text-white selection:bg-[#ff0000] selection:text-white`}>
            {/* Global Styles for specific elements */}
            <style jsx global>{`
                .material-symbols-outlined {
                    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
                }
                .font-display {
                    font-family: var(--font-space-grotesk), sans-serif;
                }
            `}</style>

            <Header />
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-display">
                {/* Navbar */}

                {/* Hero Section */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="relative flex min-h-[calc(100vh-80px)] items-center justify-center py-16 lg:py-24 overflow-hidden"
                >
                    {" "}
                    {/* Particles Background */}
                    <div className="absolute inset-0 z-0 w-full h-full ">
                        <Particles
                            particleColors={["#ff0000", "#ff0000"]}
                            particleCount={7500}
                            particleSpread={25}
                            speed={0.5}
                            particleBaseSize={100}
                            moveParticlesOnHover={true}
                            alphaParticles={false}
                            disableRotation={false}
                            className="w-full h-full"
                        />
                    </div>
                    {/* Main Content */}
                    <div className="relative z-10 container grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 pointer-events-none">
                        <motion.div variants={stagger} className="text-center lg:text-left">
                            <motion.h1
                                variants={fadeUp}
                                className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight"
                            >
                                MERN STACK <br />
                                <span className="text-[#ff0000]">DEVELOPER</span>
                            </motion.h1>

                            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-zinc-400 sm:text-lg">
                                {
                                    "Hello, I'm Ashwin Joseph — a developer focused on crafting scalable and high-performance web applications."
                                }
                            </motion.p>

                            <motion.div variants={fadeUp} className="mt-8 flex gap-4 pointer-events-auto">
                                <div>
                                    <Link
                                        href="/projects"
                                        className="flex h-12 items-center justify-center rounded-full bg-[#ff0000] px-4 font-bold hover:bg-white hover:text-[#ff0000]"
                                    >
                                        Explore Projects
                                    </Link>
                                </div>
                                <div className="flex gap-4">
                                    {[
                                        personalData?.socialMedia?.github,
                                        personalData?.socialMedia?.linkedin,
                                        `mailto:${personalData?.email}`,
                                    ].map((link, i) => (
                                        <motion.div key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                            <Link
                                                href={link || "#"}
                                                target="_blank"
                                                className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-[#ff0000] hover:text-white"
                                            >
                                                <span className="material-symbols-outlined">
                                                    {i === 0 ? "code" : i === 1 ? "groups" : "mail"}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* About Section */}
                <section className="relative w-full py-16 sm:py-20 lg:py-32" id="about">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-20 lg:px-8">
                        {/* Text Content */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="mb-6 text-3xl font-black uppercase leading-tight tracking-tighter sm:text-4xl md:text-5xl">
                                ABOUT <span className="text-[#ff0000]">ME</span>
                            </h2>
                            <p className="mb-6 text-base font-normal leading-relaxed text-zinc-400 sm:text-lg">
                                {
                                    "I'm a MERN stack developer with a strong focus on building high-performance and visually engaging web applications. I enjoy turning ideas into intuitive digital experiences using clean architecture and scalable code."
                                }
                            </p>
                            <p className="text-base font-normal leading-relaxed text-zinc-400 sm:text-lg">
                                {
                                    "With a curious mindset and a love for problem-solving, I thrive in collaborative environments and constantly explore new technologies to stay ahead. I'm always excited to take on challenges that push me to innovate and build better products."
                                }
                            </p>
                        </motion.div>
                        {/* Image Content */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
                                <Image
                                    width={500}
                                    height={500}
                                    alt="Developer portrait"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    src={personalData?.profileImageUrl || "/ashwin.jpg"}
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-16 md:py-24 w-full relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="skills">
                    <div className="flex flex-col gap-10 @container">
                        <div className="flex flex-col gap-4">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="text-4xl font-bold"
                            >
                                WHAT I <span className="text-[#ff0000]">DO</span>
                            </motion.h2>
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="text-gray-400 text-base font-normal leading-relaxed max-w-[720px]"
                            >
                                {
                                    "From front-end interfaces to back-end logic, I create seamless digital experiences.Here's a look at my main areas of expertise."
                                }
                            </motion.p>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                        >
                            {skillCards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="flex flex-1 gap-4 rounded-xl border border-gray-800 p-6 flex-col shadow-sm transition-transform hover:-translate-y-1 hover:border-[#FF0000]/50"
                                >
                                    <div className="text-[#FF0000]">
                                        <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-white text-lg font-bold leading-tight">{card.title}</h3>
                                        <p className="text-gray-400 text-sm font-normal leading-normal">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="relative w-full py-16 sm:py-20 lg:py-32" id="projects">
                    {/* Background decoration */}
                    <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-[#ff0000]/10 blur-[100px]"></div>

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center sm:mb-16">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="text-3xl font-black uppercase leading-tight tracking-tighter sm:text-4xl md:text-5xl"
                            >
                                FEATURED <span className="text-[#ff0000]">PROJECTS</span>
                            </motion.h2>
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg"
                            >
                                A selection of my best work, showcasing my skills in the MERN stack.
                            </motion.p>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10"
                        >
                            {projects.slice(0, 3).map((project, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all hover:-translate-y-1 hover:border-[#ff0000] hover:shadow-xl hover:shadow-[#ff0000]/10 cursor-default"
                                >
                                    <div className="aspect-video w-full overflow-hidden">
                                        <Image
                                            width={300}
                                            height={300}
                                            alt={project.title}
                                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                            src={project.image_url}
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                                        <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400 line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
                                                {project.tech.slice(0, 3).map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="rounded-full bg-zinc-800 px-2.5 py-1 font-medium hover:bg-[#ff0000] hover:text-white transition-colors text-center"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <Link
                                                className="text-sm font-bold text-[#ff0000] hover:underline"
                                                href={project.demoLink}
                                                target="_blank"
                                            >
                                                Demo →
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="w-full border-y border-zinc-900 bg-zinc-950/50 py-16 lg:py-24" id="skills">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="text-3xl font-black uppercase leading-tight tracking-tighter sm:text-4xl md:text-5xl"
                            >
                                TECHNICAL <span className="text-[#ff0000]">SKILLS</span>
                            </motion.h2>
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="mt-4 text-base text-zinc-400 sm:text-lg"
                            >
                                The tools and technologies I use to build modern web applications.
                            </motion.p>
                        </div>

                        <Marquee
                            autoFill
                            speed={150}
                            pauseOnHover
                            gradient={true}
                            gradientColor="#0E1111"
                            gradientWidth={50}
                        >
                            {skills.length > 0 ? (
                                skills.map((images, index) => (
                                    <div
                                        className="w-15 bg-[#ffffff7f] hover:bg-[#ff0000] rounded sm:w-24 md:w-24 lg:w-24  h-15 sm:h-20 md:h-20 lg:h-20 sm:mx-3 md:mx-[18px] lg:mx-[21px] xl:mx-[25px] mx-[7.5px]"
                                        key={index}
                                    >
                                        <Link href={images.url || "#"} target="_blank">
                                            <Image
                                                width={200}
                                                height={200}
                                                className=" h-full  mx-auto"
                                                src={images.image_url}
                                                alt={`Client ${index + 1}`}
                                            />
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center mx-6">No clients available</p>
                            )}
                        </Marquee>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="relative w-full py-16 sm:py-20 lg:py-32" id="contact">
                    <div className="absolute -left-10 top-0 -z-10 h-48 w-48 rounded-full bg-[#ff0000]/20 blur-[80px] filter"></div>
                    <div className="absolute -bottom-10 -right-10 -z-10 h-48 w-48 rounded-full bg-[#ff0000]/20 blur-[80px] filter"></div>

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="text-3xl font-black uppercase leading-tight tracking-tighter sm:text-4xl md:text-5xl"
                            >
                                GET IN <span className="text-[#ff0000]">TOUCH</span>
                            </motion.h2>
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg"
                            >
                                Have a project in mind or just want to say hi? Feel free to reach out.
                            </motion.p>
                        </div>

                        <div className="mx-auto mt-12 max-w-xl">
                            <form className="space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-zinc-300" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="block w-full rounded-lg border-zinc-700 bg-zinc-900/80 px-4 py-3 text-white placeholder-zinc-500 shadow-sm backdrop-blur-sm focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] sm:text-sm"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-zinc-300" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="block w-full rounded-lg border-zinc-700 bg-zinc-900/80 px-4 py-3 text-white placeholder-zinc-500 shadow-sm backdrop-blur-sm focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] sm:text-sm"
                                        id="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-zinc-300" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        className="block w-full rounded-lg border-zinc-700 bg-zinc-900/80 px-4 py-3 text-white placeholder-zinc-500 shadow-sm backdrop-blur-sm focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] sm:text-sm resize-none"
                                        id="message"
                                        name="message"
                                        placeholder="Your message..."
                                        rows={4}
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        className="w-full transform rounded-full bg-[#ff0000] px-8 py-4 text-base font-bold tracking-wide text-white transition-all hover:bg-white hover:text-[#ff0000] hover:shadow-lg active:scale-95 sm:w-auto cursor-pointer"
                                        type="submit"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default LandingPage;
