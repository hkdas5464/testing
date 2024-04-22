"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
 

function Cards() {
  return (
    <div className="grid grid-flow-row auto-rows-max hover:auto-rows-min">
  <div className="flex-none w-14 ...">
    01
  </div>
  <div className="flex-initial w-64 ...">
    02
  </div>
  <div className="flex-initial w-32 ...">
    03
  </div>
</div>
  )
}

export default Cards