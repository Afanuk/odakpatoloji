export default function TestlerimizPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/TestlerimizPage.png')] bg-contain bg-top bg-no-repeat opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 z-10 container text-center pb-8 mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#7a1f2b] mb-4">
                        Testlerimiz
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Kapsamlı patolojik ve sitolojik inceleme hizmetleri
                    </p>
                </div>
            </section>

            {/* Tests Section */}
            <section className="relative z-10 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Pathological Tests */}
                            <div>
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold mb-6">Patolojik Testlerimiz</h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                                        <h3 className="text-xl font-bold mb-3">Küçük Biopsi İncelemesi</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li>• Gastrointestinal sistem örnekleri</li>
                                            <li>• Kemik iliği biopsisi</li>
                                            <li>• Mesane, prostat tru cut</li>
                                            <li>• Meme kor biopsi</li>
                                            <li>• Bronş biopsi</li>
                                            <li>• Deri punch biopsi</li>
                                            <li>• Serviks biopsi</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                                        <h3 className="text-xl font-bold mb-3">Diğer Biopsiler</h3>
                                        <p className="text-muted-foreground">
                                            Eksizyonel örnekler: deri, yumuşak doku ve diğer doku örnekleri
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-[#7a1f2b]/5 to-[#7a1f2b]/10 border border-[#7a1f2b]/20">
                                        <h3 className="text-xl font-bold mb-3">Operasyon Spesmenleri</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li>• Mesane prostat TUR</li>
                                            <li>• Safra kesesi</li>
                                            <li>• Apendiks</li>
                                            <li>• Uterus - rahim incelemesi</li>
                                            <li>• Diğer operasyon örnekleri</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                                        <h3 className="text-xl font-bold mb-3">Kanser Cerrahisi Materyelleri</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li>• Kolon kanseri</li>
                                            <li>• Meme kanseri</li>
                                            <li>• Mide kanseri</li>
                                            <li>• Larinks kanseri</li>
                                            <li>• Radikal prostat</li>
                                            <li>• Mesane kanseri</li>
                                            <li>• Wertheim operasyon materyeli</li>
                                            <li>• Over tümörleri</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                                        <h3 className="text-xl font-bold mb-3">Histokimyasal Boyamalar</h3>
                                        <p className="text-muted-foreground">
                                            PAS, AB, RET, DEMİR, AMİLOİD, MGG boyamaları
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-[#7a1f2b]/5 to-[#7a1f2b]/10 border border-[#7a1f2b]/20">
                                        <h3 className="text-xl font-bold mb-3">İmmunohistokimyasal İncelemeler</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li>• Meme kanseri paneli</li>
                                            <li>• Kolon kanseri paneli</li>
                                            <li>• Prostat paneli</li>
                                            <li>• Yumuşak doku sarkom paneli</li>
                                            <li>• 35 primer antikor çalışması</li>
                                            <li>• Antigen retrieval cihazı kullanımı</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Cytological Tests */}
                            <div>
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold mb-6">Sitolojik Testlerimiz</h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                                        <h3 className="text-xl font-bold mb-3">Pap Smear Testi</h3>
                                        <p className="text-muted-foreground">
                                            Papanicolau boyası kullanılarak serviks kanseri taraması
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                                        <h3 className="text-xl font-bold mb-3">İİA Sitolojisi</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li>• Papanicolau boyaması</li>
                                            <li>• MGG boyaması</li>
                                            <li>• HE boyaması</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-[#7a1f2b]/5 to-[#7a1f2b]/10 border border-[#7a1f2b]/20">
                                        <h3 className="text-xl font-bold mb-3">Diğer Sitolojik İncelemeler</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li>• İdrar sitolojisi</li>
                                            <li>• Akciğer sitolojisi</li>
                                            <li>• Yıkama sıvıları</li>
                                            <li>• Fırçalama örnekleri</li>
                                            <li>• Kemik iliği aspirasyon</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-r from-[#7a1f2b]/10 to-slate-100 border border-[#7a1f2b]/20">
                                        <h3 className="text-xl font-bold mb-4">Örnekleme Yöntemi</h3>
                                        <p className="text-muted-foreground">
                                            Materyel örnekleme haritalandırma yöntemi ile bilgisayar ortamında hazırlanmaktadır.
                                            Tüm incelemeler titizlikle yapılmakta ve hızlı sonuç verilmektedir.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
