import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import CountUp from "@/components/CountUp";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/MainPage.png')] bg-contain bg-top bg-no-repeat opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 z-10 container text-center pb-8 mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-[#7a1f2b] mb-4">
            Odak Patoloji
          </h1>
          <p className="text-xl text-muted-foreground">
            Salihli - Patoloji ve Sitoloji Laboratuarı
          </p>
        </div>
      </section>

      {/* Years of Service Section */}
      <section className="py-16">
        <div className="container mx-auto text-center px-4">
          <div className="text-5xl md:text-6xl font-bold text-[#7a1f2b] mb-4">
            <CountUp
              from={0}
              to={new Date().getFullYear() - 1998}
              separator=""
              direction="up"
              duration={2}
              className=""
              startCounting={true}
            />
          </div>
          <p className="text-2xl md:text-3xl text-gray-700 font-medium">
            yıldır size hizmet sunuyoruz...
          </p>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Dr. Fatih Card */}
          <Link href="/hakkimizda">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full group">
              <div className="aspect-video relative rounded-t-lg overflow-hidden">
                <img src="/hakkimizda-mainpage.jpeg" alt="Hakkımızda" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-[#7a1f2b]">Dr. Fatih Kuyucuoğlu</CardTitle>
                <CardDescription>
                  1966 yılında Salihli'de doğdum. 1972-1977 yılında Salihli Altınordu ilkokulunda okudum...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full text-[#7a1f2b] border-[#7a1f2b] hover:bg-[#7a1f2b] hover:text-white cursor-pointer">
                  Hakkımızda
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Testlerimiz Card */}
          <Link href="/testlerimiz">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full group">
              <div className="aspect-video relative rounded-t-lg overflow-hidden">
                <img src="/testlerimiz-mainpage.jpg" alt="Testlerimiz" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-[#7a1f2b]">Testlerimiz</CardTitle>
                <CardDescription>
                  Pap Smear Testi, Biopsi İncelemesi, Operasyon Materyali İncelemesi, Sitolojik İncelemeler...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full text-[#7a1f2b] border-[#7a1f2b] hover:bg-[#7a1f2b] hover:text-white cursor-pointer">
                  Testlerimiz
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Cihazlarımız Card */}
          <Link href="/cihazlarimiz">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full group">
              <div className="aspect-video relative rounded-t-lg overflow-hidden">
                <img src="/equipments-mainpage.webp" alt="Cihazlarımız" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-[#7a1f2b]">Cihazlarımız</CardTitle>
                <CardDescription>
                  Doku takip cihazı Shandon Citadel 2000, THERMO marka Histostar, CX 41 Olympus Mikroskop...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full text-[#7a1f2b] border-[#7a1f2b] hover:bg-[#7a1f2b] hover:text-white cursor-pointer">
                  Cihazlarımız
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Blurred background with fade mask */}
        <div
          className="absolute inset-0 bg-muted/30"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
          }}
        />

        <div className="px-4 relative z-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#7a1f2b]">
            Ekibimiz
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Avatar className="h-28 w-28 rounded-xl shadow-md">
                    <AvatarImage src="/MünevverSolak.jpeg" alt="Münevver Solak" className="object-cover" />
                    <AvatarFallback className="bg-[#7a1f2b] text-white text-xl rounded-xl">MS</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-lg">Münevver Solak</CardTitle>
                <CardDescription>Patoloji Teknisyeni</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Avatar className="h-28 w-28 rounded-xl shadow-md">
                    <AvatarImage src="/SilaCaylak.jpeg" alt="Sıla Çaylak" className="object-cover" />
                    <AvatarFallback className="bg-[#7a1f2b] text-white text-xl rounded-xl">SÇ</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-lg">Sıla Çaylak</CardTitle>
                <CardDescription>Patoloji Teknisyeni</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Avatar className="h-28 w-28 rounded-xl shadow-md">
                    <AvatarImage src="/OzgurAkyol.jpeg" alt="Özgür Akyol" className="object-cover" />
                    <AvatarFallback className="bg-[#7a1f2b] text-white text-xl rounded-xl">ÖA</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-lg">Özgür Akyol</CardTitle>
                <CardDescription>Tıbbi Sekreter</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Avatar className="h-28 w-28 rounded-xl shadow-md">
                    <AvatarImage src="/FadimeKozak.jpeg" alt="Fadime Kozak" className="object-cover" />
                    <AvatarFallback className="bg-[#7a1f2b] text-white text-xl rounded-xl">FK</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-lg">Fadime Kozak</CardTitle>
                <CardDescription>Kayıt ve Kargo Sorumlusu</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#7a1f2b]">
          Haberler
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link href="/haberler/yeni-web-sayfamiz">
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-[#7a1f2b] hover:bg-[#5a1620]">Yeni</Badge>
                <CardTitle className="text-lg group-hover:text-[#7a1f2b] transition-colors">
                  Yeni web sayfamız yayında
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Modern ve kullanıcı dostu yeni web sitemiz hizmete girdi.
                </p>
                <Button variant="link" className="text-[#7a1f2b] p-0 group-hover:translate-x-1 transition-transform cursor-pointer">
                  Devamı →
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/haberler/yenilendik">
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-[#9a2f3b] hover:bg-[#7a1f2b]">Güncelleme</Badge>
                <CardTitle className="text-lg group-hover:text-[#7a1f2b] transition-colors">
                  Yenilendik
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Laboratuvarımız yeni cihazlarla donatıldı.
                </p>
                <Button variant="link" className="text-[#7a1f2b] p-0 group-hover:translate-x-1 transition-transform cursor-pointer">
                  Devamı →
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/haberler/tani-kalitesi">
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-[#7a1f2b] hover:bg-[#5a1620]">Duyuru</Badge>
                <CardTitle className="text-lg group-hover:text-[#7a1f2b] transition-colors">
                  Odakpatoloji Tanı kalitesini arttırıyor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Kalite standartlarımızı sürekli geliştiriyoruz.
                </p>
                <Button variant="link" className="text-[#7a1f2b] p-0 group-hover:translate-x-1 transition-transform cursor-pointer">
                  Devamı →
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </main>
  );
}
