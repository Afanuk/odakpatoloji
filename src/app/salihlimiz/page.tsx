export default function SalihlimizPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/SalihlimizPage.png')] bg-contain bg-top bg-no-repeat opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 z-10 container text-center pb-8 mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#7a1f2b] mb-4">
                        Salihlimiz
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Tarih, kültür ve doğal güzelliklerle dolu şehrimiz
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Salihli'nin Tarihi</h2>

                        <div className="prose prose-lg max-w-none space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Salihli'nin tarihi <strong>Sart Kenti</strong> ile başlamaktadır. Endüstriyel buluşlar, para,
                                ülkeler arası hicret, lirik şiir-müzik felsefe-astronomi-coğrafya ve heykelcilik M.Ö. 6. ve 7.
                                Yüzyıllarda Sardes'le başladı ve gelişti diyebiliriz.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Sardes Lidya Devleti sona erdikten sonra da önemini korumuş, Persler döneminde Satraplık merkezi,
                                Romalılar zamanında eyalet merkezi, Bizans döneminde ise Theme merkezi olmuştur. Dünya ticaret
                                yollarının değişmesi sonucunda Bizans imparatorluğunun son zamanlarında önemini yitirmiştir.
                            </p>

                            {/* Images */}
                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="rounded-xl overflow-hidden shadow-lg">
                                    <img src="/SalihliFirst.webp" alt="Salihli Tarihi" className="w-full h-64 object-cover" />
                                </div>
                                <div className="rounded-xl overflow-hidden shadow-lg">
                                    <img src="/SalihliSecond.webp" alt="Salihli Manzara" className="w-full h-64 object-cover" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mt-8 mb-4">Türk Dönemi</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                1075 yıllarında Selçuklu Türkleri Sardes'i aldılar. O günden sonra da Sart diye anılmaya başlanıldı.
                                Sart 1098 yılında Haçlıların desteği ile Bizans'ın eline geçti ise de 1313 yılında Germiyanoğulları'nın
                                komutanı Aydın Bey tarafından kesin olarak Türk egemenliği altına alındı. 16. yüzyıldan itibaren de
                                Salihli Sart'ın işlevini yüklenmeye başlamış ve onun yerini almıştır.
                            </p>

                            <h3 className="text-2xl font-bold mt-8 mb-4">Kurtuluş Savaşı</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Kurtuluş Savaşı Döneminde, Yunanistan 15 Mayıs 1919 günü İzmir'e asker çıkarmasının ardından
                                Menderes vadisi yönünde Aydın, Gediz vadisi yönünde Manisa'ya ilerlemeye başladı. 24 Haziran 1920'de
                                işgal edilmiştir. Kanboğazı – Gölmarmara- Pazarköy – Kemerdamları ve Bintepeler'de şiddetli çatışmalar
                                yaşandı. Uzun süren çarpışmaların ardından milletin iradesi galip geldi ve Salihli özgürlüğüne kavuştu.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Agriculture Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Tarım</h2>

                        <div className="mb-8 p-6 bg-white rounded-xl shadow-sm">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Alüvyonlu toprak, Akdeniz iklimi ve sulama imkânı, dünyada bundan daha güzel tarıma elverişli yer
                                az bulunur. Demir köprü barajının sağladığı sulama imkânı ovada hem çeşitli hem de verimli yüksek
                                bir tarım hayatı ortaya çıkarmıştır.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">🌾</div>
                                <h3 className="text-xl font-bold mb-3">Pamuk</h3>
                                <p className="text-muted-foreground">
                                    Liflerinin uzunluğu dolayısıyla kalite açısından rahat ve sulamalı bir tarım yöntemi uygulanmaktadır.
                                    İlçede altı tane çırçır fabrikası bulunmaktadır.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">🍇</div>
                                <h3 className="text-xl font-bold mb-3">Üzüm</h3>
                                <p className="text-muted-foreground">
                                    Türkiye'nin çekirdeksiz üzüm merkezlerinden biri olan Salihli ovası (Manisa ili Türkiye Birincisi)
                                    kuru üzüm ihracatı ve pekmez üretimiyle ön sıralarda yer almaktadır.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">🚬</div>
                                <h3 className="text-xl font-bold mb-3">Tütün</h3>
                                <p className="text-muted-foreground">
                                    Önemli bir yer tutmakla birlikte son yıllarda önemli azalmalar görülmektedir.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">🍑</div>
                                <h3 className="text-xl font-bold mb-3">Sebze ve Meyve</h3>
                                <p className="text-muted-foreground">
                                    Şeftali, kayısı, kiraz, kavun, karpuz ovanın diğer önemli ihraç malları arasında yer almaktadır.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">🫒</div>
                                <h3 className="text-xl font-bold mb-3">Zeytin</h3>
                                <p className="text-muted-foreground">
                                    Zeytincilik çok yaygın olmamakla birlikte yine de bir zeytinyağı fabrikası kurulacak kadar gelişmiştir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accommodation Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Konaklama</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                                <h3 className="text-xl font-bold mb-3">Lidya Sardes Termal Otel</h3>
                                <div className="space-y-2 text-muted-foreground">
                                    <p><strong>Adres:</strong> Kurşunlu Kaplıcaları Yolu, Salihli / Manisa</p>
                                    <p><strong>Tel:</strong> +90 236 715 55 55</p>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl bg-gradient-to-br from-[#7a1f2b]/5 to-[#7a1f2b]/10 border border-[#7a1f2b]/20">
                                <h3 className="text-xl font-bold mb-3">Berrak Otel</h3>
                                <div className="space-y-2 text-muted-foreground">
                                    <p><strong>Adres:</strong> Belediye Sok. Zafer Mah. No:59, Salihli</p>
                                    <p><strong>Tel:</strong> 0 236 713 14 52-53-54-55</p>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                                <h3 className="text-xl font-bold mb-3">Alkent Otel</h3>
                                <div className="space-y-2 text-muted-foreground">
                                    <p><strong>Adres:</strong> Kırveli Köyü Mithatpaşa Cad. No:203, Salihli</p>
                                    <p><strong>Tel:</strong> 0 236 712 40 00</p>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                                <h3 className="text-xl font-bold mb-3">Kurşunlu Şelalesi ve Kaplıcaları</h3>
                                <div className="space-y-2 text-muted-foreground">
                                    <p><strong>Tel:</strong> 0 236 712 50 00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Atatürk Quote Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Atatürk'ün Salihli Ziyareti</h2>
                            <p className="text-muted-foreground">Ulu Önder Atatürk Salihli ziyaretinde halka hitaben:</p>
                        </div>

                        <div className="p-8 bg-white rounded-2xl shadow-xl border-l-4 border-[#7a1f2b]">
                            <div className="flex justify-center mb-6">
                                <img src="/ataturk.jpeg" alt="Mustafa Kemal Atatürk" className="w-64 h-auto rounded-lg shadow-lg" />
                            </div>
                            <blockquote className="text-lg italic text-center text-muted-foreground leading-relaxed space-y-6">
                                “                                <p>
                                    Gösterdiğiniz hissiyata teşekkür ederim. Buraya kadar bu kadar erken gelmekle hakiki hissiyatımızı izhar (gösterme) şevkiyle olduğunu anlıyorum. Bundan fevkalade bahtiyarım. Bende size karşı aynı hissiyatla mütehassısım.
                                </p>

                                <p>
                                    Muhterem Ahali: Çok zulüm ve çokelem gördünüz. Fakat artık bunlardan ebediyen kurtuldunuz. O kara günler artık tekerrür edemez. Çünkü milletini intibah (uyanma) ve teyakkuzu (uyanıklık) pek büyüktür. Bundan sonra memleketimizi kati halasa (kurtuluş) isa i (ulaştırma) için pek kuvvetli ve esaslı tedbirler ittihaz eylemek icap eder. Bu tedbirlerinen mühimi ve en birincisi ilim ve irfan orduları teşkil edeceklerdir. Bu itibarla atiye (geleceğe) ehemmiyetle bakabiliriz.
                                </p>

                                <p>
                                    Muhterem Ahali: Biliyorsunuz ki, hayatımızı, istikbalimizi, namusumuzu kurtaran Misaki Millilerimize olan itimad-ı taamımızdır (tam bağlılık). Millet ve milletten doğan ordumuz bu Milli Misaki süngülerle tahakkuk ettirmiştir. Bunu siyaseten ifade ettirmek için heyeti murahhasımız Lausane (Lozan) da faaliyette çalışmaktadır.
                                </p>

                                <p>
                                    Memleket dahilinde çalışırken, diğer taraftan hemen karşımıza çıkması muhtemel düşmanları yere sermek için daima mühayya (hazır) bulunmalıyız. Bu millet üç buçuk seneden beri çok fedakarlık yapmıştır. İcap ederse bundan sonra da hayatve namusu için daha çok fedakarlık yapacaktır.
                                </p>
                                ”
                            </blockquote>
                            <p className="text-right mt-6 font-bold text-[#7a1f2b]">- Mustafa Kemal Atatürk</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
