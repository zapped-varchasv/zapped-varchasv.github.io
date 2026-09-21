export function ProjectVisual({
  kind,
}: {
  kind: "retail" | "jobs" | "roads" | "pipeline";
}) {
  if (kind === "pipeline")
    return (
      <div className="visual pipeline-visual">
        <span>INGEST → TRANSFORM → VALIDATE → REPORT</span>
        <strong>
          A reliable path
          <br />
          from source to insight.
        </strong>
      </div>
    );
  return (
    <div className={"visual " + kind}>
      <div className="dashboard-mini">
        <div className="dash-sidebar">
          <b>vg.</b>
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="dash-content">
          <div className="dash-heading">
            <strong>
              {kind === "retail"
                ? "Retail performance"
                : kind === "jobs"
                  ? "Australian job market"
                  : "NSW road safety"}
            </strong>
            <span>LAYOUT CONCEPT</span>
          </div>
          <div className="dash-kpis">
            {(kind === "retail"
              ? ["Revenue", "Gross profit", "Margin", "Orders"]
              : kind === "jobs"
                ? ["Job ads", "Roles", "Skills", "States"]
                : ["Crash records", "Severity", "Factors", "Model"]
            ).map((x, i) => (
              <div key={x}>
                <span>{x}</span>
                <strong>{kind === "roads" && i === 0 ? "90,000+" : "—"}</strong>
              </div>
            ))}
          </div>
          <div className="dash-charts">
            <div>
              <span>
                {kind === "retail"
                  ? "Performance over time"
                  : kind === "jobs"
                    ? "Skills by role"
                    : "Severity analysis"}
              </span>
              <svg
                viewBox="0 0 330 110"
                role="img"
                aria-label="Illustrative chart layout; no measured findings"
              >
                <path className="grid-lines" d="M0 20H330M0 55H330M0 90H330" />
                <path
                  className="chart-line faint"
                  d="M0 95L35 80L65 89L100 55L130 70L165 40L195 50L225 25L260 38L290 12L330 22"
                />
                <path
                  className="chart-line"
                  d="M0 95L35 90L65 68L100 78L130 50L165 60L195 32L225 43L260 14L290 30L330 10"
                />
              </svg>
            </div>
            <div className="mini-bars">
              <span>
                {kind === "retail"
                  ? "By category"
                  : kind === "jobs"
                    ? "By location"
                    : "By factor"}
              </span>
              {[80, 60, 72, 43].map((w, i) => (
                <div key={i}>
                  <i style={{ width: w + "%" }} />
                </div>
              ))}
            </div>
          </div>
          <div className="dash-bottom">
            {kind === "roads"
              ? "Record count supplied in brief. Charts illustrative."
              : "Illustrative layout · Verified results to be added"}
          </div>
        </div>
      </div>
    </div>
  );
}
