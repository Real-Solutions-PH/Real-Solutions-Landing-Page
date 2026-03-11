"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Project } from "./types";

export const ProjectContent = ({
  activeProject,
}: {
  activeProject: Project;
}) => {
  return (
    <div className="relative overflow-hidden w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center w-full h-full"
        >
          {/* Image Container */}
          <div className="w-full lg:w-1/2 aspect-[4/3] relative rounded-2xl md:rounded-[28px] overflow-hidden bg-white shadow-sm border border-black/5">
            {/* <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    /> */}
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base font-semibold text-black font-satoshi"
            >
              {activeProject.number}
            </motion.span>

            <div className="space-y-2">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                // className="text-2xl md:text-3xl lg:text-[32px] md:leading-[1.2] font-medium text-black font-satoshi"
                className="text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start break-normal  md:text-xl md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.2px] md:leading-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi"
              >
                {activeProject.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base box-content caret-black leading-[normal] min-h-0 min-w-0 break-normal  md:text-sm md:aspect-auto md:box-border md:caret-transparent md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter opacity-80"
              >
                {activeProject.description}
              </motion.p>
            </div>

            {/* Stat Cards */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
              {activeProject.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex-1 rounded-lg p-5 flex flex-col items-center justify-center shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                >
                  <div className="text-[32px] font-medium text-black tracking-tight font-satoshi">
                    {stat.value}
                  </div>
                  <div className="text-neutral-500 text-sm font-inter">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 justify-end">
              <Button size="lg">
                Visit <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
