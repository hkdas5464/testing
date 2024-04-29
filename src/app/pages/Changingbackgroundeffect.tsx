"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { motion } from "framer-motion";


const content = [
  {
    title: "Data Engineering",
    description:
      "Practice of designing, constructing, and maintaining the infrastructure that allows for the seamless flow and transformation of raw data into organized data.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
        src="https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="Data Engineering"
        />
      </div>
    ),
  },
  {
    title: "Web Development",
    description:
      "We develop scalable, secure and robust web application as per your business requirements.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Android Development:",
    description:
      "Crafting Exceptional User Experiences and Driving Digital Transformation through Android Development",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Data Insight",
    description:
    "Practice of analysing and interpreting complex data sets to uncover valuable insights that drive informed decision-making. Enable the business management take future decision.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Data Insight",
    description:
    "Practice of analysing and interpreting complex data sets to uncover valuable insights that drive informed decision-making. Enable the business management take future decision.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
src="https://plus.unsplash.com/premium_photo-1683288706548-e8b6bb72fe86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "And Many More...",
    description:
    "Modernization your IT infrastructure and applications to leverage the benefits of availability, scalability, security, and cost-efficiency through AWS, Azure and GCP cloud computing technology.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
src="https://plus.unsplash.com/premium_photo-1683288706548-e8b6bb72fe86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <motion.div >
      <p>kjhkjn</p>
      <StickyScroll  content={content} />
    </motion.div>
  );
}
