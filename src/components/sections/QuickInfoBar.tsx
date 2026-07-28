"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock3, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { formatHours, getCafeNow, getTodayHours } from "@/lib/hours";

export function QuickInfoBar() {
  const reduce = useReducedMotion();
  const now = getCafeNow(siteConfig.business.timeZone);
  const today = getTodayHours(siteConfig.business.hours, now.weekday);
  const address = `${siteConfig.business.address.street}, ${siteConfig.business.address.city}`;

  return (
    <section
      aria-label="Quick info"
      className="sticky top-16 z-40 border-y border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/75"
    >
      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: 8 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45 }}
        className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex min-h-11 items-center gap-2 rounded-md bg-muted/40 px-3">
            <MapPin className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <span className="font-medium">{address}</span>
          </div>

          <div className="inline-flex min-h-11 items-center gap-2 rounded-md bg-muted/40 px-3">
            <Clock3 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <span className="font-medium">Today:</span>
            <span className="text-muted-foreground">{formatHours(today)}</span>
          </div>
        </div>

        <div className="text-xs text-muted-foreground sm:text-sm">
          {siteConfig.business.neighborhoodCallout}
        </div>
      </motion.div>
    </section>
  );
}

