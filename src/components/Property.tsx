import { PropertyCard } from "../ui";
import { properties } from "../data/Property";
import { Button } from "../ui";

export default function Property() {
  return (
    <div>
      <div className="flex flex-col lg:px-10 py-2 px-3">
        <div className=" lg:py-9 px-4 items-center justify-center text-center flex flex-wrap">
          <h2 className="text-5xl font-bold mb-4 lg:max-w-[800px] max-[750px]:text-4xl">Explore And Browse Our Exclusive Property Listings</h2>
        </div>
        <div className="flex items-center justify-center gap-10 flex-wrap max-[750px]:mt-8">
          {properties.map((property, index) => (
            <PropertyCard
              title={property.title}
              price={property.price}
              imageUrl={property.image}
              type={property.type}
              status={property.status}
              description={property.description}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              squareFeet={property.squareFeet}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center py-5">
        <Button>View More</Button>
      </div>
    </div>
  )
}
