import Image from "next/image";
import SocialButton from "@/components/page/Collection/CollectionDetail/SocialButton";
import { CollectionInfo } from "@/types/types";
export default function CollectionInfo({ info }: { info: CollectionInfo }) {
  const { name, description, logo, discord_url, twitter_url } = info;
  return (
    <>
      <div className="flex items-center w-full ">
        <div className="relative w-32 h-32 md:w-40 md:h-40 ">
          <Image
            src={logo}
            alt={name}
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" // 추가
            className="object-cover rounded-full drop-shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-2 ml-4">
          <div className="text-3xl md:text-5xl drop-shadow-md">{name}</div>
          <SocialButton twitter_url={twitter_url} discord_url={discord_url} />
        </div>
      </div>
      <div className="max-w-[80%]  max-md:truncate font-normal">
        <p>{description}</p>
      </div>
    </>
  );
}
