import axios from "axios";

// Components
import Hero from "@/components/Hero";
import Services from "@/components/Services";

// Types
type Service = {
  name: string;
  logo: string;
  status: string;
  reports1Hr: number;
  reports24Hr: number;
};

export default async function Home() {
  let services: Service[] = [];
  let error: string | null = null;

  try {
    const response = await axios.get(
      "https://isitdownstatus.com/api/v1/services?limit=10",
    );
    services = response.data.data;
  } catch (e) {
    error = "Failed to fetch services info";
  }
  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
}
