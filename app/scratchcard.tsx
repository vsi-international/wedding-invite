"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

type ScratchCircleProps = {
  value: string;
  onReveal: () => void;
};

type ScratchSetProps = {
  title: string;
  values: [string, string, string];
  imageSrc: string;
  imageAlt: string;
};

function ScratchCircle({ value, onReveal }: ScratchCircleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const revealedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 110;
    canvas.width = size;
    canvas.height = size;

    const drawCover = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, size, size);

      const gradient = ctx.createLinearGradient(0, 0, size, size);
      gradient.addColorStop(0, "#f7e08a");
      gradient.addColorStop(0.25, "#d4af37");
      gradient.addColorStop(0.5, "#b88917");
      gradient.addColorStop(0.75, "#e6c35c");
      gradient.addColorStop(1, "#c9a227");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(255,255,255,0.18)";
      ctx.lineWidth = 1;

      for (let i = 10; i < size; i += 10) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(size, i);
        ctx.stroke();
      }

      ctx.globalCompositeOperation = "destination-out";
    };

    const getPoint = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();

      if ("touches" in e) {
        const touch = e.touches[0];
        if (!touch) return null;

        return {
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
        };
      }

      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const scratchAt = (x: number, y: number) => {
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fill();
    };

    const checkReveal = () => {
      if (revealedRef.current) return;

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let transparentPixels = 0;

      for (let i = 3; i < imageData.length; i += 4) {
        if (imageData[i] === 0) transparentPixels++;
      }

      const totalPixels = canvas.width * canvas.height;
      const scratchedPercent = (transparentPixels / totalPixels) * 100;

      if (scratchedPercent > 45) {
        revealedRef.current = true;

        gsap.to(canvas, {
          opacity: 0,
          duration: 0.35,
          ease: "power2.out",
        });

        onReveal();
      }
    };

    const startScratch = (e: MouseEvent | TouchEvent) => {
      isDrawing.current = true;
      const point = getPoint(e);
      if (!point) return;

      scratchAt(point.x, point.y);
      checkReveal();
    };

    const endScratch = () => {
      isDrawing.current = false;
    };

    const scratch = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing.current) return;

      if ("touches" in e) e.preventDefault();

      const point = getPoint(e);
      if (!point) return;

      scratchAt(point.x, point.y);
      checkReveal();
    };

    drawCover();

    canvas.addEventListener("mousedown", startScratch as EventListener);
    canvas.addEventListener("mousemove", scratch as EventListener);
    window.addEventListener("mouseup", endScratch);

    canvas.addEventListener("touchstart", startScratch as EventListener, {
      passive: false,
    });
    canvas.addEventListener("touchmove", scratch as EventListener, {
      passive: false,
    });
    window.addEventListener("touchend", endScratch);

    return () => {
      canvas.removeEventListener("mousedown", startScratch as EventListener);
      canvas.removeEventListener("mousemove", scratch as EventListener);
      window.removeEventListener("mouseup", endScratch);

      canvas.removeEventListener("touchstart", startScratch as EventListener);
      canvas.removeEventListener("touchmove", scratch as EventListener);
      window.removeEventListener("touchend", endScratch);
    };
  }, [onReveal]);

  return (
    <div className="relative h-[110px] w-[110px]">
      <div className="absolute inset-0 flex items-center justify-center rounded-full border border-black/10 bg-white text-2xl font-light text-[#3f3426] shadow-[0_6px_30px_rgba(0,0,0,0.12)]">
        {value}
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full rounded-full touch-none"
      />
    </div>
  );
}

function ScratchSet({ title, values, imageSrc, imageAlt }: ScratchSetProps) {
  const scratchRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [revealedCount, setRevealedCount] = useState(0);
  const [hasTransitioned, setHasTransitioned] = useState(false);

  useEffect(() => {
    if (revealedCount < 3 || hasTransitioned) return;

    setHasTransitioned(true);

    const tl = gsap.timeline();

    tl.to(scratchRef.current, {
      x: "-100%",
      opacity: 0,
      duration: 0.9,
      ease: "power3.inOut",
    }).fromTo(
      cardRef.current,
      {
        x: "100%",
        opacity: 0,
        scale: 0.96,
      },
      {
        x: "0%",
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "power3.inOut",
      },
      "-=0.65"
    );
  }, [revealedCount, hasTransitioned]);

  const handleCircleReveal = () => {
    setRevealedCount((prev) => prev + 1);
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f9ecd2]">
      <div
        ref={scratchRef}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
      >
        <p className="mb-8 text-sm uppercase tracking-[0.35em] text-[#7a6548]">
          {title}
        </p>

        <div className="flex items-center justify-center gap-4">
          <ScratchCircle value={values[0]} onReveal={handleCircleReveal} />
          <ScratchCircle value={values[1]} onReveal={handleCircleReveal} />
          <ScratchCircle value={values[2]} onReveal={handleCircleReveal} />
        </div>

        <p className="mt-8 text-sm text-[#8d7758]">Scratch all three circles</p>
      </div>

   <div
  ref={cardRef}
  className="absolute inset-0 flex translate-x-full items-center justify-center opacity-0"
>
  <div className="w-full max-w-[95vw] sm:max-w-md">
    {/* A6 aspect ratio */}
    <div className="relative w-full aspect-[105/148] overflow-hidden rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 640px) 95vw, 420px"
        priority={false}
      />
    </div>
  </div>
</div>
    </div>
  );
}

export default function ScratchCard() {
  return (
    <section className="relative overflow-hidden bg-[#f9ecd2] text-[#3f3426]">
      <ScratchSet
        title="Event One"
        values={["18", "APR", "2026"]}
        imageSrc="/3.png"
        imageAlt="Wedding event one card"
      />

      <ScratchSet
        title="Event Two"
        values={["19", "APR", "2026"]}
        imageSrc="/4.png"
        imageAlt="Wedding event two card"
      />

      <ScratchSet
        title="Event Three"
        values={["20", "APR", "2026"]}
        imageSrc="/5.png"
        imageAlt="Wedding event three card"
      />
    </section>
  );
}
