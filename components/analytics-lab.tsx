"use client";
import { useState } from "react";
import {
  Download,
  RotateCcw,
  SlidersHorizontal,
  ArrowUpRight,
} from "lucide-react";
import {
  demoRows,
  months,
  summarise,
  filterSales,
  salesCsv,
  type Metric,
} from "@/data/analytics-demo";
const money = (v: number) =>
  new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(v);
const number = (v: number) => new Intl.NumberFormat("en-AU").format(v);
const labels = { revenue: "Revenue", profit: "Gross profit", orders: "Orders" };
export function AnalyticsLab() {
  const [channel, setChannel] = useState("All");
  const [period, setPeriod] = useState("H1");
  const [metric, setMetric] = useState<Metric>("revenue");
  const [month, setMonth] = useState<string | null>(null);
  const [view, setView] = useState("chart");
  const baseRows = filterSales(demoRows, channel, period);
  const rows = filterSales(demoRows, channel, period, month);
  const totals = summarise(rows);
  const trend = months
    .filter((m) => baseRows.some((r) => r.month === m))
    .map((m) => ({
      month: m,
      ...summarise(baseRows.filter((r) => r.month === m)),
    }));
  const max = Math.max(...trend.map((t) => t[metric]), 1);
  const categories = [...new Set(rows.map((r) => r.category))]
    .map((category) => ({
      category,
      ...summarise(rows.filter((r) => r.category === category)),
    }))
    .sort((a, b) => b[metric] - a[metric]);
  const leader = categories[0];
  const format = (v: number) => (metric === "orders" ? number(v) : money(v));
  const scope = `${month || (period === "H1" ? "Jan–Jun" : period === "Q1" ? "Jan–Mar" : "Apr–Jun")} 2025 · ${channel === "All" ? "All channels" : channel}`;
  function reset() {
    setChannel("All");
    setPeriod("H1");
    setMonth(null);
    setMetric("revenue");
    setView("chart");
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([salesCsv(rows)], { type: "text/csv;charset=utf-8;" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `synthetic-retail-${channel.toLowerCase()}-${month || period}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <section className="lab-section" id="analytics-lab">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">INTERACTIVE / ANALYTICS LAB</div>
            <h2>Explore the numbers. Ask better questions.</h2>
            <p>
              A working retail analysis: filter the data, inspect a month, then
              compare revenue with profit.
            </p>
          </div>
          <span className="demo-badge">SYNTHETIC DATA · DEMONSTRATION</span>
        </div>
        <div className="analytics-app">
          <div className="analytics-app-header">
            <div>
              <SlidersHorizontal size={19} />
              <div>
                <h3>Retail performance explorer</h3>
                <p>Jan–Jun 2025 · AUD · 36 aggregated sample rows</p>
              </div>
            </div>
            <button className="quiet-button" onClick={reset}>
              <RotateCcw size={14} />
              Reset
            </button>
          </div>
          <div className="analytics-controls">
            <label>
              Channel
              <select
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
              >
                <option value="All">All channels</option>
                <option>Online</option>
                <option>Store</option>
              </select>
            </label>
            <label>
              Period
              <select
                value={period}
                onChange={(e) => {
                  setPeriod(e.target.value);
                  setMonth(null);
                }}
              >
                <option value="H1">Jan–Jun 2025</option>
                <option value="Q1">Q1 · Jan–Mar</option>
                <option value="Q2">Q2 · Apr–Jun</option>
              </select>
            </label>
            <button className="quiet-button export-button" onClick={download}>
              <Download size={15} />
              Export filtered CSV
            </button>
          </div>
          <div className="analytics-scope" role="status">
            {scope}
            {month && (
              <button onClick={() => setMonth(null)}>Clear month ×</button>
            )}
          </div>
          <div className="kpi-grid">
            {(["revenue", "profit", "orders"] as Metric[]).map((m) => (
              <button
                key={m}
                aria-pressed={metric === m}
                onClick={() => setMetric(m)}
              >
                <span>{labels[m]}</span>
                <strong>
                  {m === "orders" ? number(totals[m]) : money(totals[m])}
                </strong>
                <small>
                  {m === "revenue"
                    ? "Sum of sales"
                    : m === "profit"
                      ? "Revenue less cost of goods"
                      : "Sum of recorded orders"}
                </small>
              </button>
            ))}
            <div>
              <span>Gross margin</span>
              <strong>
                {(totals.margin * 100).toFixed(1)}
                <em>%</em>
              </strong>
              <small>Gross profit ÷ revenue</small>
            </div>
          </div>
          <div className="analytics-main">
            <div className="trend-panel">
              <div className="chart-heading">
                <div>
                  <h4>{labels[metric]} by month</h4>
                  <p>Select a bar to inspect that month.</p>
                </div>
                <div
                  className="view-toggle"
                  role="group"
                  aria-label="Trend display"
                >
                  <button
                    aria-pressed={view === "chart"}
                    onClick={() => setView("chart")}
                  >
                    Chart
                  </button>
                  <button
                    aria-pressed={view === "table"}
                    onClick={() => setView("table")}
                  >
                    Table
                  </button>
                </div>
              </div>
              {view === "chart" ? (
                <div
                  className="bar-chart"
                  aria-label={`${labels[metric]} trend for ${channel} channels. Select a month to filter the summary.`}
                >
                  {trend.map((t) => (
                    <button
                      key={t.month}
                      className={month && month !== t.month ? "muted-bar" : ""}
                      aria-pressed={month === t.month}
                      aria-label={`${t.month}: ${format(t[metric])}. ${month === t.month ? "Clear" : "Filter to"} month.`}
                      onClick={() =>
                        setMonth(month === t.month ? null : t.month)
                      }
                    >
                      <span className="bar-value">{format(t[metric])}</span>
                      <span className="bar-track">
                        <span
                          style={{ height: `${(t[metric] / max) * 100}%` }}
                        />
                      </span>
                      <span className="bar-month">{t.month}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="table-scroll">
                  <table className="analytics-table">
                    <caption className="sr-only">
                      Monthly totals for selected channel and period
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Month</th>
                        <th scope="col">{labels[metric]}</th>
                        <th scope="col">Inspect</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trend.map((t) => (
                        <tr key={t.month}>
                          <th scope="row">{t.month}</th>
                          <td>{format(t[metric])}</td>
                          <td>
                            <button
                              aria-pressed={month === t.month}
                              onClick={() =>
                                setMonth(month === t.month ? null : t.month)
                              }
                            >
                              {month === t.month ? "Clear" : "Select"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <p className="chart-footnote">
                Bars share a zero baseline. Monthly trend retains the selected
                period for context.
              </p>
            </div>
            <aside className="insight-panel">
              <span className="eyebrow">READING THE DATA</span>
              <h4>
                {leader.category} leads {labels[metric].toLowerCase()}.
              </h4>
              <p>
                It contributes{" "}
                {((leader[metric] / (totals[metric] || 1)) * 100).toFixed(1)}%
                of {labels[metric].toLowerCase()} in the current selection.
              </p>
              <div className="insight-divider" />
              <strong>What I would investigate</strong>
              <p>
                Compare category margins before allocating budget. High revenue
                alone does not establish profitability.
              </p>
              <span className="insight-caution">
                Illustrative observation from synthetic data; no commercial
                outcome is implied.
              </span>
            </aside>
          </div>
          <div className="category-section">
            <div className="chart-heading">
              <h4>Category breakdown</h4>
              <span>Sorted by {labels[metric].toLowerCase()}</span>
            </div>
            <div className="table-scroll">
              <table className="analytics-table">
                <caption className="sr-only">
                  Category metrics for {scope}
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Revenue</th>
                    <th scope="col">Gross profit</th>
                    <th scope="col">Margin</th>
                    <th scope="col">Orders</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((c) => (
                    <tr key={c.category}>
                      <th scope="row">{c.category}</th>
                      <td>{money(c.revenue)}</td>
                      <td>{money(c.profit)}</td>
                      <td>{(c.margin * 100).toFixed(1)}%</td>
                      <td>{number(c.orders)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <details className="metric-definitions">
            <summary>
              Metric definitions & example SQL <ArrowUpRight size={15} />
            </summary>
            <p>
              Each row represents a month × channel × category. Gross profit
              excludes overheads and taxes. Margin uses total profit divided by
              total revenue, not an average of category percentages. Orders are
              additive across this synthetic dataset. The SQL below illustrates
              the same aggregation; the demo calculates in your browser.
            </p>
            <pre>
              <code>{`SELECT category,\n       SUM(revenue) AS revenue,\n       SUM(revenue - cost) AS gross_profit,\n       ROUND(100.0 * SUM(revenue - cost)\n         / NULLIF(SUM(revenue), 0), 1) AS margin_pct,\n       SUM(orders) AS orders\nFROM filtered_sales\nGROUP BY category\nORDER BY ${metric === "profit" ? "gross_profit" : metric} DESC;`}</code>
            </pre>
          </details>
        </div>
      </div>
    </section>
  );
}
