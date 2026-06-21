"use client";

// Components
import Card from "@/components/Card";
import Box from "@mui/material/Box";

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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          justifyContent: "center",
          gap: 2,
          mt: 5,
          width: "100%",
        }}
      >
        {services.map((service) => {
          return (
            <Card
              key={service.slug}
              serviceName={service.name}
              logoUrl={service.logo_url}
              status={service.status}
              indicator={service.official_indicator}
              reports1h={service.report_count_1h}
              reports24h={service.report_count_24h}
            />
          );
        })}
      </Box>
    </div>
  );
}
