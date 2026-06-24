import ErrorIcon from "@mui/icons-material/Error";

// Types
type ErrorProps = {
  error: string;
};

export default function Error({ error }: ErrorProps) {
  return (
    <div className="card d-inline-block section-card border-0 mt-4">
      <div className="card-body p-4">
        <div className="d-flex align-items-center">
          <ErrorIcon
            sx={{
              fontSize: 42,
              color: "#c7401e",
            }}
          />
          <h3 className="ms-3 mb-0 text-white">{error}</h3>
        </div>
      </div>
    </div>
  );
}
