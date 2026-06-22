import axios from "axios";

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
    if (response.data.error) {
      error = response.data.error;
    } else {
      service = response.data.data;
    }
  } catch (e) {
    error = "Failed to fetch the service data";
  }

  return <div></div>;
}
