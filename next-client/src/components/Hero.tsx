// Styling
import "./Hero.css";

export default function Hero() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center px-4 pt-4 pb-4 border-bottom hero-section">
      <div className="row flex-lg-row-reverse justify-content-center align-items-center py-3 g-5">
        <div className="d-flex col-10 col-sm-8 col-lg-6">
          <img
            src="images/Hero v2.png"
            className="d-block ms-5 img-fluid"
            alt="Bootstrap Themes"
            width="430"
            height="700"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 ps-auto ps-xxl-0 pe-4">
          <h1
            id="header"
            className="display-5 fw-bold text-body-emphasis text-nowrap lh-1 mb-3"
          >
            Real-time status monitoring.
          </h1>
          <h2 id="punch-line">Know what's down instantly.</h2>
          <p className="lead">
            PulseWatch tracks outages, incidents, and service health across
            popular online platforms.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
        </div>
      </div>
    </div>
  );
}
