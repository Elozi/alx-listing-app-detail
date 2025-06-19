import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const { query } = useRouter();
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === query.id);

  if (!property) return <p className="p-6">Property not found</p>;

  return (
    <div className="p-4">
      <PropertyDetail property={property} />
    </div>
  );
}
