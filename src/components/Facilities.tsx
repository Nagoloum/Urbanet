import IconCard from "../ui/Card/IconCard"
import { facilities } from "../data/Facilities"

export default function Facilities() {
  return (
    <div className="flex flex-col lg:px-12 py-10 px-3">
      <div className="grid grid-cols-2 lg:py-9 px-4 lg:gap-44 max-[750px]:grid-cols-1 items-center max-[850px]:gap-6">
        <h2 className="text-5xl font-bold mb-4 max-[750px]:text-4xl max-[850px]:text-4xl">Discover The Facilities
          We Offer At Urbanet</h2>
        <p className="text-gray-600 mb-6">With innovative solutions, market expertise, and a
          customer-first approach, we simplify the process to
          ensure a smooth experience.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-7 md:gap-5 gap-2">
        {facilities.map((facility, index) => (
          <IconCard
            key={index}
            icon={facility.icons}
            title={facility.title}
            description={facility.description}
          />
        ))}
      </div>
    </div>
  )
}
