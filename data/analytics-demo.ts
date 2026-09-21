// Synthetic retail data for the interactive demonstration, not employer/project results.
// Grain: one row per month, channel and category. Money is AUD, excluding tax.
export type SalesRow = {
  month: string;
  channel: "Online" | "Store";
  category: string;
  revenue: number;
  cost: number;
  orders: number;
};
export type Metric = "revenue" | "profit" | "orders";
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const seeds = [
  {
    category: "Home",
    channel: "Online" as const,
    revenue: [8200, 9100, 8600, 10400, 12100, 13900],
    margin: 0.32,
    aov: 82,
  },
  {
    category: "Home",
    channel: "Store" as const,
    revenue: [14500, 13900, 15200, 14800, 16000, 16400],
    margin: 0.29,
    aov: 65,
  },
  {
    category: "Electronics",
    channel: "Online" as const,
    revenue: [16200, 18400, 17800, 21100, 23400, 25800],
    margin: 0.18,
    aov: 180,
  },
  {
    category: "Electronics",
    channel: "Store" as const,
    revenue: [19200, 18500, 20100, 19400, 21500, 22000],
    margin: 0.16,
    aov: 200,
  },
  {
    category: "Apparel",
    channel: "Online" as const,
    revenue: [6100, 6800, 7300, 7900, 8300, 9800],
    margin: 0.42,
    aov: 61,
  },
  {
    category: "Apparel",
    channel: "Store" as const,
    revenue: [11200, 10600, 11800, 12300, 11900, 12800],
    margin: 0.38,
    aov: 56,
  },
];
export const demoRows: SalesRow[] = seeds.flatMap((s) =>
  months.map((month, i) => ({
    month,
    channel: s.channel,
    category: s.category,
    revenue: s.revenue[i],
    cost: Math.round(s.revenue[i] * (1 - s.margin)),
    orders: Math.round(s.revenue[i] / s.aov),
  })),
);
export function summarise(rows: SalesRow[]) {
  const total = rows.reduce(
    (a, r) => ({
      revenue: a.revenue + r.revenue,
      cost: a.cost + r.cost,
      orders: a.orders + r.orders,
    }),
    { revenue: 0, cost: 0, orders: 0 },
  );
  return {
    ...total,
    profit: total.revenue - total.cost,
    margin: total.revenue ? (total.revenue - total.cost) / total.revenue : 0,
    aov: total.orders ? total.revenue / total.orders : 0,
  };
}
export function filterSales(
  rows: SalesRow[],
  channel: string,
  period: string,
  month: string | null = null,
) {
  return rows.filter(
    (r) =>
      (channel === "All" || r.channel === channel) &&
      (period === "H1" ||
        (period === "Q1"
          ? months.indexOf(r.month) < 3
          : months.indexOf(r.month) >= 3)) &&
      (!month || r.month === month),
  );
}
export function salesCsv(rows: SalesRow[]) {
  return [
    "Month,Channel,Category,Revenue_AUD,Cost_AUD,Profit_AUD,Orders",
    ...rows.map((r) =>
      [
        r.month,
        r.channel,
        r.category,
        r.revenue,
        r.cost,
        r.revenue - r.cost,
        r.orders,
      ].join(","),
    ),
  ].join("\r\n");
}
