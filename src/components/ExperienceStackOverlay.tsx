
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useUI } from "./ui-context";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceStackOverlay(){
  const { openCategory, setOpenCategory } = useUI();
  const open = Boolean(openCategory);
  return (
    <AnimatePresence>
      {open && openCategory && (
        <motion.div className="fixed inset-0 z-50" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          <div className="absolute inset-0" onClick={()=> setOpenCategory(null)} />
          <motion.div layoutId={openCategory.slug} className="absolute inset-0 flex items-center justify-center"
            transition={{ type:"spring", stiffness:220, damping:28, mass:.8 }}>
            <div className="relative w-full max-w-[1400px] px-6">
              <div className="flex md:flex-row flex-col gap-6 md:overflow-x-auto overflow-y-auto md:snap-x snap-y snap-mandatory pb-8">
                {openCategory.experiences.map(exp => (
                  <ExperienceCard key={exp.id} exp={exp}/>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
