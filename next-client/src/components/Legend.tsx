import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function Legend() {
  return (
    <div className="card section-card border-0 mt-4">
      <div className="card-body p-4">
        <div className="d-flex align-items-center mb-3">
          <InfoOutlinedIcon
            sx={{
              fontSize: 42,
              color: "#4F8CFF",
            }}
          />

          <h3 className="ms-3 mb-0 text-white">What does the status mean?</h3>
        </div>

        <div className="d-flex flex-wrap gap-4">
          <div className="text-white">
            <span className="status-dot bg-success"></span>
            Operational: The service is working as expected.
          </div>

          <div className="text-white">
            <span className="status-dot bg-warning"></span>
            Degraded: Some users are experiencing issues.
          </div>

          <div className="text-white">
            <span className="status-dot bg-danger"></span>
            Down: The service is having a major outage.
          </div>
        </div>
      </div>
    </div>
  );
}
