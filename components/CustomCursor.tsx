'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth lag effect for outer circle ring
  useEffect(() => {
    let animationFrameId: number;

    const followMouse = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Add hover state for interactive elements
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Dot Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] w-2 h-2 bg-[#66D9ED] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hidden md:block"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* Outer Ring Cursor */}
      <div
        className={`fixed pointer-events-none z-[9998] rounded-full border border-[#66D9ED]/60 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out hidden md:block ${
          isHovered ? 'w-12 h-12 border-[#DF058D] bg-[#DF058D]/10 scale-110' : 'w-8 h-8'
        }`}
        style={{ left: `${trailingPos.x}px`, top: `${trailingPos.y}px` }}
      />
    </>
  );
}
