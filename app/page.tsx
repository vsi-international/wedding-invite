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
          <div className="mt-1 flex flex-col items-center">
            <div className="font-playfair text-[32px] tracking-[0.32em] text-[#817844] sm:text-[38px]">
              D&nbsp;&nbsp;N
            </div>
            <div className="-mt-1 h-12 w-px bg-[#b7ae87]" />
          </div>

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

          <div className="mt-8">
            <h2 className="text-[30px] font-light uppercase tracking-[0.16em] text-[#817844] sm:text-[42px]">
              Daniyal Tariq
            </h2>
            <p className="mt-1 text-[13px] font-light text-[#8e8662] sm:text-[16px]">
              S/o Mr. &amp; Mrs. Tariq Ekhlas
            </p>
          </div>

          <div className="mt-4 text-[24px] italic text-[#40382e] sm:text-[32px]">
            and
          </div>

          <div className="mt-3">
            <h2 className="text-[30px] font-light uppercase tracking-[0.16em] text-[#817844] sm:text-[42px]">
              Noor Ijaz
            </h2>
            <p className="mt-1 text-[13px] font-light text-[#8e8662] sm:text-[16px]">
              D/o Mr. &amp; Mrs. Ijaz Malik
            </p>
          </div>

          <div className="mt-7">
            <p className="text-[14px] uppercase tracking-[0.18em] text-[#8e8662] sm:text-[17px]"></p>
          </div>

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

function PlainCurtain({
  side,
  panelRef,
  innerRef,
}: {
  side: "left" | "right";
  panelRef: React.RefObject<HTMLDivElement | null>;
  innerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const isLeft = side === "left";

  return (
    <div
      ref={panelRef}
      className={`absolute top-0 z-20 h-full w-1/2 overflow-hidden ${
        isLeft ? "left-0 origin-left" : "right-0 origin-right"
      }`}
    >
      <div
        ref={innerRef}
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #7b0f1d 0%, #6d0d19 25%, #631019 50%, #5a0d15 75%, #4c0810 100%)",
        }}
      >
        {/* simple fabric folds */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 10px, rgba(0,0,0,0.08) 10px, rgba(0,0,0,0.08) 24px)",
          }}
        />

        {/* soft vertical depth */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_12%,rgba(0,0,0,0.06)_55%,rgba(0,0,0,0.16)_100%)]" />

        {/* outer edge shadow */}
        <div
          className={`absolute top-0 h-full w-8 ${
            isLeft
              ? "left-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.22)_0%,transparent_100%)]"
              : "right-0 bg-[linear-gradient(270deg,rgba(0,0,0,0.22)_0%,transparent_100%)]"
          }`}
        />

        {/* center edge highlight */}
        <div
          className={`absolute top-0 h-full w-[2px] ${
            isLeft ? "right-0 bg-white/10" : "left-0 bg-white/10"
          }`}
        />
      </div>
    </div>
  );
}

function LocationsSection() {
  const locations = [
    {
      title: "Mehndi Lagwayi",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7983.382699068892!2d74.45416370124397!3d31.41485898641428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI1JzAxLjUiTiA3NMKwMjcnNTQuMCJF!5e1!3m2!1sen!2s!4v1773756656415!5m2!1sen!2s",
    },
    {
      title: "Shendi",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2633.4714528407653!2d74.46241307560737!3d31.417090974261512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI1JzAxLjUiTiA3NMKwMjcnNTQuMCJF!5e1!3m2!1sen!2s!4v1773757012785!5m2!1sen!2s",
    },
    {
      title: "Walima",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2635.256075387918!2d74.22441477560486!3d31.3534659742908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDIxJzEyLjUiTiA3NMKwMTMnMzcuMiJF!5e1!3m2!1sen!2s!4v1773757044578!5m2!1sen!2s",
    },
  ];

  return (
    <section className="bg-[#f9ecd2] px-4 py-14">
      <div className="mx-auto w-full max-w-sm">
        <div className="mb-8 text-center">
          <h2 className="text-[28px] font-light uppercase tracking-[0.18em] text-[#817844]">
            Locations
          </h2>
          <div className="mx-auto mt-3 h-px w-16 bg-[#b7ae87]" />
        </div>

        <div className="space-y-8">
          {locations.map((location) => (
            <div
              key={location.title}
              className="overflow-hidden rounded-[24px] border border-[#d8cfad] bg-[#f5e7c8] shadow-[0_8px_30px_rgba(124,117,77,0.08)]"
            >
              <div className="px-5 pb-4 pt-5 text-center">
                <h3 className="text-[18px] font-light uppercase tracking-[0.12em] text-[#817844]">
                  {location.title}
                </h3>
              </div>

              <div className="px-4 pb-4">
                <div className="overflow-hidden rounded-[18px] border border-[#d8cfad]">
                  <iframe
                    src={location.mapSrc}
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const leftInnerRef = useRef<HTMLDivElement>(null);
  const rightInnerRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenCurtains = () => {
    if (opened || isAnimating) return;

    setIsAnimating(true);

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        setOpened(true);
        setIsAnimating(false);

        if (overlayRef.current) {
          overlayRef.current.style.pointerEvents = "none";
        }
      },
    });

    tl.to(
      hintRef.current,
      {
        opacity: 0,
        y: 8,
        duration: 0.25,
        ease: "power2.out",
      },
      0
    )
      .to(
        leftInnerRef.current,
        {
          x: 10,
          duration: 0.18,
        },
        0
      )
      .to(
        rightInnerRef.current,
        {
          x: -10,
          duration: 0.18,
        },
        0
      )
      .to(
        leftCurtainRef.current,
        {
          x: "-102%",
          skewY: -3,
          scaleX: 0.96,
          duration: 1.1,
        },
        0.12
      )
      .to(
        rightCurtainRef.current,
        {
          x: "102%",
          skewY: 3,
          scaleX: 0.96,
          duration: 1.1,
        },
        0.12
      )
      .to(
        leftInnerRef.current,
        {
          x: -18,
          scaleX: 1.04,
          duration: 1.1,
        },
        0.12
      )
      .to(
        rightInnerRef.current,
        {
          x: 18,
          scaleX: 1.04,
          duration: 1.1,
        },
        0.12
      )
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        0.95
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

      {/* Locations section */}
      <LocationsSection />

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
        <PlainCurtain
          side="left"
          panelRef={leftCurtainRef}
          innerRef={leftInnerRef}
        />
        <PlainCurtain
          side="right"
          panelRef={rightCurtainRef}
          innerRef={rightInnerRef}
        />

        <div className="absolute left-1/2 top-0 z-30 h-full w-px -translate-x-1/2 bg-white/10" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={hintRef}
            className="rounded-full border border-white/20 bg-black/25 px-5 py-3 text-sm tracking-wide text-white backdrop-blur-sm"
          >
            Touch to Open
          </div>
        </div>
      </div>
    </main>
  );
}
