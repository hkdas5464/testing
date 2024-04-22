"use client";
import Link from 'next/link'
import React from 'react'
import { Spotlight } from '../ui/Spotlight';
import { Button } from '../ui/moving-border';
import { TextGenerateEffect } from './text-generate-effect';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { TypewriterEffect } from './typewriter-effect';
const words = `We build custom AI solutions for enterprise`;
const TypewriterEffectwords1 = "What can We make for you using AI Today ?"

const TypewriterEffectwords = [
  {
    text: "What",
  },
  {
    text: "can",
  },
  {
    text: "we",
  },
  {
    text: "make",
  },
  {
    text: "for",
  },
  {
    text: "you",
  },
  {
    text: "using",
  },
  {
    text: "AI",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "?",
    className: "text-blue-500 dark:text-blue-500",
  },
];

function HeroSection() {
  return (
    <div>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div
        className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'
      >

        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />

        <div className='p-4 relative z-10 w-full text-center'>
          <div className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"><TextGenerateEffect words={words} className=' text-9xl' /></div>
          <div className="mt-4 font-normal text-base md:text-lg text-neutral-400 max-w-lg mx-auto">

            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <Highlight className="text-black dark:text-white">
                Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</Highlight></motion.div></div>
          <div className='mt-4'>
            <Link href={"/cources"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >CONTACT AI</Button>
            </Link>

            <div className='h-auto md:h[40rem] w-full rounded-md font-bold  text-center py-10 px-10 overflow-hidden text-4xl'><TypewriterEffect words={TypewriterEffectwords} /></div>


          </div>
        </div>

      </div>

    </div>
  )
}

export default HeroSection