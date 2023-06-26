import { BsTwitter, BsDiscord } from "react-icons/bs";
import Link from "next/link";
interface SocialLinkType {
  discord_url: string;
  twitter_url: string;
}

export default function SocialButton({
  discord_url,
  twitter_url,
}: SocialLinkType) {
  return (
    <div className="flex ">
      {twitter_url && (
        <Link
          href={twitter_url}
          target="_blank"
          className="p-2 rounded-md hover:bg-gray-200 drop-shadow-md"
        >
          <BsTwitter size={30} fill="#1D96E8" />
        </Link>
      )}
      {discord_url && (
        <Link
          className="p-2 rounded-md hover:bg-gray-200 drop-shadow-md"
          href={discord_url}
          target="_blank"
        >
          <BsDiscord size={30} fill="#5462EB" />
        </Link>
      )}
    </div>
  );
}
