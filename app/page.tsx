export default function Home() {
  const windows = [
    { title: "CREATION", href: "/journey/creation", note: "God’s design", img: "/images/CREATION.mp4" },
    { title: "SIN", href: "/journey/sin", note: "Our turning away", img: "/images/SIN.mp4" },
    { title: "JUDGEMENT", href: "/journey/judgement", note: "Justice is real", img: "/images/CONSEQUENCE.mp4" },
    { title: "CROSS", href: "/journey/cross", note: "Jesus paid", img: "/images/CROSS.mp4" },
    { title: "RESURRECTION", href: "/journey/resurrection", note: "New life", img: "/images/resurrection.png" },
    { title: "RESPONSE", href: "/journey/response", note: "Receive Him", img: "/images/response.png" },
  ];

  return (
    <main className="container">
      <header className="header">
        <h1 className="title">Six Windows</h1>
        <p className="subtitle">
          A simple journey to reflect, read Scripture, and encounter Jesus.
        </p>
      </header>

      <section className="grid">
        {windows.map((w) => (
          <a
            key={w.href}
            className="card homeCard"
            href={w.href}
          >
            <div style={{ overflow: "hidden", borderRadius: 18 }}>
              {w.img.endsWith(".mp4") ? (
                <video
                  src={w.img}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
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

      <div className="footer">
        Tip: You can share a direct link to any window during evangelism.
      </div>
    </main>
  );
}