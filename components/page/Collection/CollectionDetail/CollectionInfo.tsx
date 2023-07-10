import Image from "next/image";
import SocialButton from "@/components/page/Collection/CollectionDetail/SocialButton";
import { CollectionInfoType } from "@/types/types";
import { BLUR_DATA_URL } from "@/constant/constant";

export default function CollectionInfo({ info }: { info: CollectionInfoType }) {
  const {
    name,
    description,
    image_url,
    discord_url,
    twitter_username,
    banner_image_url,
  } = info;
  return (
    <>
      <div className="w-full h-60">
        <Image
          src={banner_image_url}
          alt="Banner Image"
          width={1000}
          height={1000}
          priority
          className="object-cover max-w-full max-h-full min-w-full min-h-full "
        />
      </div>

      <div className="flex items-center w-full responsive-container">
        <div className="relative w-32 h-32 md:w-40 md:h-40 ">
          {image_url && (
            <Image
              src={image_url}
              alt={name}
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-cover rounded-full drop-shadow-lg"
            />
          )}
        </div>
        <div className="flex flex-col gap-2 ml-4">
          <div className="text-3xl md:text-5xl drop-shadow-md">{name}</div>
          <SocialButton
            twitter_username={twitter_username}
            discord_url={discord_url}
          />
        </div>
      </div>

      <div className="max-w-[80%]  max-md:truncate font-normal responsive-container">
        <p>{description}</p>
      </div>
    </>
  );
}
