import { github, insta, linkedin, mail, xlogo } from "@/assets/Index";
import Navbar from "./elements/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactForm } from "./elements/ContactForm";
import { Separator } from "./ui/separator";
import { SocialCard } from "./elements/SocialCard";

const Contact = () => {
  return (
    <div id="contact">
      <Navbar />
      <div className="bg-day h-screen w-full flex flex-col justify-around items-start p-10">
        <div>
          <h1 className=" pgHeading text-night mt-7 px-10 ">
            Wanna talk to me...
          </h1>
          <p className="text-xl leading-[2.27rem] tracking-[0.15rem] font-['Snow'] text-secondary mt-2 px-10 ">
            Shoot me :-
          </p>
        </div>
        <div className=" mt-5  h-full w-full flex justify-around items-center gap-10 ">
          <div className=" w-full h-full text-xl leading-[2.27rem] tracking-[0.15rem] font-['Snow'] text-day ">
            <div className=" max-h-fit pt-2 h-full w-full dark:bg-black bg-secondary  dark:bg-dot-white/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center rounded-lg">
              <div className=" rounded-lg absolute pointer-events-none inset-0 flex items-center justify-center da rk:bg-black bg-secondary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              <div className=" z-20 bg-clip-text text-transparent bg-gradient-to-b from-day to-primary h-full w-full flex flex-col justify-around items-start gap-5 px-10 py-5">
                <h2 className=" font-bold text-3xl">An Email Here</h2>
                <div className=" w-full text-lg leading-[2.27rem] tracking-[0.15rem] ">
                  <ContactForm />
                </div>
                <div className=" -mt-3 text-sm font-bold leading-[2.27rem] tracking-[0.15rem] flex justify-around items-center gap-5"></div>
              </div>
            </div>
          </div>
          <div className=" w-1/6 flex justify-center items-center text-4xl leading-[3.5rem] tracking-[0.2rem] font-['Snow']">
            OR
          </div>
          <div className=" w-full h-full">
            <SocialCard socials={socials} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const socials = [
  {
    name: "@Akuma._.Lakshay",
    link: "",
    icon: insta,
  },
  {
    name: "@LaKsHaY5280",
    link: "",
    icon: github,
  },
  {
    name: "@Akuma_Laku",
    link: "",
    icon: xlogo,
  },
  {
    name: "Lakshay Goyal",
    link: "",
    icon: linkedin,
  },
  {
    name: "lakugoyal1@gmail.com",
    link: "",
    icon: mail,
  },
];
