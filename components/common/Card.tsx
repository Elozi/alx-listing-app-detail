// Card.tsx without React import
export interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card = ({ title, image, description }: CardProps) => (
  <div className="border rounded-lg p-4 shadow-md">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
    <h3 className="text-lg font-semibold mt-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default Card;

