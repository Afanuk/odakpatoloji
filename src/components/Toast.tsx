"use client";

import { useEffect } from "react";

interface ToastProps {
    message: string;
    type: "success" | "error";
    onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-4 right-4 left-4 md:left-auto z-50 animate-slide-in">
            <div
                className={`
                    px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-2xl border-l-4 
                    ${type === "success"
                        ? "bg-white border-green-500"
                        : "bg-white border-red-500"
                    }
                    max-w-md mx-auto md:mx-0
                `}
            >
                <div className="flex items-start gap-2 md:gap-3">
                    {type === "success" ? (
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                    <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-sm md:text-base ${type === "success" ? "text-green-800" : "text-red-800"}`}>
                            {type === "success" ? "Başarılı!" : "Hata!"}
                        </p>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 break-words">{message}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                        aria-label="Kapat"
                    >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
