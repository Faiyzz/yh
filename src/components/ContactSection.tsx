// components/ContactSection.tsx
"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "./hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  textAuthorization: boolean;
};

const EMAILJS_SERVICE_ID = "service_contact_form";
const EMAILJS_ADMIN_TEMPLATE_ID = "contact_form_admin";
const EMAILJS_CUSTOMER_TEMPLATE_ID = "contact_form_customer";
const EMAILJS_PUBLIC_KEY = "DMqSBD3Lz8si_dh2M";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inView, setInView] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
    watch,
  } = useForm<ContactFormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      textAuthorization: true,
    },
  });

  const textAuthorization = watch("textAuthorization", true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const section = document.getElementById("contact");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    const adminParams = {
      from_name: data.name,
      from_email: data.email,
      from_phone: data.phone,
      message: data.message,
      to_email: "admin@ridgebackbuilt.com",
      subject: "New Contact Form Submission",
    };
    const customerParams = {
      from_name: data.name,
      from_email: data.email,
      from_phone: data.phone,
      message: data.message,
      to_email: data.email,
      subject: "Thank you for contacting Ridgeback Builders",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_ADMIN_TEMPLATE_ID,
        adminParams,
        EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CUSTOMER_TEMPLATE_ID,
        customerParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description:
          "We've received your message and sent you a confirmation email.",
      });

      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
      reset({
        name: "",
        email: "",
        phone: "",
        message: "",
        textAuthorization: true,
      });
    } catch (error: any) {
      toast({
        title: "Something went wrong!",
        description: `Unable to send your message: ${error.text || error.message || "Unknown error"}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getButtonClasses = () => {
    const baseClasses = "w-full md:w-auto px-8 transition-all duration-500";
    const animationClasses = inView
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8";

    return `${baseClasses} ${animationClasses} bg-[#FFE241] text-black hover:bg-[#FFE241]/90`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-10 text-center md:text-left"
          style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
        >
          <span className="text-white metallic-text">GET IN</span>{" "}
          <span className="text-[#FFE241] metallic-text">TOUCH</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-16">
          {/* Contact Form */}
          <div className="order-1 md:order-none md:w-2/3 md:pl-8 md:border-l border-zinc-800 transition-all duration-700">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center animate-bounce-in">
                <CheckCircle className="h-16 w-16 text-[#FFE241] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-300">
                  Your message has been sent successfully.
                </p>
                <p className="text-gray-400 mt-2">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                    className="bg-white"
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                    className="bg-white"
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                  className="bg-white"
                    id="phone"
                    {...register("phone")}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="flex items-start space-x-3">
                  <Controller
                    name="textAuthorization"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id="textAuthorization"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1"
                      />
                    )}
                  />
                  <Label
                    htmlFor="textAuthorization"
                    className="text-xs text-gray-300 leading-relaxed cursor-pointer"
                  >
                    We do not sell your information. By checking this box you
                    authorize text messages from Ridgeback Builders, Inc.
                  </Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                  className="bg-white"
                    id="message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className={getButtonClasses()}
                  disabled={isSubmitting || !isValid}
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {isSubmitting && (
                      <svg
                        className="animate-spin ml-2 h-4 w-4 text-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    )}
                  </span>
                </Button>
              </form>
            )}
          </div>
          {/* Contact Info */}
          <div className="order-2 md:order-none md:w-1/3 transition-all duration-700">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <a
                  href="mailto:info@ridgebackbuilt.com"
                  className="bg-[#FFE241] p-3 rounded-lg transform transition-transform hover:scale-110 hover:rotate-6 duration-300"
                  aria-label="Send email to info@RidgebackBuilt.com"
                >
                  <Mail className="h-6 w-6 text-black" />
                </a>
                <div>
                  <h3 className="font-semibold text-white mb-1 metallic-text">
                    Email Us
                  </h3>
                  <p className="text-gray-300">info@RidgebackBuilt.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <a
                  href="tel:8139211717"
                  className="bg-[#FFE241] p-3 rounded-lg transform transition-transform hover:scale-110 hover:rotate-6 duration-300"
                  aria-label="Call (813) 921-1717"
                >
                  <Phone className="h-6 w-6 text-black" />
                </a>
                <div>
                  <h3 className="font-semibold text-white mb-1 metallic-text">
                    Call Us
                  </h3>
                  <p className="text-gray-300">(813) 921-1717</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
