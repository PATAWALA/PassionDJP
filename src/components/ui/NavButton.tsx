// src/components/ui/NavButton.tsx
"use client";

import { useRouter } from "next/navigation";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NavButton({ href, children, onClick, className = "" }: NavButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) onClick();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`text-base font-medium text-ink hover:text-primary transition-colors bg-transparent border-none cursor-pointer ${className}`}
      style={{ backgroundColor: "transparent" }}
    >
      {children}
    </button>
  );
}