import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Bird } from "lucide-react";

const CommentItem = ({ text, polarity, imgUrl, socialMedia }) => {
  const getBorderColor = () => {
    if (polarity === "positive") {
      return "border-green-500";
    }
    if (polarity === "negative") {
      return "border-red-500";
    }
    return "border-gray-500";
  };

  const getSocialMediaIcon = () => {
    if (socialMedia === "instagram") {
      return <InstagramLogoIcon className="w-6 h-6" />;
    }
    return <Bird className="w-6 h-6" />;
  };

  return (
    <div className={`flex border p-4 rounded-xl ${getBorderColor()}`}>
      <div className="flex">
        <Avatar>
          <AvatarImage src={imgUrl} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex ml-8 flex-col">
        <h1 className="text-xl">Username</h1>
        <p>{text}</p>
      </div>
      <div className="flex">{getSocialMediaIcon()}</div>
    </div>
  );
};

export default CommentItem;
