"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
  category: "pricing" | "service" | "general";
}

const faqs: FAQItem[] = [
  {
    question: "How much does lawn care service cost?",
    answer: "Our pricing depends on the size of your property and the services you need. We offer FREE estimates with no obligation. Most residential lawns in our service area range from $35-$75 for basic mow, edge, and blow service. We believe in honest, upfront pricing with no hidden fees.",
    category: "pricing",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Absolutely! All our estimates are 100% free with no obligation. We'll assess your property, discuss your needs, and provide a detailed quote. We typically respond within 2 hours during business hours.",
    category: "pricing",
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Katy, Richmond, Fulshear, and surrounding West Houston areas including Cinco Ranch, Cross Creek Ranch, Pecan Grove, Sugar Land, and Cypress. Not sure if we cover your area? Give us a call!",
    category: "general",
  },
  {
    question: "Do you speak Spanish?",
    answer: "Yes! Se Habla Español. Our bilingual team is here to serve our diverse community. Feel free to communicate with us in whichever language you're most comfortable with.",
    category: "general",
  },
  {
    question: "How often should I have my lawn mowed?",
    answer: "In Texas, we typically recommend weekly mowing during the growing season (spring and summer) and bi-weekly during cooler months. However, this can vary based on your grass type and specific conditions. We'll help you determine the best schedule for your lawn.",
    category: "service",
  },
  {
    question: "What's included in your lawn maintenance service?",
    answer: "Our standard lawn maintenance includes mowing, edging along sidewalks and driveways, trimming around obstacles, and blowing debris off hard surfaces. We can also add services like weed control, fertilization, and hedge trimming based on your needs.",
    category: "service",
  },
  {
    question: "Do you offer Christmas light installation?",
    answer: "Yes! We offer professional Christmas light installation, including design consultation, professional-grade lights (rental available), complete installation, maintenance throughout the season, and hassle-free takedown. Book early as spots fill up fast!",
    category: "service",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, Moreno Landscaping is fully licensed and insured. We carry liability insurance to protect both our team and your property. We're happy to provide proof of insurance upon request.",
    category: "general",
  },
  {
    question: "What if it rains on my scheduled service day?",
    answer: "Weather happens! If rain prevents us from servicing your property on the scheduled day, we'll reschedule for the next available day at no extra charge. We'll always communicate with you about any schedule changes.",
    category: "service",
  },
  {
    question: "Can I get a one-time service or do I need a contract?",
    answer: "We offer both! While many customers prefer our regular maintenance programs for consistent care, we're happy to provide one-time services for special occasions, cleanups, or to try us out before committing to regular service.",
    category: "pricing",
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-start justify-between gap-4 text-left group"
      >
        <span className="font-heading font-semibold text-brand-green-dark group-hover:text-brand-green-primary transition-colors">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-brand-green-primary flex-shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-gray-600 leading-relaxed pr-8">{item.answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<"all" | "pricing" | "service" | "general">("all");

  const filteredFaqs = filter === "all"
    ? faqs
    : faqs.filter((faq) => faq.category === filter);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-green-primary/10 text-brand-green-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services. Can&apos;t find what
            you&apos;re looking for? Give us a call!
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { key: "all", label: "All Questions" },
            { key: "pricing", label: "Pricing" },
            { key: "service", label: "Services" },
            { key: "general", label: "General" },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key as typeof filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                filter === cat.key
                  ? "bg-brand-green-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
          {filteredFaqs.map((faq, index) => (
            <FAQItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 bg-gradient-to-r from-brand-green-dark to-brand-green-primary rounded-2xl p-8 text-center text-white">
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-200 mb-6 max-w-md mx-auto">
            We&apos;re here to help! Give us a call and we&apos;ll be happy to answer
            any questions you have about our services.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
