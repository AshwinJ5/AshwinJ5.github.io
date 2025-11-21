"use client";
import Image from "next/image";
import Header from "./Header";
import Particles from "./Particles";
import Footer from "./Footer";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { personalData, skills } from "../datas";

const LandingPage = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            description:
                "A full-featured e-commerce site with product management, user authentication, and a Stripe payment gateway.",
            tags: ["React", "Node.js", "MongoDB"],
            image: "/portfolio.png",
            link: "#",
        },
        {
            title: "ConnectSphere",
            description:
                "A social app allowing users to post updates, follow others, and engage with content in real-time using WebSockets.",
            tags: ["React", "Express", "Socket.IO"],
            image: "/portfolio.png",
            link: "#",
        },
        {
            title: "TaskFlow",
            description:
                "A Kanban-style task board with drag-and-drop functionality for managing projects and workflows efficiently.",
            tags: ["Next.js", "Tailwind", "Redux"],
            image: "/portfolio.png",
            link: "#",
        },
    ];

    return (
        <div className={`font-sans bg-black text-white selection:bg-[#ff0000] selection:text-white`}>
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
                <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden py-16 lg:py-24">
                    {/* Particles Background */}
                    <div className="absolute inset-0 z-0 w-full h-full ">
                        <Particles
                            particleColors={["#ff0000", "#ff0000"]}
                            particleCount={1000}
                            particleSpread={20}
                            speed={0.5}
                            particleBaseSize={100}
                            moveParticlesOnHover={true}
                            alphaParticles={false}
                            disableRotation={false}
                            className="w-full h-full"
                        />
                    </div>

                    {/* Main Content */}
                    <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 pointer-events-none">
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                            <h1 className="mb-6 text-4xl font-black uppercase leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                MERN STACK <br />
                                <span className="text-[#ff0000]">DEVELOPER</span>
                            </h1>

                            <p className="mb-8 max-w-xl text-base font-light leading-relaxed text-zinc-400 sm:text-lg md:text-xl">
                                Hello, I&apos;m Ashwin Joseph. A developer crafting scalable & performant web applications.
                                I turn complex problems into elegant, user-friendly solutions.
                            </p>

                            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center pointer-events-auto">
                                <Link
                                    className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#ff0000] px-8 text-base font-bold text-white transition-all hover:bg-white hover:text-[#ff0000] sm:w-auto"
                                    href="/projects"
                                >
                                    <span>Explore Projects</span>
                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                                        <svg
                                            className="w-10 h-10  "
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.1"
                                                d="M19 12H5m14 0-4 4m4-4-4-4"
                                            />
                                        </svg>
                                    </span>
                                </Link>

                                {/* Social Icons */}
                                <div className="flex items-center justify-center gap-4 sm:justify-start">
                                    {[
                                        {
                                            path: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.491.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z",
                                            label: "Github",
                                            url: personalData?.socialMedia?.github || "#",
                                        },
                                        {
                                            path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                                            label: "LinkedIn",
                                            url: personalData?.socialMedia?.linkedin || "#",
                                        },
                                        {
                                            path: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z",
                                            label: "Mail",
                                            url: `mailto:${personalData?.email}` || "#",
                                        },
                                    ].map((icon, idx) => (
                                        <Link
                                            key={idx}
                                            className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all hover:border-[#ff0000] hover:bg-[#ff0000] hover:text-white"
                                            href={icon.url}
                                            target="_blank"
                                            aria-label={icon.label}
                                        >
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d={icon.path} clipRule="evenodd" fillRule="evenodd" />
                                            </svg>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="relative w-full py-16 sm:py-20 lg:py-32" id="about">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-20 lg:px-8">
                        {/* Text Content (Order 2 on Mobile means Image comes first, flip logic if you want text first) */}
                        <div className="order-2 md:order-1">
                            <h2 className="mb-6 text-3xl font-black uppercase leading-tight tracking-tighter sm:text-4xl md:text-5xl">
                                ABOUT <span className="text-[#ff0000]">ME</span>
                            </h2>
                            <p className="mb-6 text-base font-normal leading-relaxed text-zinc-400 sm:text-lg">
                                With a passion for building beautiful and functional web applications, I have dedicated
                                myself to mastering the MERN stack (MongoDB, Express.js, React, Node.js).
                            </p>
                            <p className="text-base font-normal leading-relaxed text-zinc-400 sm:text-lg">
                                My journey in software development is driven by a desire to solve complex problems with
                                clean, efficient code. I thrive in collaborative environments and am always eager to learn
                                new technologies.
                            </p>
                        </div>
                        {/* Image Content */}
                        <div className="order-1 flex justify-center md:order-2">
                            <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
                                <Image
                                    width={500}
                                    height={500}
                                    alt="Developer portrait"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    src="/portfolio.png"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="relative w-full py-16 sm:py-20 lg:py-32" id="projects">
                    {/* Background decoration */}
                    <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-[#ff0000]/10 blur-[100px]"></div>

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center sm:mb-16">
                            <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter sm:text-4xl md:text-5xl">
                                FEATURED <span className="text-[#ff0000]">PROJECTS</span>
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
                                A selection of my best work, showcasing my skills in the MERN stack.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all hover:-translate-y-1 hover:border-[#ff0000] hover:shadow-xl hover:shadow-[#ff0000]/10 cursor-default"
                                >
                                    <div className="aspect-video w-full overflow-hidden">
                                        <Image
                                            width={500}
                                            height={500}
                                            alt={project.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            src={project.image}
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                                        <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
                                                {project.tags.map((tag, tagIndex) => (
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
                                                href={project.link}
                                                target="_blank"
                                            >
                                                Demo →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="w-full border-y border-zinc-900 bg-zinc-950/50 py-16 lg:py-24" id="skills">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter sm:text-4xl md:text-5xl">
                                TECHNICAL <span className="text-[#ff0000]">SKILLS</span>
                            </h2>
                            <p className="mt-4 text-base text-zinc-400 sm:text-lg">
                                The tools and technologies I use to build modern web applications.
                            </p>
                        </div>

                        {/* Grid adapts from 2 cols (mobile) to 3 (sm) to 4 (md) to 6 (lg) */}
                        {/* <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="group flex flex-col items-center gap-3 p-4 transition-all hover:scale-110"
                                >
                                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-zinc-900 p-4 shadow-sm transition-shadow group-hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]">
                                        <Image
                                            width={500}
                                            height={500}
                                            alt={skill.name}
                                            className="h-full w-full object-contain"
                                            src={skill.Image}
                                        />
                                    </div>
                                    <span className="font-medium text-zinc-300 group-hover:text-[#ff0000]">{skill.name}</span>
                                </div>
                            ))}
                        </div> */}

                        {/* <div className=""> */}
                        <Marquee
                            autoFill
                            speed={150}
                            pauseOnHover
                            gradient={true}
                            gradientColor="#000000"
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
                        {/* </div> */}
                    </div>
                </section>

                {/* Contact Section */}
                <section className="relative w-full py-16 sm:py-20 lg:py-32" id="contact">
                    <div className="absolute -left-10 top-0 -z-10 h-48 w-48 rounded-full bg-[#ff0000]/20 blur-[80px] filter"></div>
                    <div className="absolute -bottom-10 -right-10 -z-10 h-48 w-48 rounded-full bg-[#ff0000]/20 blur-[80px] filter"></div>

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter sm:text-4xl md:text-5xl">
                                GET IN <span className="text-[#ff0000]">TOUCH</span>
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
                                Have a project in mind or just want to say hi? Feel free to reach out.
                            </p>
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
