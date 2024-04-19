"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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

import { useForm as formspreeUseForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  sub: z.string().nonempty(),
  msg: z.string().nonempty(),
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [state, handleSubmit] = formspreeUseForm(
    process.env.NEXT_PUBLIC_FORM_ID!
  );

  const onSubmit = (data: FormData) => {
    handleSubmit(data);
    setName("");
    setEmail("");
    setSub("");
    setMessage("");
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // 3 seconds
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
        className=" w-full space-y-3 max-h-screen"
      >
        <div className=" w-full flex justify-around items-center gap-10">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className=" w-full"
                    placeholder="Your name"
                    {...field}
                    value={name}
                    onChange={(e) => {
                      field.onChange(e);
                      setName(e.target.value);
                    }}
                  />
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
                  <Input
                    placeholder="Your email"
                    {...field}
                    value={email}
                    onChange={(e) => {
                      field.onChange(e);
                      setEmail(e.target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <FormField
          control={form.control}
          name="sub"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="Wonderfull subject"
                  {...field}
                  value={sub}
                  onChange={(e) => {
                    field.onChange(e);
                    setSub(e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="msg"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your thoughts"
                  {...field}
                  value={message}
                  onChange={(e) => {
                    field.onChange(e);
                    setMessage(e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button
          className=" text-secondary p-5 text-xl font-bold leading-[2.27rem] tracking-[0.2rem]"
          type="submit"
        >
          Submit
        </Button>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className=" absolute top-0 left-0 right-0 bottom-0 w-full h-5/6 flex justify-center items-center"
          >
            <div className=" flex justify-between items-center box-border shadow-[0_15px_25px_rgba(0,0,0,0.6)] p-5 rounded-[10px] bg-black bg-opacity-50">
              <p className="text-white text-xl">Thanks for contacting😊!</p>
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className=" !mt-0 mb-10 ml-5"
              >
                X
              </button>
            </div>
          </motion.div>
        )}
      </form>
    </Form>
  );
}
