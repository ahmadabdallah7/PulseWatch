import "./Card.css";

export default function Card() {
  return (
    <div>
      <div className="service-card">
        <div className="service-header">
          <div className="service-info">
            <img
              src="/logos/discord.png"
              alt="Discord"
              className="service-logo"
            />
            <h3>Discord</h3>
          </div>

          <span className="status-badge operational">Operational</span>
        </div>

        <div className="service-body">
          <p className="reports">
            <strong>1,243</strong> reports in the last hour
          </p>

          <button className="details-btn">View Details</button>
        </div>
      </div>
    </div>
  );
}
