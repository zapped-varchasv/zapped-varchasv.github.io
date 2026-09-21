"use client";
import type { AnchorHTMLAttributes, MouseEvent } from "react";

// Handle same-document navigation explicitly so closing the mobile menu and
// Next's scroll restoration cannot race the native fragment scroll.
export function SectionLink({
  href,
  onClick,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  function navigate(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !href
    )
      return;
    const destination = new URL(href, window.location.href);
    if (
      destination.origin !== window.location.origin ||
      destination.pathname !== window.location.pathname ||
      !destination.hash
    )
      return;
    const section = document.getElementById(
      decodeURIComponent(destination.hash.slice(1)),
    );
    if (!section) return;
    event.preventDefault();
    window.history.pushState(null, "", destination.hash);
    window.requestAnimationFrame(() => {
      section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
      section.scrollIntoView({ behavior: "instant", block: "start" });
    });
  }
  return (
    <a {...props} href={href} onClick={navigate}>
      {children}
    </a>
  );
}
