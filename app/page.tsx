"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import ScratchCard from "./scratchcard";

export default function Home() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenCurtains = () => {
    if (opened || isAnimating) return;

    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setOpened(true);
        setIsAnimating(false);

        if (overlayRef.current) {
          overlayRef.current.style.pointerEvents = "none";
        }
      },
    });

    tl.to(hintRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.3,
      ease: "power2.out",
    })
      .to(
        leftCurtainRef.current,
        {
          x: "-100%",
          duration: 1.2,
          ease: "power3.inOut",
        },
        0
      )
      .to(
        rightCurtainRef.current,
        {
          x: "100%",
          duration: 1.2,
          ease: "power3.inOut",
        },
        0
      )
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.15"
      );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      {/* First section behind curtains */}
      <section className="relative z-0 min-h-screen">
        <div className="relative h-screen w-full">
          <Image
            src="/1.png"
            alt="Wedding invitation"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>

      {/* Second section */}
      <ScratchCard />

      {/* Curtain overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-20"
        onClick={handleOpenCurtains}
        onTouchStart={handleOpenCurtains}
        role="button"
        aria-label="Open invitation"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleOpenCurtains();
          }
        }}
      >
        <div
          ref={leftCurtainRef}
          className="absolute left-0 top-0 h-full w-1/2 border-r border-white/10 bg-[linear-gradient(180deg,#7a0016_0%,#4e0010_45%,#2b0008_100%)] shadow-[inset_-12px_0_30px_rgba(0,0,0,0.25)]"
        />

        <div
          ref={rightCurtainRef}
          className="absolute right-0 top-0 h-full w-1/2 border-l border-white/10 bg-[linear-gradient(180deg,#7a0016_0%,#4e0010_45%,#2b0008_100%)] shadow-[inset_12px_0_30px_rgba(0,0,0,0.25)]"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={hintRef}
            className="rounded-full border border-white/20 bg-black/25 px-5 py-3 text-sm tracking-wide backdrop-blur-sm"
          >
            Touch to Open
          </div>
        </div>

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
      </div>
    </main>
  );
}
