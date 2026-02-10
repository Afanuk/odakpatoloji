import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev', // Resend test domain
            to: 'odak.patoloji@hotmail.com',
            subject: `Yeni İletişim Formu Mesajı - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #7a1f2b;">Yeni İletişim Formu Mesajı</h2>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Ad Soyad:</strong> ${name}</p>
                        <p><strong>E-posta:</strong> ${email}</p>
                        <p><strong>Telefon:</strong> ${phone || 'Belirtilmemiş'}</p>
                    </div>
                    <div style="margin: 20px 0;">
                        <h3 style="color: #7a1f2b;">Mesaj:</h3>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    <hr style="border: 1px solid #e0e0e0; margin: 20px 0;">
                    <p style="color: #666; font-size: 12px;">
                        Bu mesaj Odak Patoloji web sitesi iletişim formundan gönderilmiştir.
                    </p>
                </div>
            `,
        });

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { success: false, error: 'E-posta gönderilemedi' },
            { status: 500 }
        );
    }
}
