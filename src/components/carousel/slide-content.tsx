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
    <div className="flex flex-col justify-center items-center p-4 gap-4 ">
      <h1 className="text-xl">{titleText}</h1>
      <img className="h-40" src={imageSrc} alt={altText} />
      <p>{contentText}</p>
    </div>
  );
}
