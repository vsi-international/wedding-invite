"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import ScratchCard from "./scratchcard";

function InvitationDetails() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f9ecd2] px-4 py-6">
      <div className="relative w-full max-w-sm aspect-[105/148] overflow-hidden bg-[#f9ecd2] text-[#7c754d]">
        {/* soft vintage texture */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-[6%] top-[8%] h-24 w-24 rounded-full bg-[#d9d0b4] blur-3xl" />
          <div className="absolute right-[8%] top-[16%] h-20 w-20 rounded-full bg-[#d9d0b4] blur-3xl" />
          <div className="absolute left-[18%] top-[42%] h-20 w-20 rounded-full bg-[#d9d0b4] blur-3xl" />
          <div className="absolute right-[14%] bottom-[18%] h-24 w-24 rounded-full bg-[#d9d0b4] blur-3xl" />
          <div className="absolute left-[10%] bottom-[8%] h-24 w-24 rounded-full bg-[#d9d0b4] blur-3xl" />
        </div>

        {/* light floral-style corner accents */}
        <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 opacity-20">
          <div className="absolute left-2 top-6 h-24 w-24 rounded-full border border-[#bdb593]" />
          <div className="absolute left-10 top-0 h-20 w-20 rounded-full border border-[#bdb593]" />
          <div className="absolute left-0 top-16 h-20 w-20 rounded-full border border-[#bdb593]" />
        </div>

        <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 opacity-20">
          <div className="absolute right-2 top-6 h-24 w-24 rounded-full border border-[#bdb593]" />
          <div className="absolute right-10 top-0 h-20 w-20 rounded-full border border-[#bdb593]" />
          <div className="absolute right-0 top-16 h-20 w-20 rounded-full border border-[#bdb593]" />
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 opacity-20">
          <div className="absolute bottom-2 left-2 h-24 w-24 rounded-full border border-[#bdb593]" />
          <div className="absolute bottom-10 left-0 h-20 w-20 rounded-full border border-[#bdb593]" />
          <div className="absolute bottom-0 left-12 h-20 w-20 rounded-full border border-[#bdb593]" />
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 opacity-20">
          <div className="absolute bottom-2 right-2 h-24 w-24 rounded-full border border-[#bdb593]" />
          <div className="absolute bottom-10 right-0 h-20 w-20 rounded-full border border-[#bdb593]" />
          <div className="absolute bottom-0 right-12 h-20 w-20 rounded-full border border-[#bdb593]" />
        </div>

        <div className="relative z-10 flex h-full flex-col px-6 pb-8 pt-10 text-center sm:px-8">
          {/* monogram */}
          <div className="mt-2 flex flex-col items-center">
            <div className="text-[34px] font-light tracking-[0.35em] text-[#817844] sm:text-[38px]">
              D&nbsp;&nbsp;N
            </div>
            <div className="-mt-1 h-14 w-px bg-[#b7ae87]" />
          </div>

          {/* intro */}
          <div className="mt-8 px-2">
            <p className="text-[12px] font-light uppercase leading-[2.05] tracking-[0.24em] sm:text-[14px]">
              Mrs. Ekhlas Ahmed
              <br />
              requests the honour of
              <br />
              your presence at the
              <br />
              wedding ceremony of her
              <br />
              beloved grandson
            </p>
          </div>

          {/* groom */}
          <div className="mt-10">
            <h2 className="text-[34px] font-light uppercase tracking-[0.18em] text-[#817844] sm:text-[42px]">
              Daniyal Tariq
            </h2>
            <p className="mt-2 text-[14px] font-light text-[#8e8662] sm:text-[16px]">
              S/o Mr. &amp; Mrs. Tariq Ekhlas
            </p>
          </div>

          {/* and */}
          <div className="mt-6 text-[28px] italic text-[#40382e] sm:text-[32px]">
            and
          </div>

          {/* bride */}
          <div className="mt-4">
            <h2 className="text-[34px] font-light uppercase tracking-[0.18em] text-[#817844] sm:text-[42px]">
              Noor Ijaz
            </h2>
            <p className="mt-2 text-[14px] font-light text-[#8e8662] sm:text-[16px]">
              D/o Mr. &amp; Mrs. Ijaz Malik
            </p>
          </div>

          {/* time */}
          <div className="mt-10">
            <p className="text-[15px] uppercase tracking-[0.2em] text-[#8e8662] sm:text-[17px]">
              7:30 PM
            </p>
          </div>

          {/* RSVP */}
          <div className="mt-auto self-start text-left">
            <h3 className="text-[18px] uppercase tracking-[0.08em] text-[#817844] sm:text-[20px]">
              RSVP
            </h3>
            <div className="mt-3 space-y-1 text-[12px] font-light leading-[1.8] text-[#7c754d] sm:text-[14px]">
              <p>Mr. Muhammad Kamil</p>
              <p>Mrs. Tariq Ekhlas</p>
              <p>Mr. &amp; Mrs. Eissa Haroon - 0322 5858987</p>
              <p>Mr. Danish Tariq - 0321 4167337</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <main className="relative min-h-screen overflow-hidden bg-[#f9ecd2] text-black">
      {/* First section behind curtains */}
      <section className="relative z-0 flex min-h-screen items-center justify-center px-4">
        <div className="flex w-full justify-center">
          <Image
            src="/1.png"
            alt="Wedding invitation"
            width={900}
            height={1400}
            priority
            className="h-auto w-full max-w-sm object-contain"
          />
        </div>
      </section>

      {/* Invitation details section */}
      <InvitationDetails />

      {/* Scratch card section */}
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
            className="rounded-full border border-white/20 bg-black/25 px-5 py-3 text-sm tracking-wide text-white backdrop-blur-sm"
          >
            Touch to Open
          </div>
        </div>

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
      </div>
    </main>
  );
}
