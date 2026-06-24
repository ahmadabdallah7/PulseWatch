import axios from "axios";

// Components
import SelectedService from "@/components/SelectedService";
import Error from "@/components/Error";
import Legend from "@/components/Legend";

// Types
type ResultPageParams = {
  params: Promise<{
    query: string;
  }>;
};

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

export default async function Result({ params }: ResultPageParams) {
  const { query } = await params;

  let service: Service | null = null;
  let error: string | null = null;

  try {
    const response = await axios.get(
      `https://isitdownstatus.com/api/v1/status/${query}`,
    );
    if (response.data.data) {
      service = response.data.data;
    }
  } catch (e) {
    error = "Service is not found, try a different search.";
  }

  return (
    <div className="container">
      <div className="mt-5">
        {service && (
          <div>
            <SelectedService service={service} />
            <Legend />
          </div>
        )}
        {error && <Error error={error} />}
        <div className="mb-4"></div>
      </div>
    </div>
  );
}
