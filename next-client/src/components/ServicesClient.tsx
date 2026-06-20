"use client";

// Components
import Card from "@/components/Card";

// Types
type Service = {
  slug: string;
  name: string;
  category: string;
  logo_url: string;
  status: string;
  official_indicator: string | null;
  report_count_1h: number;
  report_count_24h: number;
};

type ServiceClientProps = {
  services: Service[];
};

export default function ServicesClient({ services }: ServiceClientProps) {
  return (
    <div>
      {services.map((service) => {
        return <Card key={service.slug} serviceName={service.name} />;
      })}
    </div>
  );
}
