"use client";
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";
import { useState } from "react";

const navLinks = [
  { itemName: "Register", href: "/register" },
  { itemName: "Login", href: "/login" },
  { itemName: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [input, setInput] = useState("");

  return (
    <div style={{ fontSize: "20px" }}>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.itemName}
            className={isActive ? "active" : "regulag"}
          >
            {link.itemName}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
