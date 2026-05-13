"use client";

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { submitLead } from "@/app/actions";
import { buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { leadSchema, type LeadInput } from "@/lib/schema";
import { cn } from "@/lib/utils";

const SUCCESS_TOAST =
  "Received. I will review this and be in touch within 24 hours.";
const ERROR_TOAST =
  "Something went wrong. Please try again or reach out on WhatsApp.";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<LeadInput>({
    resolver: standardSchemaResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      businessType: "",
      bottleneck: "",
    },
  });

  async function onSubmit(values: LeadInput) {
    setSubmitting(true);
    try {
      const result = await submitLead(values);
      if (result.ok) {
        toast.success(SUCCESS_TOAST);
        form.reset();
      } else {
        toast.error(ERROR_TOAST);
      }
    } catch {
      toast.error(ERROR_TOAST);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input autoComplete="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" autoComplete="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="businessType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Type</FormLabel>
              <FormControl>
                <Input
                  placeholder="Restaurant, Real Estate, etc."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bottleneck"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                What is your biggest operational bottleneck right now?
              </FormLabel>
              <FormControl>
                <Textarea rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "h-12 w-full px-6 text-base md:text-lg",
          )}
        >
          {submitting ? "Sending…" : "Send to Sisso"}
        </button>
      </form>
    </Form>
  );
}
