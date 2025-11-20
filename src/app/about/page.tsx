"use client";

import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Initialize Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Data for Skills
const skills = [
  "MongoDB", "Express.js", "React", "Node.js", "Next.js",
  "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Shadcn UI"
];

// Data for Experience
const experiences = [
  {
    title: "Senior MERN Stack Developer",
    company: "Innovatech Solutions | Jan 2021 - Present",
    points: [
      "Led the development of a scalable e-commerce platform using Next.js and a Node.js backend, improving performance by 30%.",
      "Architected and implemented a new RESTful API service with Express.js and MongoDB, handling over 1 million daily requests.",
      "Mentored junior developers and conducted code reviews to maintain high-quality code standards."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "CodeCrafters Inc. | Jun 2018 - Dec 2020",
    points: [
      "Developed and maintained client-facing web applications using the MERN stack.",
      "Collaborated with designers to create responsive and accessible user interfaces with React and CSS-in-JS.",
      "Integrated third-party APIs for payment processing and data analytics."
    ]
  }
];

export default function AboutMe() {

  return (
    <div className={`${inter.variable} font-sans bg-black text-slate-200 selection:bg-[#ff0000] selection:text-white`}>
      {/* Load Material Symbols Font */}
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      
      <style jsx global>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      

<Header/>
        <div className="flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5 sm:px-6 lg:px-8">
            <div className="flex w-full max-w-4xl flex-col px-4">
              



              <main className="flex flex-col gap-24">
                
                {/* Hero / Intro */}
                <section className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12">
                  <div 
                    className="h-40 w-40 shrink-0 rounded-full border-4 border-[#ff0000] bg-cover bg-center bg-no-repeat shadow-xl shadow-[#ff0000]/20" 
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAk97XUWvUlPKmZlAjwW9Pfaf5MpYyTMV-xe3TU4-24khfYbUsNBs_iHpA5osnJuC3-ToAz0SMrsbYNPUidHEQkvir7orMTfjheJicm3Lx1i9QSdVSmzqWX1PZ6rJYtwxS4XZSSSvSfjGwT7Dep9O85i86rJ2GgZkDcl-468MYoksaar75Lbm02YuuxM5yDq0PHlVoJ93P-6wxmPFVu6X8iBYHf6qzmQAqLiYMLbLcDaHAa78dfBgbCc3mdqaJIf15_b296qS4cT4g")' }}
                    aria-label="Professional headshot of Ashwin Joseph"
                  ></div>
                  <div className="flex flex-col gap-4 text-center md:text-left">
                    <h1 className="text-5xl font-black tracking-tighter text-slate-50">About <span className="text-[#ff0000]">Me</span></h1>
                    <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
                      I&apos;m a passionate MERN stack developer, specializing in creating modern, responsive, and user-friendly web applications. I thrive on solving complex problems and turning ideas into reality with clean and efficient code.
                    </p>
                    <div className="mt-2 flex justify-center gap-4 md:justify-start">
                      <button className="flex h-10 items-center justify-center rounded-lg bg-[#ff0000] px-5 text-sm font-bold leading-normal tracking-wide text-white hover:bg-red-700 transition-colors shadow-lg shadow-[#ff0000]/20">
                        <span className="truncate">View My Projects</span>
                      </button>
                      <button className="flex h-10 items-center justify-center rounded-lg border border-slate-700 bg-transparent px-5 text-sm font-bold leading-normal tracking-wide text-slate-200 hover:bg-slate-800 transition-colors">
                        <span className="truncate">Download CV</span>
                      </button>
                    </div>
                  </div>
                </section>

                {/* Core Competencies */}
                <section>
                  <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-50">Core <span className="text-[#ff0000]">Competencies</span></h2>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <div key={skill} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg border border-slate-800 bg-slate-900 px-4 transition-colors hover:border-[#ff0000] cursor-default">
                        <p className="text-sm font-medium text-slate-300">{skill}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Professional Experience */}
                <section>
                  <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-50">Professional <span className="text-[#ff0000]">Experience</span></h2>
                  <div className="relative pl-10">
                    {/* Vertical Line */}
                    <div className="absolute left-[18px] top-0 h-full w-px bg-[#ff0000]/50"></div>
                    
                    <div className="relative space-y-12">
                      {experiences.map((job, index) => (
                        <div key={index} className="relative group">
                          {/* Icon Circle */}
                          <div className="absolute -left-10 top-0 flex size-9 items-center justify-center rounded-full border border-[#ff0000] bg-black shadow-md shadow-[#ff0000]/10 group-hover:shadow-[#ff0000]/40 transition-shadow">
                            <span className="material-symbols-outlined text-[#ff0000] text-lg">apartment</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-slate-50">{job.title}</h3>
                            <p className="text-sm text-slate-400">{job.company}</p>
                            <ul className="ml-4 mt-3 list-disc space-y-2 text-slate-400 marker:text-[#ff0000]">
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
                  <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-50"><span className="text-[#ff0000]">Education</span></h2>
                  <div className="flex items-start gap-6 group">
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-[#ff0000] bg-black shadow-md shadow-[#ff0000]/10 group-hover:shadow-[#ff0000]/40 transition-shadow">
                      <span className="material-symbols-outlined text-[#ff0000] text-lg">school</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-50">Bachelor of Science in Computer Science</h3>
                      <p className="text-sm text-slate-400">State University | Graduated May 2018</p>
                      <p className="mt-2 text-slate-400">Focused on software engineering principles, database management, and web development technologies.</p>
                    </div>
                  </div>
                </section>

              </main>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  );
}