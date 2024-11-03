import React from "react";
import Image from "next/image";

const ProfilePhoto = () => {
  return (
    <Image
      src="/image.png"
      alt="Picture of the author"
      width={300}
      height={300}
      className="rounded-full"
    />
  );
};

export default ProfilePhoto;
