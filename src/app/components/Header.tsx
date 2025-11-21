"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const pathname = usePathname();


    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const navbarMenuItems = [
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Projects",
            href: "/projects",
        },
        {
            name: "Skills",
            href: "/skills",
        },
        {
            name: "Contact",
            href: "/contact",
        },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/10 backdrop-blur-md supports-backdrop-filter:bg-black/50">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* Logo - Z-index ensures it stays above overlay if needed */}
                <Link className="relative z-50 flex items-center gap-2 transition-opacity hover:opacity-80" href="/">
                    <svg
                        width="40px"
                        height="40px"
                        viewBox="-12.8 -12.8 153.60 153.60"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--noto "
                    >
                        <path
                            d="M115.37 117.77L77.78 17.81a2.242 2.242 0 0 0-2.1-1.45H52.32c-.94 0-1.77.58-2.1 1.45l-37.59 99.96c-.26.69-.17 1.46.25 2.06s1.1.97 1.84.97h24.64c.96 0 1.82-.62 2.13-1.54l5.7-17.18H80.8l5.71 17.18c.3.92 1.16 1.54 2.13 1.54h24.64a2.236 2.236 0 0 0 2.09-3.03zm-61.14-36.9L64 51.45l9.77 29.43H54.23z"
                            fill="#ff0000"
                        ></path>
                    </svg>
                    <svg
                        width="40px"
                        height="40px"
                        viewBox="-12.8 -12.8 153.60 153.60"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--noto"
                    >
                        <path
                            d="M100.08 16.44H75.44c-1.24 0-2.24 1-2.24 2.24v45.53c.31 10.84-.18 23.69-1.52 25.89c-.1.13-.2.28-.27.43c-1.6 3.33-6.9 6.78-12.99 6.78c-6.33 0-13.78-5.46-15.94-11.68a2.24 2.24 0 0 0-2.79-1.41l-20.47 6.41c-1.06.33-1.7 1.38-1.53 2.48c.01.07.03.14.04.2c2.32 17.58 18.94 29.38 41.46 29.38c22.53 0 39.16-11.81 41.48-29.4c.02-.1.04-.19.05-.29c1.56-15.02 1.58-28.71 1.58-28.85V18.68c.02-1.23-.98-2.24-2.22-2.24z"
                            fill="#ff0000"
                        ></path>
                    </svg>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex lg:gap-12">
                    {navbarMenuItems.map((item, index) => {
                        const isActive = pathname === item.href; 
                        return (
                            <Link
                                key={index}
                                className={`text-sm font-medium transition-colors ${
                                    isActive 
                                    ? "text-[#ff0000]"
                                    : "text-zinc-400 hover:text-[#ff0000]"
                                }`}
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <button className="flex h-10 px-6 cursor-pointer items-center justify-center rounded-lg bg-[#ff0000] text-white text-sm font-bold tracking-wide hover:bg-white hover:text-[#ff0000] transition-colors active:scale-95">
                        Resume
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-zinc-800 md:hidden"
                    aria-label="Toggle Menu"
                >
                    <span className="flex items-center justify-center">
                        {isMobileMenuOpen ? (
                            <svg
                                className="h-9 w-9 text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 18 15" className="h-8 w-8 text-white" fill="currentColor">
                                <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z" />
                                <path d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z" />
                                <path d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z" />
                            </svg>
                        )}
                    </span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 flex h-dvh w-full flex-col items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
                    isMobileMenuOpen ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"
                }`}
                // Prevent clicks on the overlay from bubbling up awkwardly
                onClick={(e) => e.stopPropagation()}
            >
                <nav className="flex flex-col items-center gap-8 text-center">
                    {navbarMenuItems.map((item, index) => {
                         const isActive = pathname === item.href;
                         console.log(isActive);
                         
                         return (
                            <Link
                                key={index}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-3xl font-bold transition-colors ${
                                    isActive 
                                    ? "text-[#ff0000]" 
                                    : "text-zinc-400 hover:text-[#ff0000]"
                                }`}
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        );
})}
                    <button className="flex h-10 px-6 cursor-pointer items-center justify-center rounded-lg bg-[#ff0000] text-white text-sm font-bold tracking-wide hover:bg-white hover:text-[#ff0000]  transition-colors active:scale-95">
                        Resume
                    </button>
                </nav>
            </div>
        </header>
    );
}
