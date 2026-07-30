"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Car, MapPin, PhoneCall, Wifi } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";

export function LocationSection() {
  const reduce = useReducedMotion();
  const address = `${siteConfig.business.address.street}, ${siteConfig.business.address.city}, ${siteConfig.business.address.region} ${siteConfig.business.address.postalCode}`;
  const tel = `tel:${siteConfig.business.phone.replace(/[^\d+]/g, "")}`;

  return (
    <section id="visit" aria-label="Location and visit us" className="bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Visit us</h2>
          <p className="mt-2 max-w-prose text-sm text-muted-foreground sm:text-base">
            One-tap directions, quick call, and a map that works beautifully on mobile.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="overflow-hidden rounded-2xl border border-border bg-background"
          >
            <div className="aspect-[16/12] w-full">
              <iframe
                title={`${siteConfig.business.name} map`}
                src={siteConfig.maps.embedUrl}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google map embed"
              />
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="text-sm font-semibold">Address</div>
              <p className="mt-2 text-sm text-muted-foreground">{address}</p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="min-h-11">
                  <a href={siteConfig.maps.directionsUrl} target="_blank" rel="noreferrer">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    Get Directions
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-h-11">
                  <a href={tel}>
                    <PhoneCall className="h-4 w-4" aria-hidden="true" />
                    Call Café
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background p-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Car className="h-4 w-4 text-primary" aria-hidden="true" />
                  Parking
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Street + nearby garage options.</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Wifi className="h-4 w-4 text-primary" aria-hidden="true" />
                  Wi‑Fi
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Fast, reliable connection.</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                  Seating
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Expanded indoor seating.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

