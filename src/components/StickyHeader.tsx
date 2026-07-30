"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Clock3, Menu, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";
import { getCafeNow, isOpenNow } from "@/lib/hours";
import { Button } from "@/components/ui/button";

function useOpenStatus() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return useMemo(() => {
    const now = getCafeNow(siteConfig.business.timeZone);
    const open = isOpenNow(siteConfig.business.hours, now.weekday, now.minutes);
    return { open, tick };
  }, [tick]);
}

export function StickyHeader() {
  const { open } = useOpenStatus();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
      aria-label="Site header"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="min-h-11 rounded-md px-2 py-2 text-left leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
          aria-label={`${siteConfig.business.name} home`}
        >
          <div className="text-sm font-semibold tracking-tight sm:text-base">
            {siteConfig.business.name}
          </div>
          <div className="text-xs text-muted-foreground">{siteConfig.business.tagline}</div>
        </Link>

        <div className="flex items-center gap-2">
          <div
            className={cn(
              "hidden min-h-11 items-center gap-2 rounded-full border px-3 text-sm sm:flex",
              open ? "border-emerald-200 bg-emerald-50" : "border-border bg-muted"
            )}
            aria-label={open ? "Open now" : "Closed now"}
          >
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                open ? "bg-emerald-500" : "bg-muted-foreground"
              )}
              aria-hidden="true"
            />
            <Clock3 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <span className="font-medium">{open ? "Open Now" : "Closed"}</span>
          </div>

          <Link
            href="#menu"
            className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
          >
            <Menu className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Menu</span>
            <span className="sr-only sm:not-sr-only sm:hidden">Menu</span>
          </Link>

          <Button asChild size="sm" className="min-h-11">
            <a href={siteConfig.ordering.primaryUrl} target="_blank" rel="noreferrer">
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              <span>Order Online</span>
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}

