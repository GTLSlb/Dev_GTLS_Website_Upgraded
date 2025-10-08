"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/lib/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/lib/ui/form";
import { Input } from "@/lib/ui/input";
import { Textarea } from "@/lib/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import TextWrapper from "@/lib/components/Common/TextWrapper";
import { Mail, Phone, User } from "lucide-react";

// ✅ Validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .regex(/^[0-9]+$/, { message: "Phone number must only contain digits." }),
  propertyType: z.string().min(1, { message: "Select a property type." }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const defaultValues: Partial<ContactFormValues> = {
  name: "",
  email: "",
  phone: "",
  propertyType: "",
  message: "",
};

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: ContactFormValues) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6  border border-gray-200 rounded-4xl p-6 shadow-xs"
      >
        <div>
          <TextWrapper
            text="Contact Us"
            fontFamily="funnel"
            styleType="title2"
            className="text-gold"
          />
        </div>

        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Name</FormLabel> */}
              <FormControl>
                <Input
                  placeholder="Your Name"
                  className="bg-creamy rounded-full"
                  icon={<User className="text-dark-gold size-4" />}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-creamy rounded-full"
                  icon={<Mail className="text-dark-gold size-4" />}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Phone"
                  icon={<Phone className="text-dark-gold size-4" />}
                  {...field}
                  className="bg-creamy rounded-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Property Type */}
        <FormField
          control={form.control}
          name="propertyType"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="bg-creamy rounded-full">
                    <SelectValue placeholder="Select a property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Your Message"
                  className="resize-none bg-creamy rounded-2xl"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-48 rounded-full h-12">
          <TextWrapper
            text="Send Message"
            fontFamily="dmSans"
            styleType="body"
          />
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
