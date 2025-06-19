import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const filters = ["Top Villa", "Self Checkin", "Free Parking", "Private Pool", "Pet Friendly"];

const Pill = ({ label }: { label: string }) => (
  <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300">
    {label}
  </span>
);

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[300px] flex items-center justify-center text-white text-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl font-bold mb-2">Find your favorite place here!</h1>
          <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-4 px-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter, index) => (
            <Pill key={index} label={filter} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{property.name}</h2>
              <p className="text-gray-600">${property.price.toLocaleString()} / night</p>
              <p className="text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
