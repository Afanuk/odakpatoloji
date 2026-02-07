"use client";

import { useState } from "react";
import Toast from "@/components/Toast";

export default function IletisimPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setToast({ message: "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.", type: "success" });
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setToast({ message: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.", type: "error" });
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setToast({ message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.", type: "error" });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen">
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/IletisimPage.png')] bg-contain bg-top bg-no-repeat opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 z-10 container text-center pb-8 mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#7a1f2b] mb-4">
                        İletişim
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <h2 className="text-3xl font-bold mb-8">Bize Ulaşın</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Ad Soyad
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7a1f2b] focus:border-transparent"
                                            placeholder="Adınız ve soyadınız"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            E-posta
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7a1f2b] focus:border-transparent"
                                            placeholder="ornek@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                            Telefon
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7a1f2b] focus:border-transparent"
                                            placeholder="0 (5XX) XXX XX XX"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            Mesajınız
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7a1f2b] focus:border-transparent resize-none"
                                            placeholder="Mesajınızı buraya yazın..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 bg-[#7a1f2b] text-white rounded-full font-semibold hover:bg-[#5a1520] transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                                    </button>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h2 className="text-3xl font-bold mb-8">İletişim Bilgileri</h2>

                                <div className="space-y-6">
                                    <div className="p-6 rounded-xl bg-gradient-to-br from-[#7a1f2b]/5 to-[#7a1f2b]/10 border border-[#7a1f2b]/20">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-[#7a1f2b] rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-1">Telefon</h3>
                                                <a href="tel:02367147283" className="text-muted-foreground hover:text-[#7a1f2b] transition-colors">
                                                    0 236 714 72 83
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-1">E-posta</h3>
                                                <a href="mailto:info@odakpatoloji.com.tr" className="text-muted-foreground hover:text-[#7a1f2b] transition-colors">
                                                    info@odakpatoloji.com.tr
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-1">Adres</h3>
                                                <a
                                                    href="https://www.google.com/maps/search/?api=1&query=18.+Sk.+No:11+D:3+Mithatpaşa+45300+Salihli/Manisa"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted-foreground hover:text-[#7a1f2b] transition-colors"
                                                >
                                                    18. Sk. No:11 D:3 Mithatpaşa<br />
                                                    45300 Salihli/Manisa
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-[#7a1f2b]/5 to-[#7a1f2b]/10 border border-[#7a1f2b]/20">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-[#7a1f2b] rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-1">Çalışma Saatleri</h3>
                                                <p className="text-muted-foreground">
                                                    Pazartesi - Cuma: 08:00 - 18:00<br />
                                                    Cumartesi: 09:00 - 13:00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Konumumuz</h2>
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.826789!2d28.1394!3d38.4831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e8e8e8e8e8%3A0x8e8e8e8e8e8e8e8!2s18.%20Sk.%20No%3A11%2C%2045300%20Mithatpa%C5%9Fa%2FSalihli%2FManisa!5e0!3m2!1str!2str!4v1707303477000!5m2!1str!2str"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
