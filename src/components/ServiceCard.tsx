
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  onCallClick: () => void;
}

const ServiceCard = ({ title, description, price, image, onCallClick }: ServiceCardProps) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted mb-4">{description}</p>
        <div className="mt-auto">
          <p className="mb-4">
            <span className="text-lg font-bold text-primary">{price}</span>
            <span className="text-xs text-muted ml-1">*цена зависит от сложности работ</span>
          </p>
          <Button 
            onClick={onCallClick}
            className="w-full bg-primary hover:bg-primary/90 text-white"
          >
            Позвонить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
