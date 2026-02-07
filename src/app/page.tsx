import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="aspect-video relative rounded-t-lg overflow-hidden">
                <img src="/hakkimizda-mainpage.png" alt="Hakkımızda" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-[#7a1f2b]">Dr. Fatih Kuyucuoğlu</CardTitle>
                <CardDescription>
                  1966 yılında Salihli'de doğdum. 1972-1977 yılında Salihli Altınordu ilkokulunda okudum...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full text-[#7a1f2b] border-[#7a1f2b] hover:bg-[#7a1f2b] hover:text-white">
                  Hakkımızda
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Testlerimiz Card */}
          <Link href="/testlerimiz">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
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
                <Button variant="outline" className="w-full text-[#7a1f2b] border-[#7a1f2b] hover:bg-[#7a1f2b] hover:text-white">
                  Testlerimiz
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Cihazlarımız Card */}
          <Link href="/cihazlarimiz">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
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
                <Button variant="outline" className="w-full text-[#7a1f2b] border-[#7a1f2b] hover:bg-[#7a1f2b] hover:text-white">
                  Cihazlarımız
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#7a1f2b]">
            Ekibimiz
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-[#7a1f2b] text-white text-xl">NÖ</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-lg">Nigar Özer</CardTitle>
                <CardDescription>Patoloji Teknisyeni</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-[#7a1f2b] text-white text-xl">YD</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-lg">Yeşim Duman</CardTitle>
                <CardDescription>Patoloji Teknisyeni</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-[#7a1f2b] text-white text-xl">ÖA</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-lg">Özgür Akyol</CardTitle>
                <CardDescription>Tıbbi Sekreter</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-[#7a1f2b] text-white text-xl">FK</AvatarFallback>
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
                <Button variant="link" className="text-[#7a1f2b] p-0 group-hover:translate-x-1 transition-transform">
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
                <Button variant="link" className="text-[#7a1f2b] p-0 group-hover:translate-x-1 transition-transform">
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
                <Button variant="link" className="text-[#7a1f2b] p-0 group-hover:translate-x-1 transition-transform">
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
