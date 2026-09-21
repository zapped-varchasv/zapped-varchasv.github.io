import assert from "node:assert/strict";
import {
  demoRows,
  filterSales,
  summarise,
  salesCsv,
} from "../data/analytics-demo.ts";
assert.equal(demoRows.length, 36);
assert.equal(
  new Set(demoRows.map((r) => `${r.month}/${r.channel}/${r.category}`)).size,
  36,
);
assert.equal(filterSales(demoRows, "Online", "Q1").length, 9);
assert.equal(filterSales(demoRows, "Store", "Q2", "Jun").length, 3);
assert.equal(filterSales(demoRows, "All", "Q1", "Jun").length, 0);
const total = summarise(demoRows);
assert.equal(total.revenue, 513300);
assert.equal(total.profit, total.revenue - total.cost);
const fixture = [
  {
    month: "Jan",
    channel: "Store",
    category: "A",
    revenue: 100,
    cost: 50,
    orders: 2,
  },
  {
    month: "Jan",
    channel: "Online",
    category: "B",
    revenue: 900,
    cost: 810,
    orders: 3,
  },
];
assert.equal(summarise(fixture).margin, 0.14);
assert.equal(summarise([]).margin, 0);
assert.equal(summarise([]).aov, 0);
assert.equal(
  salesCsv(filterSales(demoRows, "Online", "Q1", "Jan")).split("\r\n").length,
  4,
);
assert.equal(
  summarise(filterSales(demoRows, "All", "Q1")).revenue +
    summarise(filterSales(demoRows, "All", "Q2")).revenue,
  total.revenue,
);
console.log(
  "Analytics calculations, weighted margin, filtering, grain and CSV checks passed.",
);
