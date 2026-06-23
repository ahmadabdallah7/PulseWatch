import CategoryIcon from "@mui/icons-material/Category";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import DescriptionIcon from "@mui/icons-material/Description";

// Styling
import "./SelectedService.css";

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

type SelectedServiceProps = {
  service: Service;
};

export default function SelectedService({ service }: SelectedServiceProps) {
  function getStatusClass(status: string) {
    switch (status) {
      case "operational":
        return "success";

      case "degraded":
        return "warning";

      case "down":
        return "danger";

      default:
        return "secondary";
    }
  }

  const statusClass = getStatusClass(service.status);

  return (
    <div className="card service-details-card border-0">
      <div className="card-body p-5 main-card">
        <div className="row align-items-center">
          {/* Logo + Name */}
          <div className="col-lg-4 d-flex align-items-center mb-5 mb-xl-0">
            <img
              src={service.logo_url}
              alt={service.name}
              className="service-logo-large"
            />

            <div className="ms-3 name-status">
              <h1 className="service-title">{service.name}</h1>

              <div className="d-flex align-items-center">
                <span className={`status-dot bg-${statusClass}`}></span>
                <span className={`status-${statusClass} capitalize-text`}>
                  {service.status}
                </span>
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="col-lg-3 mb-3 mb-xl-0 info-section">
            <div className="info-box">
              <div className="icon-box">
                <CategoryIcon fontSize="large" />
              </div>

              <div>
                <p className="info-label fw-medium">Category</p>
                <h4 className="capitalize-text text-white">
                  {service.category}
                </h4>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="col-lg-3 mb-3 mb-xl-0">
            <div className="info-box">
              <div className="icon-box status-red">
                <MonitorHeartIcon fontSize="large" />
              </div>

              <div>
                <p className="info-label fw-medium">Status</p>
                <h4 className={`text-${statusClass} capitalize-text`}>
                  {service.status}
                </h4>
              </div>
            </div>
          </div>

          {/* Reports */}
          <div className="col-lg-2 mb-3 mb-xl-0 reports-section">
            <div className="info-box">
              <div className="icon-box">
                <DescriptionIcon fontSize="large" />
              </div>

              <div>
                <p className="info-label fw-medium text-nowrap">Reports (1h)</p>

                <h3 className="text-white">{service.report_count_1h}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
