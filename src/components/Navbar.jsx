import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdSwipeDown } from "react-icons/md";
import Menu from "./Menu";

const Navbar = ({ trailOn, setTrailOn }) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const openMenus = () => {
    console.log("Menu clicked");
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
  }, [openMenu]);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[1000] w-full h-[65px]
 bg-black/30 backdrop-blur-md
 flex items-center justify-between px-8"
      >
        <div className="relative text-white text-center hover:text-yellow-400 hover:cursor-pointer leading-none font-semibold text-xl">
          Abuzar <br />
          Hindi
        </div>
        <motion.div
          onClick={() => setTrailOn((p) => !p)}
          className=" px-5 py-2 z-40 hover:cursor-pointer hidden md:block rounded-full text-white leading-[1]  border-white/80 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {trailOn ? (
              <motion.span
                key="off"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
              >
                Disble Interactive Mode
              </motion.span>
            ) : (
              <motion.span
                key="on"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
              >
                Try Interactive Mode
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="flex gap-4">
          <div className="z-50 group">
            <a
              href="/AbuzarSheikh-Resume.pdf"
              download="Abuzar_Sheikh_Resume.pdf"
              className="text-black text-xl bg-white rounded-full block w-8 flex items-center justify-center hover:bg-yellow-400 transition duration-300 cursor-pointer leading-none"
              aria-label="Download resume"
            >
              ⬇
            </a>
            <span className="pointer-events-none absolute right-0 top-full mt-3 w-max -translate-x-1/2 rounded-full bg-slate-950 px-3 py-2 text-xs font-medium bg-white text-black opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
              Download resume
            </span>
          </div>

          <div
            onClick={openMenus}
            className="fixed text-white relative text-center hover:cursor-pointer hover:text-yellow-400 leading-none font-semibold text-xl"
          >
            ☰
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openMenu && <Menu onClose={() => setOpenMenu(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
