import Image from "next/image";

export default function HakkimizdaPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/HakkimizdaPage.png"
                        alt="Hakkımızda"
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'top' }}
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 container text-center pb-8 mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#7a1f2b] mb-4">
                        Hakkımızda
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        1998'den beri Manisa bölgesinin güvenilir patoloji merkezi
                    </p>
                </div>
            </section>

            {/* Laboratory History */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            Odak Patoloji Laboratuarı
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Odak Patoloji Laboratuarı Manisa bölgesinin tek patoloji merkezi olarak 1998 yılından bugüne
                                Dr. M. Fatih Kuyucuoğlu yönetiminde Salihli'de hizmet vermeye devam ediyor.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Salihlimize, çevre il ve ilçelere patoloji hizmeti vermekte olan ve günden güne büyüyen
                                Odak Patoloji Laboratuarı Yapı Kredi Bankası karşısındaki merkezinde 24 Şubat 2012
                                tarihinde yeni bir inceleme yöntemine başlanmıştır.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dr. Biography */}
            <section className="py-20 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-center mb-12 relative isolate">
                            {/* Sunburst Effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] -z-10 pointer-events-none overflow-hidden">
                                <div
                                    className="w-full h-full animate-[spin_60s_linear_infinite] opacity-20"
                                    style={{
                                        background: 'repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 10deg, #7a1f2b 10.5deg, transparent 11deg)',
                                        maskImage: 'radial-gradient(circle, black 0%, transparent 50%)',
                                        WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 50%)'
                                    }}
                                />
                            </div>

                            <Image
                                src="/MFKBiography.png"
                                alt="Dr. Mehmet Fatih Kuyucuoğlu"
                                width={300}
                                height={300}
                                className="rounded-full object-cover object-top w-[220px] h-[220px] md:w-[300px] md:h-[300px]"
                                style={{
                                    maskImage: 'radial-gradient(circle, black 65%, transparent 75%)',
                                    WebkitMaskImage: 'radial-gradient(circle, black 65%, transparent 75%)'
                                }}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Dr. Mehmet Fatih Kuyucuoğlu
                        </h2>

                        {/* Timeline */}
                        <div className="space-y-8 flex flex-col items-center">
                            <div className="flex gap-3 md:gap-6 w-full max-w-3xl">
                                <div className="flex-1 flex justify-end items-start">
                                    <span className="inline-block px-2 py-1 md:px-4 md:py-2 bg-[#7a1f2b] text-white rounded-full text-xs md:text-sm whitespace-nowrap font-semibold">
                                        1966
                                    </span>
                                </div>
                                <div className="flex-1 pb-6 md:pb-8 border-l-2 border-slate-200 pl-3 md:pl-6">
                                    <p className="text-sm md:text-base text-muted-foreground">Salihli'de doğdu.</p>
                                </div>
                            </div>

                            <div className="flex gap-3 md:gap-6 w-full max-w-3xl">
                                <div className="flex-1 flex justify-end items-start">
                                    <span className="inline-block px-2 py-1 md:px-4 md:py-2 bg-[#7a1f2b] text-white rounded-full text-xs md:text-sm whitespace-nowrap font-semibold">
                                        1972-1977
                                    </span>
                                </div>
                                <div className="flex-1 pb-6 md:pb-8 border-l-2 border-slate-200 pl-3 md:pl-6">
                                    <p className="text-sm md:text-base text-muted-foreground">Salihli Altınordu İlkokulu'nda okudu.</p>
                                </div>
                            </div>

                            <div className="flex gap-3 md:gap-6 w-full max-w-3xl">
                                <div className="flex-1 flex justify-end items-start">
                                    <span className="inline-block px-2 py-1 md:px-4 md:py-2 bg-[#7a1f2b] text-white rounded-full text-xs md:text-sm whitespace-nowrap font-semibold">
                                        1978-1984
                                    </span>
                                </div>
                                <div className="flex-1 pb-6 md:pb-8 border-l-2 border-slate-200 pl-3 md:pl-6">
                                    <p className="text-sm md:text-base text-muted-foreground">Bornova Anadolu Lisesi'nde okudu.</p>
                                </div>
                            </div>

                            <div className="flex gap-3 md:gap-6 w-full max-w-3xl">
                                <div className="flex-1 flex justify-end items-start">
                                    <span className="inline-block px-2 py-1 md:px-4 md:py-2 bg-[#7a1f2b] text-white rounded-full text-xs md:text-sm whitespace-nowrap font-semibold">
                                        1984-1990
                                    </span>
                                </div>
                                <div className="flex-1 pb-6 md:pb-8 border-l-2 border-slate-200 pl-3 md:pl-6">
                                    <p className="text-sm md:text-base text-muted-foreground">Ege Üniversitesi Tıp Fakültesi'nde okudu.</p>
                                </div>
                            </div>

                            <div className="flex gap-3 md:gap-6 w-full max-w-3xl">
                                <div className="flex-1 flex justify-end items-start">
                                    <span className="inline-block px-2 py-1 md:px-4 md:py-2 bg-[#7a1f2b] text-white rounded-full text-xs md:text-sm whitespace-nowrap font-semibold">
                                        1990-1992
                                    </span>
                                </div>
                                <div className="flex-1 pb-6 md:pb-8 border-l-2 border-slate-200 pl-3 md:pl-6">
                                    <p className="text-sm md:text-base text-muted-foreground">Gaziantep'te zorunlu hizmetini yaptı.</p>
                                </div>
                            </div>

                            <div className="flex gap-3 md:gap-6 w-full max-w-3xl">
                                <div className="flex-1 flex justify-end items-start">
                                    <span className="inline-block px-2 py-1 md:px-4 md:py-2 bg-[#7a1f2b] text-white rounded-full text-xs md:text-sm whitespace-nowrap font-semibold">
                                        1992-1998
                                    </span>
                                </div>
                                <div className="flex-1 pb-6 md:pb-8 border-l-2 border-slate-200 pl-3 md:pl-6">
                                    <p className="text-sm md:text-base text-muted-foreground">Dokuz Eylül Üniversitesi Tıp Fakültesi Patoloji Bölümü'nde ihtisas yaptı.</p>
                                </div>
                            </div>

                            <div className="flex gap-3 md:gap-6 w-full max-w-3xl">
                                <div className="flex-1 flex justify-end items-start">
                                    <span className="inline-block px-2 py-1 md:px-4 md:py-2 bg-[#7a1f2b] text-white rounded-full text-xs md:text-sm whitespace-nowrap font-semibold">
                                        1994-1995
                                    </span>
                                </div>
                                <div className="flex-1 pb-6 md:pb-8 border-l-2 border-slate-200 pl-3 md:pl-6">
                                    <p className="text-sm md:text-base text-muted-foreground">Midyat'ta askerlik görevini yaptı.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 w-full max-w-4xl">
                                <div className="flex-1 flex justify-end items-start">
                                    <span className="inline-block px-2 py-1 md:px-4 md:py-2 bg-[#7a1f2b] text-white rounded-full text-xs md:text-sm whitespace-nowrap font-semibold">
                                        1998
                                    </span>
                                </div>
                                <div className="flex-1 pb-6 md:pb-8 border-l-2 border-slate-200 pl-3 md:pl-6">
                                    <p className="text-muted-foreground font-semibold text-[#7a1f2b] mb-2">
                                        Salihli'de Odak Patoloji Laboratuvarı'nı kurdu.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 md:gap-6 w-full max-w-3xl">
                                <div className="flex-1 flex justify-end items-start">
                                    <span className="inline-block px-2 py-1 md:px-4 md:py-2 bg-[#7a1f2b] text-white rounded-full text-xs md:text-sm whitespace-nowrap font-semibold">
                                        1999
                                    </span>
                                </div>
                                <div className="flex-1 pb-6 md:pb-8 border-l-2 border-slate-200 pl-3 md:pl-6">
                                    <p className="text-sm md:text-base text-muted-foreground">
                                        Amerika Birleşik Devletleri MD Anderson Cancer Center (Houston)'da 1 ay muhtelif bölümlerde araştırma yaptı.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 w-full max-w-4xl">
                                <div className="flex-1 flex justify-end items-start">
                                    <span className="inline-block px-2 py-1 md:px-4 md:py-2 bg-[#7a1f2b] text-white rounded-full text-xs md:text-sm whitespace-nowrap font-semibold">
                                        1998 - Günümüz
                                    </span>
                                </div>
                                <div className="flex-1 pb-6 md:pb-8 border-l-2 border-slate-200 pl-3 md:pl-6">
                                    <p className="text-muted-foreground font-semibold text-[#7a1f2b] mb-2">
                                        Odak Patoloji Yöneticisi ve Patoloji Uzmanı
                                    </p>
                                    <p className="text-sm md:text-base text-muted-foreground">
                                        Manisa bölgesine kesintisiz patoloji hizmeti sunmaya devam ediyor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Misyonumuz
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                                <div className="w-16 h-16 mx-auto mb-4 bg-slate-600 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Kalite</h3>
                                <p className="text-sm md:text-base text-muted-foreground">
                                    Her hasta spesmenini büyük bir titizlikle incelemekte, hızlı ve doğru sonuç vermeyi ilke olarak kabul ediyoruz.
                                </p>
                            </div>

                            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#7a1f2b]/5 to-[#7a1f2b]/10 border border-[#7a1f2b]/20">
                                <div className="w-16 h-16 mx-auto mb-4 bg-[#7a1f2b] rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Hız</h3>
                                <p className="text-sm md:text-base text-muted-foreground">
                                    Afyon – İzmir karayolu üzerindeki özel hastanelere hızlı ve güvenilir hizmet sunuyoruz.
                                </p>
                            </div>

                            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Profesyonellik</h3>
                                <p className="text-sm md:text-base text-muted-foreground">
                                    Malzeme ve eleman kalitesinden ödün vermeden amatör ruhla profesyonel olma yolunda ilerliyoruz.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 p-8 bg-gradient-to-r from-[#7a1f2b]/10 to-purple-100 rounded-2xl border border-[#7a1f2b]/20">
                            <p className="text-lg text-center text-muted-foreground italic">
                                "Salihli ve çevresinde kurulan ilk patoloji laboratuarı olarak, 1998 yılından bu yana
                                bölgemize kesintisiz hizmet vermenin gururunu yaşıyoruz."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
