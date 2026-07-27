"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function RebrandStory() {
  const reduce = useReducedMotion();

  return (
    <section aria-label="Rebrand story" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
        >
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          The rebrand
        </motion.div>

        <motion.h2
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Same Warm Community, Elevated Experience
        </motion.h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {siteConfig.rebrandStory.legacyAcknowledgement}
            </p>
            <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
              {siteConfig.rebrandStory.evolution}
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-border bg-muted/20 p-5"
            aria-label="What's new"
          >
            <h3 className="text-sm font-semibold">What’s new</h3>
            <ul className="mt-3 space-y-2">
              {siteConfig.rebrandStory.upgrades.map((u) => (
                <li key={u} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-sm text-foreground">{u}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

