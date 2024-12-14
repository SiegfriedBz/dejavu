import Image from "next/image";

type Props = {
  imageDataPromise: Promise<{
    src: string;
    dataUrl: string;
  }>;
  alt: string;
};

const CustomImage = async (props: Props) => {
  const { alt, imageDataPromise } = props;

  const { src, dataUrl } = await imageDataPromise;

  return (
    <Image
      src={src}
      fill
      alt={alt}
      placeholder="blur"
      blurDataURL={dataUrl}
      className="object-cover min-h-[27rem]"
    />
  );
};

export default CustomImage;
