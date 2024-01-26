"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: "1",
      title: "First",
      subtitle: "Subtitle 1",
    },
    {
      id: "2",
      title: "Second",
      subtitle: "Subtitle 2",
    },
    {
      id: "3",
      title: "Third",
      subtitle: "Subtitle 3",
    },
    {
      id: "4",
      title: "Fourth",
      subtitle: "Subtitle 4",
    },
  ];

  return (
    <div className="h-screen bg-black p-10">
      <p className="text-4xl mt-16 my-6">Projects</p>

      <div className={`md:grid  grid-cols-10 grid-rows-2 md:gap-2 bg-black`}>
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`bg-black  h-[17vh] md:h-[30vh]  md:my-0 my-4 ${item.id === "1" || item.id === "4"? "col-span-6":"col-span-4"} rounded-md border border-1 border-white`}
          >
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            key={selectedId}
            layoutId={selectedId}
            className="  h-screen w-screen fixed top-0 right-0 z-50  backdrop-brightness-50"
          >
            <div className="bg-white opacity-100 rounded-md text-black w-1/2  h-1/2  fixed top-1/4 right-1/4 flex justify-around items-center">
              <div>
                <motion.h2>
                  {items.find((item) => item.id === selectedId)?.title}
                </motion.h2>
              </div>
              <motion.button onClick={() => setSelectedId(null)}>
                Close
              </motion.button>
              <motion.div>hiiiii</motion.div> 
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
