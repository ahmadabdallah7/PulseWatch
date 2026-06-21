import "./Card.css";

// Types
type CardProps = {
  serviceName: string;
  logoUrl: string;
  status: string;
  indicator: string | null;
  reports1h: number;
  reports24h: number;
};

export default function Card({
  serviceName,
  logoUrl,
  status,
  indicator,
  reports1h,
  reports24h,
}: CardProps) {
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

  const statusClass = getStatusClass(status);

  return (
    <div className="service-card">
      <div className="d-flex align-items-start">
        <img src={logoUrl} alt={serviceName} className="service-logo" />

        <div className="ms-3">
          <h5 className="service-name mb-1">{serviceName}</h5>

          <div className="d-flex align-items-center">
            <span className={`status-dot bg-${statusClass}`}></span>
            <span className={`status-text text-${statusClass} capitalize-text`}>
              {status}
            </span>
          </div>
        </div>
      </div>

      <div className="reports-section">
        <h2 className="reports-count">{reports1h}</h2>
        <p className="reports-label">reports</p>
      </div>
    </div>
  );
}
