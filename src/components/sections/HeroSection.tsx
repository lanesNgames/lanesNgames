"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section aria-label="Hero" className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:py-14 lg:grid-cols-2 lg:items-center">
        <div className="space-y-5">
          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 8 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-2 text-xs font-medium text-muted-foreground"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {siteConfig.business.neighborhoodCallout}
          </motion.p>

          <motion.h1
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {siteConfig.business.tagline}
          </motion.h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            Fast pickup. A refreshed space. A dialed espresso program. Order ahead or swing in —
            your neighborhood café, elevated.
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="min-h-11">
              <a href={siteConfig.ordering.primaryUrl} target="_blank" rel="noreferrer">
                Order Online <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-h-11">
              <a href="#menu">View Menu</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-2xl border border-border bg-muted/20 p-3"
          aria-label="Ambient cafe photos"
        >
          <div className="grid grid-cols-2 gap-3">
            {siteConfig.media.ambientPhotos.map((p, idx) => (
              <div
                key={p.src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-background"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                  priority={idx < 2}
                />
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            No background video on mobile — just lightweight images for speed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

