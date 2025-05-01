
import Icon from "@/components/ui/Icon";
import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  title: string;
  icon: string;
}

const FeatureItem = ({ title, icon }: FeatureItemProps) => {
  return (
    <div className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex-shrink-0 mr-4 text-primary">
        <Icon name={icon} size={24} />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default FeatureItem;
