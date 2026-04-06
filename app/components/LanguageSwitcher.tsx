"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import type { Locale } from "../../lib/i18n";
import { locales } from "../../lib/i18n";
import type { Messages } from "../../lib/messages/types";

type Props = {
  locale: Locale;
  langSwitcher: Messages["langSwitcher"];
  ariaLabel: string;
  /** Вирівнювання випадаючого списку відносно кнопки */
  menuAlign?: "end" | "start" | "center";
  /** Після вибору мови (наприклад, закрити мобільне меню) */
  onPick?: () => void;
  /** Стиль кнопки-тригера */
  triggerClassName?: string;
};

export default function LanguageSwitcher({
  locale,
  langSwitcher,
  ariaLabel,
  menuAlign = "end",
  onPick,
  triggerClassName,
}: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const menuPosition =
    menuAlign === "end"
      ? "right-0"
      : menuAlign === "start"
        ? "left-0"
        : "left-1/2 -translate-x-1/2";

  const defaultTrigger =
    "flex items-center gap-1.5 rounded-xl border border-[#E0E0D8] bg-white/95 px-2.5 py-2 shadow-sm transition-all duration-200 hover:border-[#222221]/20 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9DC0A]/70 active:scale-[0.98]";

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        className={`${defaultTrigger} ${open ? "border-[#222221]/25 ring-2 ring-[#F9DC0A]/35 shadow-md" : ""} ${triggerClassName ?? ""}`}
      >
        <Globe
          className="h-[1.125rem] w-[1.125rem] shrink-0 text-[#222221]"
          strokeWidth={2}
          aria-hidden
        />
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 text-[#6F6F6E] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2.5}
          aria-hidden
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={ariaLabel}
          className={`absolute top-full z-[80] mt-2 min-w-[10.5rem] overflow-hidden rounded-xl border border-[#E0E0D8] bg-white py-1 shadow-xl shadow-black/[0.08] ${menuPosition}`}
        >
          {locales.map((loc) => {
            const active = loc === locale;
            return (
              <Link
                key={loc}
                href={`/${loc}`}
                role="option"
                aria-selected={active}
                onClick={() => {
                  setOpen(false);
                  onPick?.();
                }}
                className={`flex items-center justify-between gap-3 px-3.5 py-2.5 text-sm font-bold tracking-wide transition-colors ${
                  active
                    ? "bg-[#F9DC0A]/18 text-[#222221]"
                    : "text-[#222221] hover:bg-[#F6F6F6]"
                }`}
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                <span>{langSwitcher[loc]}</span>
                {active ? (
                  <Check
                    className="h-4 w-4 shrink-0 text-[#222221]"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                ) : (
                  <span className="w-4 shrink-0" aria-hidden />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
