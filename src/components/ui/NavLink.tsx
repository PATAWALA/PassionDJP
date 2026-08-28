"use client";

import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, children, onClick, className = "" }: NavLinkProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={className}
      style={{
        color: isHovered ? "#1e3a5f" : "#1f2937",
        backgroundColor: "transparent",
        textDecoration: "none",
        transition: "color 0.2s ease",
        display: "inline-block",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
}