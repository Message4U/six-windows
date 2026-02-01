"use client";

export default function Resurrection() {
  return (
    <main className="container">
      

      {/* HERO IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/resurrection-header.png"
          alt="Resurrection"
          style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
        />
        <div style={{ padding: 18 }}>
          <span className="badge">Window 5</span>
          <h1 className="h1" style={{ marginTop: 10 }}>RESURRECTION</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Death did not win. Jesus rose—and everything changes.
          </div>
        </div>
      </div>

      {/* MAIN PARAGRAPH */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ marginBottom: 0 }}>
          The resurrection is not a symbolic ending—it is the decisive victory of Jesus over sin and death. The cross
          proves God’s love; the resurrection proves His power. Jesus didn’t only forgive sin—He broke its ultimate
          consequence. Because He rose, hope is not wishful thinking. It is anchored in an event that changed history.
          If Jesus is alive, then salvation is real, new life is possible, and the story is moving toward restoration.
        </p>
      </div>

      {/* SCRIPTURE */}
      <div style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Scripture</h2>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {/* Matthew 28:6 */}
          <div className="card" style={{ flex: "1 1 220px" }}>
            <a href="/bible/matthew-28-6" style={{ textDecoration: "none" }}>
              <span className="badge">EXPLORE</span>
            </a>

            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
              Matthew 28:6
            </div>

            <div style={{ marginTop: 8, opacity: 0.75 }}>
              “He is not here: for he is risen…”
            </div>
          </div>

          {/* Romans 6:4 */}
          <div className="card" style={{ flex: "1 1 220px" }}>
            <a href="/bible/romans-6-4" style={{ textDecoration: "none" }}>
              <span className="badge">EXPLORE</span>
            </a>

            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
              Romans 6:4
            </div>

            <div style={{ marginTop: 8, opacity: 0.75 }}>
              “...that we also should walk in newness of life.”
            </div>
          </div>

          {/* 1 Corinthians 15:20–22 */}
          <div className="card" style={{ flex: "1 1 220px" }}>
            <a href="/bible/1-corinthians-15-20-22" style={{ textDecoration: "none" }}>
              <span className="badge">EXPLORE</span>
            </a>

            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
              1 Corinthians 15:20–22
            </div>

            <div style={{ marginTop: 8, opacity: 0.75 }}>
              “...in Christ shall all be made alive.”
            </div>
          </div>
        </div>
      </div>

      {/* REFLECT */}
      <h2 style={{ marginTop: 24 }}>Reflect</h2>

      <div className="card" style={{ marginTop: 10 }}>
        <ul className="list" style={{ marginBottom: 0 }}>
          <li>If Jesus rose from the dead, what does that say about His authority over your life?</li>
          <li>Where do you most need “new life” right now?</li>
        </ul>
      </div>

      <div style={{ marginTop: 18 }}>
        
      </div>
    </main>
  );
}
