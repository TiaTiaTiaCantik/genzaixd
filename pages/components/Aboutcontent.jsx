import { motion } from "framer-motion";

export default function Aboutcontent() {
  return (
    <div className="aboutcontainer">
      <div className="aboutborder">
        <div className="aboutcontent">
          <motion.img
            src="https://telegra.ph/file/49902e18f11c139982077.jpg"
            alt=""
            initial={{ y: 20 }}
            animate={{ y: 0 , boxShadow: "0px 0px 0px 2px white"}}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 0.5 },
              yoyo: Infinity
            }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Genzai Quote :
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            " Kegagalan adalah cara Allah untuk mengatakan bersabarlah karena aku memiliki sesuatu yang lebih baik untukmu saat waktunya tiba."
          </motion.p>
        </div>
      </div>
    </div>
  );
}
