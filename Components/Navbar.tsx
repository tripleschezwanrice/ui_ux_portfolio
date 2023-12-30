"use client";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import {
  AtSymbolIcon,
  EnvelopeIcon,
  HeartIcon,
  HomeIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiLinkedin, CiInstagram } from "react-icons/ci";

export default function SideNav() {
  const [current, setCurrent] = useState("Home");

  const handleCurrent = (currentP: string) => {
    setCurrent(currentP);
  };

  useEffect(() => {
    console.log(current);
  }, [current]); // This effect will run whenever 'current' changes

  return (
    <div className="flex md:h-screen md:flex-col md:py-8 my-auto justify-between p-4 text-lg">
      <div className="flex flex-col gap-2 ">
        <Link
          href="/"
          className={clsx(
            `flex gap-2 border-2  p-2 box-border border-transparent items-center`,
            {
              "border-2 box-border rounded-md border-white": current === "Home",
            }
          )}
          onClick={() => {
            handleCurrent("Home");
          }}
        >
          <HomeIcon className="w-5" />
          Homepage
        </Link>
        <Link
          href="/"
          className={clsx(
            `p-2 flex gap-2 border-2 box-border border-transparent items-center`,
            {
              "border-2 box-border rounded-md border-white":
                current === "Projects",
            }
          )}
          onClick={() => {
            handleCurrent("Projects");
          }}
        >
          <HeartIcon className="w-5" />
          Projects
        </Link>
        <Link
          href="/"
          className={clsx(
            `p-2 flex gap-2 border-2 box-border border-transparent items-center`,
            {
              " border-2 box-border rounded-md border-white":
                current === "Resume",
            }
          )}
          onClick={() => {
            handleCurrent("Resume");
          }}
        >
          <PencilIcon className="w-5" />
          Resume
        </Link>
        <Link
          href="/"
          className={clsx(
            `p-2 flex gap-2 border-2 box-border border-transparent items-center`,
            {
              "border-2 box-border rounded-md border-white":
                current === "Contact",
            }
          )}
          onClick={() => {
            handleCurrent("Contact");
          }}
        >
          <EnvelopeIcon className="w-5" />
          Contact Me
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-gray-400 text-md">
        <Link
          href="https://www.linkedin.com/in/ananya-singh-95bb83242/"
          target="_blank"
          className=" pt-3 flex gap-2 items-center"
        >
          
          LinkedIn
          <ArrowUpRightIcon className="w-4" />
        </Link>
        <Link
          href="/"
          className="border-t-2 border-gray-800 pt-3 flex gap-2 items-center"
        >
          
          Instagram
          <ArrowUpRightIcon className="w-4" />
        </Link>
        <Link
          href="/"
          className="border-t-2 border-gray-800 pt-3 flex gap-2 items-center"
        >
        
          Email
          <ArrowUpRightIcon className='w-4'/>

        </Link>
      </div>
    </div>
  );
}
