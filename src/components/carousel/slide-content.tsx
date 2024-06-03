interface SlideContentProps {
  imageSrc: string;
  titleText: string;
  contentText: string;
  altText: string;
}

export function SlideContent({
  contentText,
  imageSrc,
  altText,
  titleText,
}: SlideContentProps) {
  return (
    <div className="flex flex-col h-[420px] justify-center items-center px-4 py-8 gap-4 sm:justify-between md:h-[480px]">
      <h1 className="text-xl sm:text-2xl">{titleText}</h1>
      <img className="h-40" src={imageSrc} alt={altText} />
      <p className="sm:text-lg">{contentText}</p>
    </div>
  );
}
