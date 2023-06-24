"use client";
import { BsTwitter, BsDiscord } from "react-icons/bs";

interface SocialLinkType {
  discord_url: string;
  twitter_url: string;
}

export default function SocialButton({
  discord_url,
  twitter_url,
}: SocialLinkType) {
  const directSocialLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <div className="flex ">
      {twitter_url && (
        <button
          className="p-2 rounded-md hover:bg-gray-200 drop-shadow-md"
          onClick={() => directSocialLink(twitter_url)}
        >
          <BsTwitter size={30} fill="#1D96E8" />
        </button>
      )}
      {discord_url && (
        <button
          className="p-2 rounded-md hover:bg-gray-200 drop-shadow-md"
          onClick={() => directSocialLink(discord_url)}
        >
          <BsDiscord size={30} fill="#5462EB" />
        </button>
      )}
    </div>
  );
}
