// "use client";

// import Image from "next/image";

// const skills = [
//     { name: "JavaScript", Image: "/portfolio.png" },
//     { name: "React", Image: "/portfolio.png" },
//     { name: "Node.js", Image: "/portfolio.png" },
//     { name: "MongoDB", Image: "/portfolio.png" },
//     { name: "Express.js", Image: "/portfolio.png" },
//     { name: "Next.js", Image: "/portfolio.png" },
// ];

// export default function SkillsMarquee() {
//     return (
//         <section className="w-full py-10">
//             {/* Custom CSS for the marquee animation */}
//             <style jsx>{`
//                 @keyframes scroll {
//                     0% {
//                         transform: translateX(0);
//                     }
//                     100% {
//                         transform: translateX(-50%);
//                     }
//                 }
//                 .animate-scroll {
//                     animation: scroll 20s linear infinite;
//                 }
//                 /* Pause animation on hover */
//                 .group:hover .animate-scroll {
//                     animation-play-state: paused;
//                 }
//             `}</style>

//             <div className="relative flex flex-col justify-center overflow-hidden">
//                 {/* Gradient Masks to fade edges */}
//                 {/* Note: Fixed 'bg-linear-to-r' to 'bg-gradient-to-r' for standard Tailwind compatibility */}
//                 <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#000000b0] from-5% via-transparent via-50% to-[#000000b0] to-95%"></div>

//                 {/* Marquee Container */}
//                 <div className="group flex w-full overflow-hidden">
//                     {/* Inner Track */}
//                     {/* We use w-max to ensure the width is calculated based on content, not screen size */}
//                     <div className="flex w-max animate-scroll gap-8 px-4 sm:gap-16">
                        
//                         {/* --- SET 1 --- */}
//                         {skills.map((skill, index) => (
//                             <SkillCard key={`set1-${index}`} skill={skill} />
//                         ))}

//                         {/* --- SET 2 (Duplicate required for the loop effect) --- */}
//                         {skills.map((skill, index) => (
//                             <SkillCard key={`set2-${index}`} skill={skill} />
//                         ))}

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// // Extracted Card Component for cleaner code
// function SkillCard({ skill }: { skill: { name: string; Image: string } }) {
//     return (
//         <div className="flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110 cursor-pointer">
//             <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-zinc-900 p-4 shadow-sm transition-shadow hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] border border-zinc-800">
//                 <Image
//                     width={500}
//                     height={500}
//                     alt={skill.name}
//                     className="h-full w-full object-contain"
//                     src={skill.Image}
//                 />
//             </div>
//             <span className="whitespace-nowrap font-medium text-zinc-300">{skill.name}</span>
//         </div>
//     );
// }