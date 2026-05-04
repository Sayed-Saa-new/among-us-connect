"use client";

import { motion } from "framer-motion";

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

export function HandWrittenTitle({
  title = "Hand Written",
  subtitle = "Optional subtitle",
}: HandWrittenTitleProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.2, delay: 0.8, ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number] },
        opacity: { duration: 0.3, delay: 0.8 },
      },
    },
  } as const;

  return (
    <div className="relative w-full max-w-4xl mx-auto py-16">
      <div className="relative text-center z-10 flex flex-col items-center justify-center">
        <div className="inline-flex flex-col items-stretch">
          <motion.h1
            className="font-display text-4xl md:text-6xl text-foreground tracking-tighter flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {title}
          </motion.h1>
          <motion.svg
            width="100%"
            height="34"
            viewBox="0 0 900 34"
            initial="hidden"
            animate="visible"
            className="-mt-1 h-8 w-full text-primary"
            preserveAspectRatio="none"
          >
            <title>Among Us style underline</title>
            <motion.path
              d="M 8 20 C 80 26, 130 8, 200 18 C 275 30, 340 8, 420 20 C 500 30, 575 10, 655 19 C 740 28, 810 12, 892 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={draw}
            />
          </motion.svg>
        </div>
        {subtitle && (
          <motion.p
            className="mt-3 text-lg md:text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export default HandWrittenTitle;
