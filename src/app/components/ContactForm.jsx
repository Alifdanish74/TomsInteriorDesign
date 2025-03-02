"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    setStatus("sending...");
    // try {
    //   const response = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
    //     setStatus("Message sent successfully!");
    //     reset();
    //   } else {
    //     setStatus("Failed to send message. Try again.");
    //   }
    // } catch (error) {
    //   setStatus("An error occurred. Try again.");
    // }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg my-10 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Field */}
        <div>
          <label className="block font-medium">Email</label>
          <Input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Your email"
            className="w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Subject Field */}
        <div>
          <label className="block font-medium">Subject</label>
          <Input
            type="text"
            {...register("subject", { required: "Subject is required" })}
            placeholder="Subject"
            className="w-full"
          />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label className="block font-medium">Message</label>
          <Textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your message"
            className="w-full"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-blue-600 text-white" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {/* Status Message */}
        {status && <p className="text-center text-gray-700 mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
