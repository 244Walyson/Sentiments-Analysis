import React from "react";
import ProfilePhoto from "./profilePhoto";

const ProfileContainer = () => {
  return (
    <div>
      <div className="flex flex-col p-20 w-full items-center justify-center border-b">
        <ProfilePhoto />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl">Username</h1>
          <h2>Role description</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
