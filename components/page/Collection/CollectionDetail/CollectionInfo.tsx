import Image from "next/image";
import SocialButton from "@/components/page/Collection/CollectionDetail/SocialButton";

export default function CollectionInfo({ info }: any) {
  const { name, description, logo, discord_url, twitter_url } = info;

  return (
    <>
      <div className="flex items-center ">
        <div className="relative w-40 h-40 rounded-full drop-shadow-xl">
          <Image
            src={logo}
            alt="NFT Logo"
            fill
            className="object-cover rounded-full "
          />
        </div>
        <div className="flex flex-col gap-2 ml-8">
          <div className="text-5xl drop-shadow-md">{name}</div>
          <SocialButton twitter_url={twitter_url} discord_url={discord_url} />
        </div>
      </div>
      <div className="max-w-[80%]  max-md:truncate break-words font-normal">
        <p>{description}</p>
      </div>
    </>
  );
}