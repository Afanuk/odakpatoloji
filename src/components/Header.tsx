"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Poll scroll position every 100ms
        const interval = setInterval(() => {
            const scrollTop = Math.max(
                window.scrollY || window.pageYOffset,
                document.documentElement.scrollTop,
                document.body.scrollTop
            );
            setIsScrolled(scrollTop > 50);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { href: "/", label: "Ana Sayfa" },
        { href: "/hakkimizda", label: "Hakkımızda" },
        { href: "/testlerimiz", label: "Testlerimiz" },
        { href: "/cihazlarimiz", label: "Cihazlarımız" },
        { href: "/salihlimiz", label: "Salihlimiz" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "pt-4" : "pt-8"}`}
            >
                <div className={`container mx-auto px-4 transition-all duration-500 ${isScrolled ? "backdrop-blur-xl bg-white/70 rounded-2xl py-2" : ""}`}>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/analogo.png"
                                alt="Odak Patoloji Logo"
                                width={180}
                                height={54}
                                priority
                                className="h-10 md:h-14 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center bg-white shadow-[0_0_30px_0_rgba(0,0,0,0.08)] rounded-full px-2 py-2 border border-slate-100/50">
                            <ul className="flex items-center gap-1">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#7a1f2b] rounded-full transition-all duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Desktop CTA Button */}
                        <Link href="/iletisim">
                            <Button className="hidden lg:inline-flex bg-[#7a1f2b] hover:bg-[#5a1520] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                İletişim
                            </Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-[#7a1f2b]"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Menü"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold text-[#7a1f2b]">Menü</h2>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-gray-500 hover:text-[#7a1f2b]"
                            aria-label="Kapat"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="block px-4 py-3 text-gray-700 hover:bg-[#7a1f2b]/10 hover:text-[#7a1f2b] rounded-lg transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4">
                                <Link
                                    href="/iletisim"
                                    className="block px-4 py-3 bg-[#7a1f2b] text-white text-center rounded-lg hover:bg-[#5a1520] transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    İletişim
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
