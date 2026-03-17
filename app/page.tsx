"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import ScratchCard from "./scratchcard";

function InvitationDetails() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f9ecd2] px-4 py-4">
      <div className="relative w-full max-w-sm aspect-[105/148] overflow-hidden bg-[#f9ecd2] text-[#7c754d]">
        {/* soft vintage texture */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-[6%] top-[8%] h-24 w-24 rounded-full bg-[#d9d0b4] blur-3xl" />
          <div className="absolute right-[8%] top-[16%] h-20 w-20 rounded-full bg-[#d9d0b4] blur-3xl" />
          <div className="absolute left-[18%] top-[42%] h-20 w-20 rounded-full bg-[#d9d0b4] blur-3xl" />
          <div className="absolute right-[14%] bottom-[18%] h-24 w-24 rounded-full bg-[#d9d0b4] blur-3xl" />
          <div className="absolute left-[10%] bottom-[8%] h-24 w-24 rounded-full bg-[#d9d0b4] blur-3xl" />
        </div>

        {/* corner accents */}
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

        <div className="relative z-10 flex h-full flex-col px-6 pb-5 pt-7 text-center sm:px-8">
          {/* monogram */}
          <div className="mt-1 flex flex-col items-center">
            <div className="font-playfair text-[32px] tracking-[0.32em] text-[#817844] sm:text-[38px]">
              D&nbsp;&nbsp;N
            </div>
            <div className="-mt-1 h-12 w-px bg-[#b7ae87]" />
          </div>

          {/* intro */}
          <div className="mt-6 px-2">
            <p className="text-[11px] font-light uppercase leading-[1.95] tracking-[0.22em] sm:text-[13px]">
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
          <div className="mt-8">
            <h2 className="text-[30px] font-light uppercase tracking-[0.16em] text-[#817844] sm:text-[42px]">
              Daniyal Tariq
            </h2>
            <p className="mt-1 text-[13px] font-light text-[#8e8662] sm:text-[16px]">
              S/o Mr. &amp; Mrs. Tariq Ekhlas
            </p>
          </div>

          {/* and */}
          <div className="mt-4 text-[24px] italic text-[#40382e] sm:text-[32px]">
            and
          </div>

          {/* bride */}
          <div className="mt-3">
            <h2 className="text-[30px] font-light uppercase tracking-[0.16em] text-[#817844] sm:text-[42px]">
              Noor Ijaz
            </h2>
            <p className="mt-1 text-[13px] font-light text-[#8e8662] sm:text-[16px]">
              D/o Mr. &amp; Mrs. Ijaz Malik
            </p>
          </div>

          {/* time */}
          <div className="mt-7">
            <p className="text-[14px] uppercase tracking-[0.18em] text-[#8e8662] sm:text-[17px]"></p>
          </div>

          {/* RSVP */}
          <div className="mt-auto self-start pt-5 text-left">
            <h3 className="text-[17px] uppercase tracking-[0.08em] text-[#817844] sm:text-[20px]">
              RSVP
            </h3>
            <div className="mt-2 space-y-0.5 text-[11px] font-light leading-[1.7] text-[#7c754d] sm:text-[14px]">
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

function CurtainPanel({
  side,
  curtainRef,
}: {
  side: "left" | "right";
  curtainRef: React.RefObject<HTMLDivElement | null>;
}) {
  const isLeft = side === "left";

  return (
    <div
      ref={curtainRef}
      className={`absolute top-0 h-full w-1/2 overflow-hidden ${
        isLeft ? "left-0 origin-left" : "right-0 origin-right"
      }`}
    >
      {/* outer fabric */}
      <div
        className={`absolute inset-0 ${
          isLeft
            ? "bg-[linear-gradient(90deg,#3e000c_0%,#7c0b22_12%,#9f1731_28%,#7a0a20_45%,#a61d38_62%,#73091d_78%,#300007_100%)]"
            : "bg-[linear-gradient(270deg,#3e000c_0%,#7c0b22_12%,#9f1731_28%,#7a0a20_45%,#a61d38_62%,#73091d_78%,#300007_100%)]"
        }`}
      />

      {/* pleats */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: isLeft
            ? `repeating-linear-gradient(
                90deg,
                rgba(255,255,255,0.12) 0px,
                rgba(255,255,255,0.12) 10px,
                rgba(90,0,20,0.05) 10px,
                rgba(90,0,20,0.05) 28px,
                rgba(0,0,0,0.22) 28px,
                rgba(0,0,0,0.22) 42px
              )`
            : `repeating-linear-gradient(
                90deg,
                rgba(0,0,0,0.22) 0px,
                rgba(0,0,0,0.22) 14px,
                rgba(90,0,20,0.05) 14px,
                rgba(90,0,20,0.05) 30px,
                rgba(255,255,255,0.12) 30px,
                rgba(255,255,255,0.12) 42px
              )`,
        }}
      />

      {/* soft vertical shading */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_12%,rgba(0,0,0,0.1)_55%,rgba(0,0,0,0.28)_100%)]" />

      {/* center seam glow */}
      <div
        className={`absolute top-0 h-full w-[2px] ${
          isLeft ? "right-0" : "left-0"
        } bg-white/15`}
      />

      {/* side shadow for depth */}
      <div
        className={`absolute top-0 h-full w-10 ${
          isLeft
            ? "right-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.35)_100%)]"
            : "left-0 bg-[linear-gradient(270deg,transparent_0%,rgba(0,0,0,0.35)_100%)]"
        }`}
      />

      {/* gathered top fabric */}
      <div className="absolute left-0 top-0 h-12 w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.05)_35%,rgba(0,0,0,0.18)_100%)]" />

      {/* tie-back */}
      <div
        className={`absolute top-[42%] z-10 ${
          isLeft ? "right-2" : "left-2"
        }`}
      >
        <div className="relative h-20 w-6">
          <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-[#d9b86b]/80 shadow-[0_0_10px_rgba(217,184,107,0.3)]" />
          <div className="absolute left-1/2 top-1/2 h-4 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f3db9a]/60 bg-[#c79a42]/70 shadow-[0_0_12px_rgba(0,0,0,0.2)]" />
        </div>
      </div>

      {/* lower drape shadow */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.16)_100%)]" />
    </div>
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
      duration: 0.25,
      ease: "power2.out",
    })
      .to(
        leftCurtainRef.current,
        {
          x: "-108%",
          duration: 1.4,
          ease: "power3.inOut",
        },
        0
      )
      .to(
        rightCurtainRef.current,
        {
          x: "108%",
          duration: 1.4,
          ease: "power3.inOut",
        },
        0
      )
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.18"
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
        {/* backdrop behind curtains */}
        <div className="absolute inset-0 bg-[#1f090d]" />

        {/* top curtain rod */}
        <div className="absolute left-0 top-3 z-30 w-full px-3">
          <div className="relative h-3 rounded-full bg-[linear-gradient(180deg,#d8bf82_0%,#b48a42_40%,#7f5a24_100%)] shadow-[0_3px_10px_rgba(0,0,0,0.35)]">
            <div className="absolute -left-1 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f2dfab_0%,#b88d44_55%,#7f5a24_100%)] shadow-[0_2px_8px_rgba(0,0,0,0.35)]" />
            <div className="absolute -right-1 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f2dfab_0%,#b88d44_55%,#7f5a24_100%)] shadow-[0_2px_8px_rgba(0,0,0,0.35)]" />
          </div>
        </div>

        {/* top valance */}
        <div className="absolute left-0 top-0 z-20 h-20 w-full overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-14 bg-[linear-gradient(180deg,#8a0e24_0%,#6a0719_55%,#3f000c_100%)] shadow-[0_8px_18px_rgba(0,0,0,0.28)]" />
          <div className="absolute inset-x-0 top-8 h-12 bg-[radial-gradient(circle_at_10%_0%,#b11d39_0%,#7b0b20_45%,#47000c_100%)] opacity-90" />
          <div className="absolute bottom-0 left-0 h-8 w-1/3 rounded-b-[100%] bg-[#5a0616]" />
          <div className="absolute bottom-0 left-1/3 h-10 w-1/3 rounded-b-[100%] bg-[#6f091b]" />
          <div className="absolute bottom-0 right-0 h-8 w-1/3 rounded-b-[100%] bg-[#5a0616]" />
        </div>

        <CurtainPanel side="left" curtainRef={leftCurtainRef} />
        <CurtainPanel side="right" curtainRef={rightCurtainRef} />

        {/* center opening line */}
        <div className="absolute left-1/2 top-0 z-30 h-full w-px -translate-x-1/2 bg-white/10" />

        {/* vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.18)_100%)]" />

        {/* hint */}
        <div className="absolute inset-0 z-40 flex items-center justify-center">
          <div
            ref={hintRef}
            className="rounded-full border border-white/20 bg-black/30 px-5 py-3 text-sm tracking-wide text-white backdrop-blur-sm"
          >
            Touch to Open
          </div>
        </div>
      </div>
    </main>
  );
}
