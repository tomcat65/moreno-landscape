import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

interface ServicesListProps {
  expanded?: boolean;
}

export function ServicesList({ expanded = true }: ServicesListProps) {
  if (!expanded) {
    // Grid view
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} expanded={false} />
        ))}
      </div>
    );
  }

  // Expanded list view
  return (
    <div className="space-y-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} expanded={true} />
      ))}
    </div>
  );
}
