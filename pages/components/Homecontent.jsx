import React from 'react'
import { motion } from "framer-motion";

export default function content() {
  return (
    <>
    <div className='contentcontainer'>
      <div className="circlecontainer">
      <motion.div className='introdunctioncontainer'
       initial={{ scale: 0 }}
       animate={{ scale: 1 }}
       transition={{
         type: "spring",
         stiffness: 50,
         damping: 20,
       }}>
      <h1>GenzaiXd</h1>
      <p>Hey, I am a full Stack Web Developer</p>
      </motion.div>
      </div>
      </div>

    </>
  )
      }
