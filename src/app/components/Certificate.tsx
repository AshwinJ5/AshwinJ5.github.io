import Image from "next/image";
import { certificateData } from "../datas";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const Certificate = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 15 },
        },
    };

    return (
        <section>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold leading-tight mb-8 sm:mb-12 border-l-4 border-[#ff0000] pl-4 text-slate-200"
            >
                Certifications
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
                {certificateData.map((cert, index) => (
                    <motion.div key={index} variants={cardVariants} whileHover={{ y: -4 }} className="h-full">
                        <Link
                            href={cert.certificate_url || "#"}
                            target="_blank"
                            className="group flex flex-col h-full rounded-xl border border-[#222222] bg-zinc-950/50 overflow-hidden transition-all duration-300 hover:border-[#ff0000]/50 hover:shadow-[0_0_30px_rgba(255,0,0,0.1)]"
                        >
                            <div className="relative w-full h-48 bg-white overflow-hidden">
                                <Image
                                    width={400}
                                    height={300}
                                    alt={`${cert.title} Certificate Preview`}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                    src={cert.image}
                                />
                            </div>

                            <div className="p-6 flex flex-col grow border-t border-[#222222]">
                                <h3 className="text-lg font-bold text-slate-200 group-hover:text-[#ff0000] transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-gray-400 mt-1 text-sm font-medium">{cert.issuer}</p>
                                <p className="text-xs text-gray-500 mt-auto pt-4">Issued: {cert.date}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Certificate;
