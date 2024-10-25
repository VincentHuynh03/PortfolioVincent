import React from "react";
import Link from "next/link";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="text-white text-center" id="avatar">
      <div className=" p-2 rounded-full inline-block">
        <Image
          src="/avatar.png"
          height={300}
          width={300}
          quality={100}
          alt="Avatar"
          className="rounded-full border-4 border-sky-200 aspect-square object-cover"
        />
      </div>
      <p className="font-bold text-2xl">Vincent Huynh</p>
      <p>Web developer</p>
    </div>
  );
};

export default Avatar;
