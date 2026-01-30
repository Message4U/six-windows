export default function Home() {
  const windows = [
    { title: "CREATION", href: "/journey/creation", note: "God’s design", img: "/images/home-creation-la.jpg" },
    { title: "SIN", href: "/journey/sin", note: "Our turning away", img: "/images/sin-home-hq.jpg",},
    { title: "JUDGEMENT", href: "/journey/judgement", note: "Justice is real", img: "/images/judgement.png" },
    { title: "CROSS", href: "/journey/cross", note: "Jesus paid", img: "/images/cross.png" },
    { title: "RESURRECTION", href: "/journey/resurrection", note: "New life", img: "/images/resurrection.jpg" },
    { title: "RESPONSE", href: "/journey/response", note: "Receive Him", img: "/images/response.jpg" },
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
        {windows.map((w, idx) => (
        <a
  key={w.href}
  className="card homeCard"
  href={w.href}
>


            <div style={{ overflow: "hidden", borderRadius: 18 }}>
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

  <div style={{ padding: 16 }}>
    <div className="h1" style={{ marginTop: 6 }}>{w.title}</div>
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
