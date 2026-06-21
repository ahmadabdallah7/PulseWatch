import axios from "axios";

// Styling
import "./Servies.css";

// Components
import ServicesClient from "@/components/ServicesClient";

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

export default async function Services() {
  let error: string | null = null;
  let services: Service[] = [];

  try {
    const response = await axios.get(
      "https://isitdownstatus.com/api/v1/services?limit=10",
    );
    services = response.data.data;
  } catch (e) {
    error = "Failed to fetch the services list";
  }

  return (
    <div className="container mt-4 mb-4">
      <h2>Top 10 most searched services</h2>
      <p className="mb-4">in the last hour</p>
      <ServicesClient services={services} />
    </div>
  );
}
