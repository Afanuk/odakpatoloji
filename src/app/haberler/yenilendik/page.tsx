import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function YenilendikPage() {
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
                        Yenilendik
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        23 Ocak 2012
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg leading-relaxed mb-6">
                            Laboratuvarımız yeni nesil cihazlarla donatıldı. Odak Patoloji olarak,
                            tanı kalitemizi artırmak ve hastalarımıza daha hızlı sonuç verebilmek için
                            teknolojik altyapımızı güçlendirdik.
                        </p>

                        <h2 className="text-2xl font-bold text-[#7a1f2b] mt-8 mb-4">
                            Yeni Cihazlarımız
                        </h2>

                        <ul className="list-disc list-inside space-y-2 mb-6">
                            <li>Son model otomatik doku takip cihazı</li>
                            <li>Yüksek çözünürlüklü dijital mikroskop</li>
                            <li>Gelişmiş histokimyasal boyama sistemi</li>
                            <li>Hızlı sonuç veren sitoloji cihazları</li>
                        </ul>

                        <p className="text-lg leading-relaxed mb-6">
                            Bu yeni cihazlar sayesinde test sonuçlarınızı daha kısa sürede ve daha yüksek
                            doğrulukla alabileceksiniz. Teknolojiye yaptığımız yatırım, sizlere daha kaliteli
                            sağlık hizmeti sunmamızı sağlıyor.
                        </p>

                        <h2 className="text-2xl font-bold text-[#7a1f2b] mt-8 mb-4">
                            Kalite Standartları
                        </h2>

                        <p className="text-lg leading-relaxed mb-6">
                            Tüm yeni cihazlarımız uluslararası kalite standartlarına uygun olarak seçilmiş
                            ve kalibre edilmiştir. Ekibimiz, bu cihazların kullanımı konusunda özel eğitim
                            almıştır.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            Odak Patoloji olarak, Manisa bölgesinde en güncel teknolojiye sahip patoloji
                            laboratuvarı olmaktan gurur duyuyoruz.
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
