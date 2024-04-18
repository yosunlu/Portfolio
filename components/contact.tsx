'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from '@/actions/sendEmail';
import { useFormStatus } from 'react-dom'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast';


export default function Contact() {
    const { ref } = useSectionInView('Contact', 0.1);
    
    
  
    return (
    <motion.section 
        ref = {ref}
        id='contact' 
        className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
        initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1,
        }}
        transition={{
            duration:1,
        }}
        viewport={{
            once:true,
        }}
        >
        
        <SectionHeading>Contact me</SectionHeading>

        <p className='text-gray-700 -mt-6'>
            Please contact me directly at {" "}
            <a className='underline' href='mailto:yushanlu1031@gmail.com'>
                yushanlu1031@gmail.com
            </a> {" "}
            or through this form.
        </p>

        <form className='mt-10 flex flex-col' action={async (formData) =>{
            const {data, error} =  await sendEmail(formData);

            if (error) {
                toast.error(error);
                return;
            }
            toast.success('Email sent Successfully');
        }}>
            <input 
                className='h-14 px-4 backdrop:rounded-lg border borderBlack' 
                name='senderEmail'
                placeholder='Your email'
                type='email'
                required
                maxLength={5000}
                
                />
            <textarea className='h-52 my-3 rounded-lg borderBlack p-4'
                name='message'
                placeholder='Your message'
                required
                maxLength={5000}
            />
            <SubmitBtn />
        </form>
    </motion.section>
  )
}