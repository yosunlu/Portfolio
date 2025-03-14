"use client";
import React from "react";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  return (
    <section className="flex flex-col max-w-[525px] justify-center ml-[9%] 2xl:ml-[15%]">
      <div className="font-bold pt-32"></div>

      <div className="flex pt-16 font-NS font-medium text-2xl italic text-[#FF7700] items-center justify-center">
        Contact / 聯絡
      </div>

      <div className="mt-12 text-center font-NS text-normal text-[#666]">
        Email {" "} 
        <a
          className="text-[#FF7700] font-semiboldhover:underline font-semibold"
          href="mailto:ylu437@wisc.edu" 
        >
          ylu437@wisc.edu
        </a>
        , visit my{" "} 
        <a className="text-[#FF7700] font-semibold hover:underline"
          href="https://www.linkedin.com/in/yushanlu1031/"
          target="_blank">
          LinkedIn 
        </a>
        , or send me your message here!
      </div>

      <form
        className="mt-10 flex flex-col space-y-4"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          
          if (data){}
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent Successfully");
        }}
      >
        <input
          className="h-14 px-4 border rounded-xl transition duration-200 hover:border-2 hover:border-[#FF7700] focus:border-[#FF7700] focus:outline-none"
          name="senderEmail"
          placeholder="Your email"
          type="email"
          required
          maxLength={5000}
        />
        <textarea
          className="h-64 p-4 border rounded-xl transition duration-200 hover:border-2 hover:border-[#FF7700] focus:border-[#FF7700] focus:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <div className="pt-4 self-center">
          <SubmitBtn />
        </div>
      </form>
    </section>
  );
}