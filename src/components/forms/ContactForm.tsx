"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackFormSubmit } from "@/lib/analytics";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-().+]+$/, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  formspreeId?: string;
  className?: string;
}

export function ContactForm({
  formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "",
  className,
}: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error" | "rateLimit"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Lead: ${data.service} - ${data.name}`,
        }),
      });

      if (response.ok) {
        // Track the lead generation
        trackFormSubmit('contact_form', data.service);
        setSubmitStatus("success");
        reset();
      } else if (response.status === 429) {
        setSubmitStatus("rateLimit");
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  // Success state
  if (submitStatus === "success") {
    return (
      <div className={cn("text-center py-12", className)}>
        <CheckCircle className="w-16 h-16 text-brand-green-primary mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-brand-green-dark mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600 mb-6">
          We&apos;ve received your message and will get back to you within 2
          hours during business hours.
        </p>
        <Button variant="outline" onClick={() => setSubmitStatus("idle")}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-6", className)}
    >
      {/* Error banner */}
      {submitStatus === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>
            Something went wrong. Please try again or call us directly at{" "}
            <a href="tel:+18327180431" className="font-bold underline">
              832.718.0431
            </a>
          </p>
        </div>
      )}

      {/* Rate limit banner */}
      {submitStatus === "rateLimit" && (
        <div className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>
            Too many submissions. Please wait a moment and try again, or call us
            at{" "}
            <a href="tel:+18327180431" className="font-bold underline">
              832.718.0431
            </a>
          </p>
        </div>
      )}

      {/* Honeypot field for spam protection - hidden from users */}
      <input
        type="text"
        name="_gotcha"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Your Name *
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className={cn(
            "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-green-primary focus:border-transparent transition-shadow",
            errors.name ? "border-red-500" : "border-gray-300"
          )}
          placeholder="John Smith"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email & Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={cn(
              "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-green-primary focus:border-transparent transition-shadow",
              errors.email ? "border-red-500" : "border-gray-300"
            )}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={cn(
              "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-green-primary focus:border-transparent transition-shadow",
              errors.phone ? "border-red-500" : "border-gray-300"
            )}
            placeholder="(832) 555-1234"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Service Interested In *
        </label>
        <select
          id="service"
          {...register("service")}
          className={cn(
            "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-green-primary focus:border-transparent transition-shadow bg-white",
            errors.service ? "border-red-500" : "border-gray-300"
          )}
        >
          <option value="">Select a service...</option>
          {services.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Multiple Services">Multiple Services</option>
          <option value="Other">Other / Not Sure</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Tell Us About Your Project *
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className={cn(
            "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-green-primary focus:border-transparent transition-shadow resize-none",
            errors.message ? "border-red-500" : "border-gray-300"
          )}
          placeholder="Describe your lawn care needs, property size, any specific concerns..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="green"
        size="lg"
        className="w-full"
        disabled={submitStatus === "loading" || submitStatus === "rateLimit"}
      >
        {submitStatus === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
            Sending...
          </>
        ) : (
          "Request Free Estimate"
        )}
      </Button>

      {/* Privacy note */}
      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to be contacted regarding your
        inquiry. We respect your privacy and will never share your information.
      </p>
    </form>
  );
}
