"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Search, ShoppingBag, Sparkles, WheatOff, Leaf } from "lucide-react";
import { siteConfig, type DietaryTag, type MenuCategory, type MenuItem } from "@/data/siteConfig";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

function tagLabel(tag: DietaryTag) {
  switch (tag) {
    case "GF":
      return "GF";
    case "VG":
      return "VG";
    case "V":
      return "V";
  }
}

function tagIcon(tag: DietaryTag) {
  if (tag === "GF") return WheatOff;
  if (tag === "VG") return Leaf;
  return Sparkles;
}

function orderItemUrl(itemName: string) {
  const u = new URL(siteConfig.ordering.primaryUrl);
  u.searchParams.set("item", itemName);
  return u.toString();
}

function itemMatches(item: MenuItem, query: string, tags: DietaryTag[]) {
  const q = query.trim().toLowerCase();
  const queryOk =
    q.length === 0 ||
    item.name.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q);
  const tagsOk = tags.length === 0 || tags.every((t) => item.dietaryTags.includes(t));
  return queryOk && tagsOk;
}

function CategoryPanel({
  category,
  query,
  tags
}: {
  category: MenuCategory;
  query: string;
  tags: DietaryTag[];
}) {
  const signatures = category.items.filter((i) => i.isSignature && itemMatches(i, query, tags));
  const rest = category.items.filter((i) => !i.isSignature && itemMatches(i, query, tags));

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-semibold">{category.label}</h3>
        {category.description ? (
          <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
        ) : null}
      </div>

      {signatures.length > 0 ? (
        <section aria-label="House signatures" className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">House Signatures</div>
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {signatures.map((item) => (
              <Card key={item.name} className="border-primary/30 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-3">
                    <span>{item.name}</span>
                    <span className="text-sm font-semibold">${item.price.toFixed(2)}</span>
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {item.dietaryTags.map((t) => (
                    <Badge key={t} variant="secondary">
                      {tagLabel(t)}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="justify-end">
                  <Button asChild size="sm" className="min-h-11">
                    <a href={orderItemUrl(item.name)} target="_blank" rel="noreferrer">
                      <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                      Order Item
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <section aria-label="Menu items" className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          {rest.map((item) => (
            <Card key={item.name}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-3">
                  <span>{item.name}</span>
                  <span className="text-sm font-semibold">${item.price.toFixed(2)}</span>
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {item.dietaryTags.map((t) => (
                  <Badge key={t} variant="outline" className="bg-background">
                    {tagLabel(t)}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="justify-end">
                <Button asChild size="sm" variant="outline" className="min-h-11">
                  <a href={orderItemUrl(item.name)} target="_blank" rel="noreferrer">
                    <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                    Order Item
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {signatures.length === 0 && rest.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-sm text-muted-foreground">
            No items match your search/filter.
          </div>
        ) : null}
      </section>
    </div>
  );
}

export function MenuSection() {
  const reduce = useReducedMotion();
  const categories = siteConfig.menu.categories;
  const defaultTab = categories[0]?.id ?? "espresso";

  const [tab, setTab] = useState<string>(defaultTab);
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState<DietaryTag[]>([]);

  const tagOptions: { tag: DietaryTag; label: string }[] = useMemo(
    () => [
      { tag: "GF", label: "Gluten‑Free" },
      { tag: "VG", label: "Vegan" },
      { tag: "V", label: "Vegetarian" }
    ],
    []
  );

  const activeCategory = categories.find((c) => c.id === tab) ?? categories[0];

  return (
    <section id="menu" aria-label="Menu" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Menu</h2>
          <p className="mt-2 max-w-prose text-sm text-muted-foreground sm:text-base">
            Native, mobile-first menu with quick filters — no PDFs.
          </p>
        </motion.div>

        <div className="mt-6 space-y-4">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search drinks or food…"
                aria-label="Search menu"
                className="pl-9"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {tagOptions.map((o) => {
                const active = tags.includes(o.tag);
                const Icon = tagIcon(o.tag);
                return (
                  <button
                    key={o.tag}
                    type="button"
                    onClick={() =>
                      setTags((prev) =>
                        prev.includes(o.tag) ? prev.filter((t) => t !== o.tag) : [...prev, o.tag]
                      )
                    }
                    className={[
                      "inline-flex min-h-11 items-center gap-2 rounded-full border px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
                      active ? "border-primary/40 bg-primary/10 text-primary" : "border-border bg-background"
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {o.label}
                  </button>
                );
              })}
            </div>
          </div>

          <Tabs value={tab} onValueChange={setTab}>
            <TabsList aria-label="Menu categories">
              {categories.map((c) => (
                <TabsTrigger key={c.id} value={c.id}>
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((c) => (
              <TabsContent key={c.id} value={c.id}>
                <CategoryPanel category={c} query={query} tags={tags} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

