"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";


const Projects = () => {
  

  return (
   
      <div className="grid grid-rows-2 h-screen bg-black p-12 gap-4">
          <div className="row-span-1 grid grid-cols-10 gap-4">
              <Link href = "/Projects/vritti" className="col-span-6 border border-white">
                Vritti
              </Link>
              <Link href = "/Projects/akaasa" className="col-span-4 border border-white">
                Akaasa
              </Link>
          </div>

      

          <div className="row-span-1 grid grid-cols-10 gap-4">
          <Link href = "/Projects/voyageur" className="col-span-6 border border-white">
                Voyageur
              </Link>
              <Link href = "/Projects/spell-bee" className="col-span-4 border border-white">
                Spell-Bee
              </Link>
          </div>

      </div>

    
  );
};

export default Projects;
