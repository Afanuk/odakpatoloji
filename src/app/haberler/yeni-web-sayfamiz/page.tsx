import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function YeniWebSayfaPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/HaberPage.png"
                        alt="Haberler"
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'top' }}
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 container text-center pb-8 mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#7a1f2b] mb-4">
                        Yeni Web Sayfamız Yayında
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        7 Şubat 2026
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg leading-relaxed mb-6">
                            Modern ve kullanıcı dostu yeni web sitemiz hizmete girdi. Odak Patoloji olarak,
                            hastalarımıza daha iyi hizmet verebilmek için web sitemizi tamamen yeniledik.
                        </p>

                        <h2 className="text-2xl font-bold text-[#7a1f2b] mt-8 mb-4">
                            Yeni Özellikler
                        </h2>

                        <ul className="list-disc list-inside space-y-2 mb-6">
                            <li>Mobil uyumlu responsive tasarım</li>
                            <li>Hızlı ve kullanıcı dostu arayüz</li>
                            <li>Kolay erişilebilir test bilgileri</li>
                            <li>Online iletişim formu</li>
                            <li>Güncel haberler ve duyurular</li>
                        </ul>

                        <p className="text-lg leading-relaxed mb-6">
                            Yeni web sitemizde testlerimiz, cihazlarımız ve ekibimiz hakkında detaylı bilgilere
                            kolayca ulaşabilirsiniz. Ayrıca iletişim sayfamızdan bize doğrudan ulaşabilir,
                            sorularınızı iletebilirsiniz.
                        </p>

                        <h2 className="text-2xl font-bold text-[#7a1f2b] mt-8 mb-4">
                            Teknoloji ve Kalite
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            Web sitemiz en güncel teknolojiler kullanılarak geliştirilmiştir. Hızlı yükleme
                            süreleri, güvenli bağlantı ve kullanıcı dostu tasarımıyla sizlere en iyi deneyimi
                            sunmayı hedefliyoruz.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            1998'den beri Manisa bölgesinin güvenilir patoloji merkezi olarak hizmet veren
                            Odak Patoloji, dijital dönüşümde de öncü olmaya devam ediyor.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t">
                        <Link href="/">
                            <Button variant="outline" className="text-[#7a1f2b] border-[#7a1f2b] hover:bg-[#7a1f2b] hover:text-white">
                                ← Ana Sayfaya Dön
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
