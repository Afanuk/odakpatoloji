import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TaniKalitesiPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/PageHaber.png"
                        alt="Haberler"
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'top' }}
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 container text-center pb-8 mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#7a1f2b] mb-4">
                        Odak Patoloji Tanı Kalitesini Artırıyor
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        5 Nisan 2012
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-sm text-muted-foreground mb-6">
                            Genel / Yazan ugurersan
                        </p>

                        <p className="text-lg leading-relaxed mb-6 font-semibold">
                            Salihli Özel Odak Patoloji Laboratuvarından Uzman Dr. Fatih Kuyucuoğlu
                            "Tanı kalitesini arttıran bu yöntem sayesinde artık hastalarımıza ait doku
                            örneklerini büyük hastanelere götürmeye gerek kalmayacak" dedi.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            Odak Patoloji Laboratuvarı Manisa bölgesinin tek patoloji merkezi olarak 1998
                            yılından bugüne Dr. M. Fatih Kuyucuoğlu yönetiminde Salihli'de hizmet vermeye
                            devam ediyor. Salihlimize, çevre il ve ilçelere patoloji hizmeti vermekte olan
                            ve günden güne büyüyen Özel Odak Patoloji Laboratuvarı Yapı Kredi Bankası
                            karşısındaki merkezinde 24 Şubat 2012 tarihinde yeni bir inceleme yöntemine
                            başlanmıştır.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            Bu konuda bilgi veren Patoloji Uzmanı Dr. Fatih Kuyucuoğlu immunohistokimyasal
                            inceleme adı verilen bu sistemi en güvenilir marka kabul edilen PT link cihazı
                            ve K8000 Dako antikorlarını kullandıklarını belirterek, yöntemin amacını şöyle
                            özetledi:
                        </p>

                        <div className="bg-[#7a1f2b]/5 border-l-4 border-[#7a1f2b] p-6 my-8">
                            <p className="text-lg leading-relaxed italic">
                                "Tümör hücresinin salgıladığı çeşitli moleküller, antijen-antikor reaksiyonu
                                ile tespit edilmekte boyanmakta böylece tümör hücresinin tipi, kaynaklandığı
                                organ, ilerleme hızı ve derecesi, tedavi için önemli olan meme tümör reseptörleri
                                varlığı ve kanser türlerinin ayrımı rahatlıkla yapılabilmektedir."
                            </p>
                        </div>

                        <p className="text-lg leading-relaxed mb-6">
                            "Ayrıca, tanı kalitesini arttıran bu yöntem sayesinde artık hastalarımıza ait doku
                            örneklerini büyük hastanelere götürmeye gerek kalmayacak. Tanı ile ilgili aşamaların
                            hepsi Salihli'de Odak Patolojide tamamlanacaktır. Bu yöntem halen büyük şehirlerimizdeki
                            bazı patoloji laboratuvarlarında ve eğitim hastanelerinde uygulanmaktadır." dedi.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            PT Link cihazının tümör hücresindeki antijeni açığa çıkardığını söyleyen Dr. Fatih
                            Kuyucuoğlu yeniliklere devam edeceklerini ve ayrıntılı bilginin{" "}
                            <a href="https://www.odakpatoloji.com.tr" className="text-[#7a1f2b] hover:underline font-semibold">
                                www.odakpatoloji.com.tr
                            </a>{" "}
                            web sayfasından alınabileceğini belirterek sözlerine son verdi.
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
