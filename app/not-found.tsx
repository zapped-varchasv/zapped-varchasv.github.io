import Link from "next/link";
export default function NotFound() {
  return (
    <main className="wrap not-found">
      <div className="eyebrow">404 / PAGE NOT FOUND</div>
      <h1>This page is off the map.</h1>
      <p>
        The link may have changed. Explore the latest projects from the
        portfolio.
      </p>
      <Link href="/" className="button primary">
        Back to portfolio →
      </Link>
    </main>
  );
}
