//             {/* <li className='text-xl hover:scale-110 transition-all duration-300 '>How I work .......................... IV</li>
//             <li className='text-xl hover:scale-110 transition-all duration-300 '>Case Study ............... V</li>
//             <li className='text-xl hover:scale-110 transition-all duration-300 '>Pricing ............... V</li>
//             <li className='text-xl hover:scale-110 transition-all duration-300 '>Testimonials ............... V</li>
//             <li className='text-xl hover:scale-110 transition-all duration-300 '>FAQ's ............... V</li>
//             <li className='text-xl hover:scale-110 transition-all duration-300 '>Why you should trust me ............... V</li> */}


import { motion, AnimatePresence } from "framer-motion";

const Menu = ({ onClose }) => {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClose(); // ✅ close menu after click
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] bg-slate-950/85 backdrop-blur-2xl flex items-center justify-center px-4 py-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-xl max-h-[calc(100vh-4rem)] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-6"
        >
          <motion.ul className="menu-scrollbar max-h-[calc(100vh-15rem)] overflow-auto space-y-3 text-white pr-1">
            {[
              ["Home", "hero", "I"],
              ["About", "about", "II"],
              ["Services", "services", "III"],
              ["Projects", "projects", "IV"],
              ["Tech Stack", "techstack", "V"],
              ["Contact", "contacts", "VI"],
            ].map(([label, id, num]) => (
              <motion.li
                key={id}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={() => scrollToSection(id)}
                className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-base font-semibold shadow-lg shadow-slate-950/20 transition-all duration-300 hover:border-red-400/30 hover:bg-white/10 hover:text-red-100"
              >
                <span className="ml-4">{label}</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 mr-4 text-xs text-slate-100">
                  {num}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
