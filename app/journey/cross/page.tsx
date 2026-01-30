"use client";

export default function Cross() {
  return (
    <main className="container">
      <a className="back" href="/journey/judgement">← Back</a>

      {/* HERO IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/cross-header.png"
          alt="Cross"
          style={{ width: "100%", height: 240, objectFit: "cover", objectPosition: "center 44%", 
display: "block" }}
        />
        <div style={{ padding: 18 }}>
          <span className="badge">Window 4</span>
          <h1 className="h1" style={{ marginTop: 10 }}>CROSS</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            God’s justice and mercy meet in one place.
          </div>
        </div>
      </div>

      {/* MAIN PARAGRAPH */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ marginBottom: 0 }}>
          The cross is the turning point of the Bible’s story. Sin deserves judgement, but God does not abandon
          humanity. Instead, He steps into the world through Jesus. At the cross, justice is satisfied and mercy
          is offered. This is where God’s love becomes personal, costly, and undeniable.
        </p>
      </div>

      {/* SCRIPTURE */}
      <div style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Scripture</h2>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {/* Isaiah 53:5 */}
          <div className="card" style={{ flex: "1 1 220px" }}>
            <a href="/bible/isaiah-53-5" style={{ textDecoration: "none" }}>
              <span className="badge">EXPLORE</span>
            </a>

            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
              Isaiah 53:5
            </div>

            <div style={{ marginTop: 8, opacity: 0.75 }}>
              “He was wounded for our transgressions…”
            </div>
          </div>

          {/* 2 Corinthians 5:21 */}
          <div className="card" style={{ flex: "1 1 220px" }}>
            <a href="/bible/2-corinthians-5-21" style={{ textDecoration: "none" }}>
              <span className="badge">EXPLORE</span>
            </a>

            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
              2 Corinthians 5:21
            </div>

            <div style={{ marginTop: 8, opacity: 0.75 }}>
              “He made him to be sin for us…”
            </div>
          </div>

          {/* John 19:30 */}
          <div className="card" style={{ flex: "1 1 220px" }}>
            <a href="/bible/john-19-30" style={{ textDecoration: "none" }}>
              <span className="badge">EXPLORE</span>
            </a>

            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
              John 19:30
            </div>

            <div style={{ marginTop: 8, opacity: 0.75 }}>
              “It is finished.”
            </div>
          </div>
        </div>
      </div>

      {/* REFLECT */}
      <h2 style={{ marginTop: 24 }}>Reflect</h2>

      <div className="card" style={{ marginTop: 10 }}>
        <ul className="list" style={{ marginBottom: 0 }}>
          <li>If Jesus carried sin’s weight, what does that mean for your shame?</li>
          <li>What would it look like to trust what was finished at the cross?</li>
        </ul>
      </div>

     
    </main>
  );
}
