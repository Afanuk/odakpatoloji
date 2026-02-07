"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
    from: number;
    to: number;
    separator?: string;
    direction?: "up" | "down";
    duration?: number;
    className?: string;
    startCounting?: boolean;
}

export default function CountUp({
    from,
    to,
    separator = "",
    direction = "up",
    duration = 2,
    className = "",
    startCounting = true,
}: CountUpProps) {
    const [count, setCount] = useState(from);
    const [isVisible, setIsVisible] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setIsVisible(true);
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [hasStarted]);

    useEffect(() => {
        if (!isVisible || !startCounting) return;

        const increment = direction === "up" ? 1 : -1;
        const target = to;
        const steps = Math.abs(to - from);
        const stepDuration = (duration * 1000) / steps;

        let current = from;
        const timer = setInterval(() => {
            current += increment;
            setCount(current);

            if (
                (direction === "up" && current >= target) ||
                (direction === "down" && current <= target)
            ) {
                setCount(target);
                clearInterval(timer);
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isVisible, startCounting, from, to, direction, duration]);

    const formatNumber = (num: number) => {
        if (!separator) return num.toString();
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    };

    return (
        <span ref={elementRef} className={className}>
            {formatNumber(count)}
        </span>
    );
}
