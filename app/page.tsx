"use client";

import { useEffect, useRef } from "react";

type Win = { title: string; href: string; note: string; img: string };

export default function Home() {
  const windows: Win[] = [
    { title: "CREATION", href: "/journey/creation", note: "God’s design", img: "/images/CREATION.mp4" },
    { title: "SIN", href: "/journey/sin", note: "Our turning away", img: "/images/SIN.mp4" },
    { title: "CONSEQUENCES", href: "/journey/consequences", note: "Justice is real", img: "/images/CONSEQUENCE.mp4" },
    { title: "CROSS", href: "/journey/cross", note: "Jesus paid", img: "/images/CROSS.mp4" },
    { title: "RESURRECTION", href: "/journey/resurrection", note: "New life", img: "/images/RESURRECTION.mp4" },
    { title: "RESPONSE", href: "/journey/response", note: "Receive Him", img: "/images/CHOICES.mp4" },
  ];

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const tryPlayAll = () => {
    Object.values(videoRefs.current).forEach((v) => {
      if (!v) return;

      // Ensure Safari sees these as properties too (not just JSX attrs)
      v.muted = true;
      v.playsInline = true;
      v.autoplay = true;
      v.loop = true;

      const p = v.play();
      if (p && typeof (p as any).catch === "function") (p as any).catch(() => {});
    });
  };

  useEffect(() => {
    // Attempt autoplay immediately (works on many mobile browsers)
    tryPlayAll();

    // iOS Safari often requires a user gesture once per session.
    // This starts videos on the first touch/scroll/click anywhere.
    const unlock = () => {
      tryPlayAll();
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", unlock);
      window.removeEventListener("click", unlock);
    };

    window.addEventListener("touchstart", unlock, { passive: true });
    window.addEventListener("scroll", unlock, { passive: true });
    window.addEventListener("click", unlock);

    return () => {
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", unlock);
      window.removeEventListener("click", unlock);
    };
  }, []);

  return (
    <main className="container">
      <header className="header">
        <h1 className="title">Six Windows</h1>
        <p className="subtitle">A simple journey to reflect, read Scripture, and encounter Jesus.</p>
      </header>

      <section className="grid">
        {windows.map((w) => (
          <a key={w.href} className="card homeCard" href={w.href}>
            <div style={{ overflow: "hidden", borderRadius: 18 }}>
              {w.img.endsWith(".mp4") ? (
                <video
                  ref={(el) => {
                    videoRefs.current[w.href] = el;
                  }}
                  src={w.img}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  controls={false}
                  style={{
                    width: "100%",
                    height: 140,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ) : (
                <img
                  src={w.img}
                  alt={w.title}
                  style={{
                    width: "100%",
                    height: 140,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              )}

              <div style={{ padding: 16 }}>
                <div className="h1" style={{ marginTop: 6 }}>
                  {w.title}
                </div>
                <p className="p">{w.note}</p>
              </div>
            </div>
          </a>
        ))}
      </section>

      <div className="footer">Tip: You can share a direct link to any window during evangelism.</div>
    </main>
  );
}