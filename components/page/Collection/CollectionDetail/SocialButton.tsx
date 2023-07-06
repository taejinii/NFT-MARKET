import Twitter from "../../../../public/icons/Twitter.svg";
import Discord from "../../../../public/icons/Discord.svg";
import Link from "next/link";
interface SocialLinkType {
  discord_url: string;
  twitter_username: string;
}

export default function SocialButton({
  discord_url,
  twitter_username,
}: SocialLinkType) {
  return (
    <div className="flex ">
      {twitter_username && (
        <Link
          passHref
          href={`https://twitter.com/${twitter_username}`}
          target="_blank"
          className="p-2 rounded-md hover:bg-gray-200 drop-shadow-md"
        >
          <Twitter className="h-10 w-10 fill-[#1D96E8]" />
        </Link>
      )}
      {discord_url && (
        <Link
          passHref
          className="p-2 rounded-md hover:bg-gray-200 drop-shadow-md"
          href={discord_url}
          target="_blank"
        >
          <Discord className="h-10 w-10 fill-[#5462EB]" />
        </Link>
      )}
    </div>
  );
}
