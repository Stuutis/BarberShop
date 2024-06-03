interface HomeCarouselContentProps {
  imageSource: string;
  text: string;
  altText: string;
}

export function HomeCarouselContent({
  altText,
  imageSource,
  text,
}: HomeCarouselContentProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="absolute z-10 p-8 text-center text-lg lg:p-24">{text} </p>

      <img
        className="object-cover h-[60vh] w-screen opacity-60 xl:rounded-b-3xl"
        src={imageSource}
        alt={altText}
      />
    </div>
  );
}
