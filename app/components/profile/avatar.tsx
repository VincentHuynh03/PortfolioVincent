import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Avatar = () => {
  return (
    <div className="text-white text-center" id="avatar">
      <motion.div
        className="p-2 rounded-full inline-block"
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/avatar.png"
          height={800}
          width={800}
          quality={100}
          alt="Avatar"
          className="rounded-full border-4 border-sky-200 aspect-square object-cover"
        />
      </motion.div>
      <motion.p
        className="font-bold text-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        Vincent Huynh
      </motion.p>
    </div>
  );
};

export default Avatar;
