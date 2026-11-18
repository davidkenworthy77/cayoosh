"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site, type NavHref } from "@/data/site";

type Props = {
  /** Which nav item is underlined. */
  active?: NavHref | null;
  /** "dark" = white text over a dark first section; "light" = black text on white. */
  theme: "dark" | "light";
};

export function Header({ active = null, theme }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className={`header header--${theme}${open ? " header--open" : ""}`}>
      <a href="#page" className="skip-link">
        Skip to Content
      </a>
      <div className="header-inner">
        <Link href="/" className="header-title" onClick={() => setOpen(false)}>
          {site.name}
        </Link>
        <nav className="header-nav" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.href === active ? "is-active" : undefined}
              aria-current={item.href === active ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="header-burger"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="visually-hidden">
            {open ? "Close Menu" : "Open Menu"}
          </span>
          <span className="header-burger-line" aria-hidden="true" />
          <span className="header-burger-line" aria-hidden="true" />
        </button>
      </div>
      <div className="header-menu" id="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
