"use client";

import { useEffect, useRef } from "react";

/**
 * CursorTrail
 * - Listens for pointer movements and creates transient footprint elements
 * - Footprints are absolutely positioned into a container appended to body
 * - Each footprint self-destructs after animation finishes
 */
export default function CursorTrail() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // create container
    const container = document.createElement("div");
    container.className = "cursor-trail-container";
    container.setAttribute("aria-hidden", "true");
    document.body.appendChild(container);
    containerRef.current = container;

    let lastTime = 0;
    const spacing = 8; // pixels between footprints

    function onMove(e: PointerEvent) {
      // throttle by spacing to avoid too many elements
      const now = Date.now();
      if (now - lastTime < 16) return; // ~60fps
      lastTime = now;

      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      const x = e.clientX;
      const y = e.clientY;

      const el = document.createElement("div");
      el.className = "cursor-footprint";
      // position centered at pointer
      el.style.left = `${x - 12}px`;
      el.style.top = `${y - 12}px`;

      // random rotation and scale for variety
      const rot = (Math.random() - 0.5) * 30;
      const scale = 0.7 + Math.random() * 0.6;
      el.style.transform = `translate3d(0,0,0) rotate(${rot}deg) scale(${scale})`;

      containerRef.current.appendChild(el);

      // remove after animation (matches CSS .fade-out duration)
      const removeAfter = 900;
      setTimeout(() => {
        el.classList.add("cursor-footprint--hide");
        setTimeout(() => el.remove(), 450);
      }, removeAfter);
    }

    window.addEventListener("pointermove", onMove);

    return () => {
      window.removeEventListener("pointermove", onMove);
      container.remove();
      containerRef.current = null;
    };
  }, []);

  return null;
}
