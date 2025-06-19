import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
      {/* Main Details */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="text-gray-600 flex items-center space-x-3">
          <span className="text-yellow-500 font-medium">{property.rating} stars</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
          {/* Replace with additional images if available */}
        </div>

        {/* Tabs Description (simplified) */}
        <div>
          <h2 className="text-2xl font-semibold">Description</h2>
          <p>{property.description || "No description available."}</p>
        </div>

        {/* Amenities */}
        <div>
          <h2 className="text-2xl font-semibold">What this place offers</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {property.category.map((item, i) => (
              <span key={i} className="bg-gray-200 px-3 py-1 rounded-md text-sm">{item}</span>
            ))}
          </div>
        </div>

        {/* Reviews */}
        {property.reviews && <ReviewSection reviews={property.reviews} />}
      </div>

      {/* Booking Panel */}
      <div>
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
