import Image from "next/image";

export default function CihazlarimizPage() {
    const equipment = [
        {
            name: "Doku Takip Cihazı",
            model: "Shandon Citadel 2000",
            description: "Doku örneklerinin işlenmesi ve hazırlanması için kullanılan otomatik doku takip cihazı",
            gradient: "from-slate-50 to-slate-100",
            border: "border-slate-200",
            icon: "🔬",
            image: "/Shandon-Citadel-2000.png"
        },
        {
            name: "Histostar",
            model: "THERMO Marka",
            description: "Parafin bloklarının hazırlanması için kullanılan profesyonel parafin gömme cihazı",
            gradient: "from-[#7a1f2b]/5 to-[#7a1f2b]/10",
            border: "border-[#7a1f2b]/20",
            icon: "⚗️",
            image: "/histostar-thermo.jpg"
        },
        {
            name: "Mikroskop",
            model: "CX 41 Olympus",
            description: "Detaylı patolojik inceleme için yüksek çözünürlüklü optik mikroskop",
            gradient: "from-gray-50 to-gray-100",
            border: "border-gray-200",
            icon: "🔍",
            image: "/olympus-microscope.jpg"
        },
        {
            name: "Fotoğraf Makinası",
            model: "E 330 Monte",
            description: "Mikroskop görüntülerinin profesyonel kalitede kaydedilmesi için entegre kamera sistemi",
            gradient: "from-gray-50 to-gray-100",
            border: "border-gray-200",
            icon: "📷",
            image: "/olympus-e-330.jpg"
        },
        {
            name: "Mikrotom",
            model: "Yarı Otomatik Slee",
            description: "Parafin bloklarından ince kesitler alınması için hassas kesim cihazı",
            gradient: "from-slate-50 to-slate-100",
            border: "border-slate-200",
            icon: "✂️",
            image: "/shadon-mikrotom-slee.jpg"
        },
        {
            name: "Parafin Dispenseri",
            model: "Profesyonel Model",
            description: "Parafin bloklarının hazırlanması için otomatik parafin dağıtım cihazı",
            gradient: "from-[#7a1f2b]/5 to-[#7a1f2b]/10",
            border: "border-[#7a1f2b]/20",
            icon: "🧊",
            image: "/paraffin-dispenser.jpg"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/CihazlarimizPage.png')] bg-contain bg-top bg-no-repeat opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 z-10 container text-center pb-8 mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#7a1f2b] mb-4">
                        Cihazlarımız
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Modern ve güvenilir patoloji ekipmanları
                    </p>
                </div>
            </section>

            {/* Equipment Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {equipment.map((item, index) => (
                                <div
                                    key={index}
                                    className={`rounded-2xl bg-gradient-to-br ${item.gradient} border ${item.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                                >
                                    {/* Image Section - Fixed Height */}
                                    <div className="relative h-64 w-full bg-white">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-contain p-4"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                                        <p className="text-sm font-semibold text-[#7a1f2b] mb-4">{item.model}</p>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="mt-16 p-8 bg-gradient-to-r from-[#7a1f2b]/10 to-blue-100 rounded-2xl border border-[#7a1f2b]/20">
                            <h3 className="text-2xl font-bold mb-4 text-center">Teknolojik Altyapımız</h3>
                            <p className="text-lg text-center text-muted-foreground">
                                Laboratuvarımız, en son teknoloji cihazlarla donatılmış olup,
                                her türlü patolojik ve sitolojik inceleme için gerekli altyapıya sahiptir.
                                Tüm cihazlarımız düzenli olarak kalibre edilmekte ve bakımları yapılmaktadır.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
