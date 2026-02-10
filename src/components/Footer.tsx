import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t bg-muted/50">
            <div className="container py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Logo and Info */}
                    <div className="flex flex-col items-center">
                        <Image
                            src="/analogo.png"
                            alt="Odak Patoloji Logo"
                            width={160}
                            height={48}
                            className="h-12 w-auto mb-2"
                        />
                        <p className="text-sm text-muted-foreground">
                            Salihli<br />
                            Patoloji ve Sitoloji Laboratuarı
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center">
                        <h3 className="font-semibold mb-3 text-[#7a1f2b]">İletişim</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>
                                <a href="tel:02367147283" className="hover:text-[#7a1f2b] transition-colors">
                                    📞 0 236 714 72 83
                                </a>
                            </p>
                            <p>
                                <a href="mailto:odak.patoloji@hotmail.com" className="hover:text-[#7a1f2b] transition-colors">
                                    ✉️ odak.patoloji@hotmail.com
                                </a>
                            </p>
                            <p>
                                <a href="https://maps.app.goo.gl/27gA3Yadhv3GZG1w9" target="_blank" rel="noopener noreferrer" className="hover:text-[#7a1f2b] transition-colors">
                                    📍 18. Sk. No:11 D:3 Mithatpaşa
                                </a>
                            </p>
                            <p>Salihli / Manisa</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center">
                        <h3 className="font-semibold mb-3 text-[#7a1f2b]">Hızlı Linkler</h3>
                        <div className="space-y-2 text-sm">
                            <a href="/hakkimizda" className="block text-muted-foreground hover:text-[#7a1f2b]">
                                Hakkımızda
                            </a>
                            <a href="/testlerimiz" className="block text-muted-foreground hover:text-[#7a1f2b]">
                                Testlerimiz
                            </a>
                            <a href="/iletisim" className="block text-muted-foreground hover:text-[#7a1f2b]">
                                İletişim
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>Copyright © {new Date().getFullYear()} Odak Patoloji</p>
                </div>
            </div>
        </footer>
    );
}
