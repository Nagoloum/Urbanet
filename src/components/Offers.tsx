import ImageCard from "../ui/Card/ImageCard";
import { OFFER_IMAGES } from "../data/Offer";

export default function Offers() {
  return (
    <div className="flex flex-col lg:px-10 py-10 px-3">
      <div className="grid grid-cols-2 lg:py-9 px-4 lg:gap-44 max-[750px]:grid-cols-1 items-center">
        <h2 className="text-5xl font-bold max-[750px]:text-4xl">What We Offer</h2>
        <p className="text-gray-600">We are redefining real estate with innovation and
          excellence.</p>
      </div>
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {OFFER_IMAGES.map((offer, index) => (
          <ImageCard
            key={index}
            image={offer.img}
            title={offer.title}
            description={offer.description}
          />
        ))}
      </div>
    </div>
  )
}
