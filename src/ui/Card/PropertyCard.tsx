import { Bath, Bed, Square } from "lucide-react";

type PropertyCardProps = {
  imageUrl: string;
  type: string;
  status: string;
  title: string;
  price: string;
  description: string;
  bathrooms: number;
  bedrooms: number;
  squareFeet: string;
};

export default function PropertyCard({
  imageUrl,
  type,
  status,
  title,
  price,
  description,
  bathrooms,
  bedrooms,
  squareFeet,
}: PropertyCardProps) {
  return (
    <div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-lg w-full max-w-[420px] mx-auto">

        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />

          <div className="absolute top-4 right-4 flex gap-2">
            <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] sm:text-xs font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
              {type}
            </span>
            <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] sm:text-xs font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
              {status}
            </span>
          </div>
        </div>
      </div>

      <div className="sm:p-6 space-y-2 p-6 sm:space-y-2 max-w-[420px]">
        <div className="flex justify-between items-center gap-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
            {title}
          </h3>
          <p className="text-lg sm:text-lg font-bold text-gray-900 whitespace-nowrap">
            {price}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
          {description}
        </p>

        <div className="flex justify-between items-center text-[10px] sm:text-sm text-gray-700 pt-4 border-t border-gray-300">
          <div className="flex items-center gap-1 sm:gap-2">
            <Bath className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" strokeWidth={1.5} />
            <span>{bathrooms} <span className=" xs:inline">Bathrooms</span></span>
          </div>

          <div className="w-px h-4 sm:h-6 bg-gray-300" />

          <div className="flex items-center gap-1 sm:gap-2">
            <Bed className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" strokeWidth={1.5} />
            <span>{bedrooms} <span className=" xs:inline">Bed</span></span>
          </div>

          <div className="w-px h-4 sm:h-6 bg-gray-300" />

          <div className="flex items-center gap-1 sm:gap-2">
            <Square className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" strokeWidth={1.5} />
            <span>{squareFeet}</span>
          </div>
        </div>
      </div>
    </div>
  );
}