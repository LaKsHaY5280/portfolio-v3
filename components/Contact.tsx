import Navbar from "./elements/Navbar";
import { ContactForm } from "./elements/ContactForm";
import { SocialCard } from "./elements/SocialCard";
import { contact } from "@/constants";

const Contact = () => {
  return (
    <div id="contact">
      <Navbar />
      <div className="bg-day  w-full flex flex-col justify-center items-center p-10">
        <div className=" mt-5 max-lg:mt-10 w-9/12  flex flex-col justify-center items-start ">
          <h1 className=" homeHeading text-night mt-7 px-10 ">
            {contact.heading}
          </h1>
          <p className="homeCaption text-secondary mt-2 px-10 ">
            {contact.subHeading}
          </p>
        </div>
        <div className=" mt-5  h-full w-full flex max-lg:flex-col-reverse justify-around items-center gap-10 ">
          <div className=" w-full h-full text-xl leading-[2.27rem] tracking-[0.15rem] font-['Snow'] text-day ">
            <div className=" max-h-fit pt-2 h-full w-full dark:bg-black bg-secondary  dark:bg-dot-white/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center rounded-lg">
              <div className=" rounded-lg absolute pointer-events-none inset-0 flex items-center justify-center da rk:bg-black bg-secondary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              <div className=" z-20 bg-clip-text text-transparent bg-gradient-to-b from-day to-primary h-full w-full flex flex-col justify-around items-start gap-5 px-10 py-5">
                <h2 className=" font-bold homeBody"> {contact.left} </h2>
                <div className=" w-full text-lg leading-[2.27rem] tracking-[0.15rem] ">
                  <ContactForm />
                </div>
                <div className=" -mt-3 text-sm font-bold leading-[2.27rem] tracking-[0.15rem] flex justify-around items-center gap-5"></div>
              </div>
            </div>
          </div>
          <div className=" w-1/6 flex justify-center items-center text-4xl leading-[3.5rem] tracking-[0.2rem] font-['Snow']">
            {contact.or}
          </div>
          <div className=" w-full h-full">
            <SocialCard heading={contact.right} socials={contact.socials} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
