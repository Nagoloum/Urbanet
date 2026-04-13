type ImageCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function ImageCard({
  image,
  title,
  description,
}: ImageCardProps) {
  return (
    <div className="relative w-[320px] h-[400px] rounded-2xl overflow-hidden shadow-lg">

      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute bottom-4 left-4 right-4 bg-white h-[130px] rounded-xl p-4 shadow-md">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mt-2">
          {description}
        </p>
      </div>

    </div>
  );
}