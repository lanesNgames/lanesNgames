"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BadgeDollarSign, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const STORAGE_KEY = "cafe_loyalty_opt_in_v1";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function LoyaltySection() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const existing = window.localStorage.getItem(STORAGE_KEY);
      if (existing) setSubmitted(true);
    } catch {
      // ignore storage failures
    }
  }, []);

  const helper = useMemo(() => {
    if (submitted) return "You’re set — we won’t ask again on this device.";
    return "$2 Off Your First Order in the New Space";
  }, [submitted]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!isValidEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ email: email.trim(), createdAt: Date.now() })
      );
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  }

  return (
    <section aria-label="Loyalty and newsletter" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl border border-border bg-muted/20"
        >
          <div className="grid gap-6 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                <BadgeDollarSign className="h-4 w-4" aria-hidden="true" />
                Loyalty offer
              </div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Join for perks and updates
              </h2>
              <p className="max-w-prose text-sm text-muted-foreground sm:text-base">{helper}</p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-border bg-background p-5 text-sm">
                <div className="font-semibold">Thanks for joining.</div>
                <p className="mt-2 text-muted-foreground">
                  Show this screen at checkout for your offer (or save it for later).
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-background p-5">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="relative flex-1">
                    <Mail
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      aria-label="Email address"
                      className="pl-9"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="min-h-11">
                    Get $2 Off
                  </Button>
                </div>
                {error ? (
                  <p className="mt-2 text-xs font-medium text-destructive" role="alert">
                    {error}
                  </p>
                ) : (
                  <p className="mt-2 text-xs text-muted-foreground">
                    Stored locally on this device to avoid repeat prompts.
                  </p>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

