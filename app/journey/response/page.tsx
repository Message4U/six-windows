"use client";

export default function Response() {
  return (
    <main className="container">
      

      {/* HERO IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/response-header.png"
          alt="Response"
          style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
        />
        <div style={{ padding: 18 }}>
          <span className="badge">Window 6</span>
          <h1 className="h1" style={{ marginTop: 10 }}>RESPONSE</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            The story now becomes personal. What will you do with Jesus?
          </div>
        </div>
      </div>

      {/* MAIN PARAGRAPH */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ marginBottom: 0 }}>
          Christianity is not only information—it is invitation. Creation shows God’s purpose. Sin shows our need.
          Judgement shows what is at stake. The cross shows God’s love. The resurrection shows His victory.
          Now the question is: how will you respond?
          Jesus calls people not just to observe Him, but to trust Him, follow Him, and receive new life.
        </p>
      </div>

      {/* SCRIPTURE */}
      <div style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Scripture</h2>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {/* Acts 2:38 */}
          <div className="card" style={{ flex: "1 1 220px" }}>
            <a href="/bible/acts-2-38" style={{ textDecoration: "none" }}>
              <span className="badge">EXPLORE</span>
            </a>

            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
              Acts 2:38
            </div>

            <div style={{ marginTop: 8, opacity: 0.75 }}>
              “Repent… and be baptized…”
            </div>
          </div>

          {/* John 1:12 */}
          <div className="card" style={{ flex: "1 1 220px" }}>
            <a href="/bible/john-1-12" style={{ textDecoration: "none" }}>
              <span className="badge">EXPLORE</span>
            </a>

            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
              John 1:12
            </div>

            <div style={{ marginTop: 8, opacity: 0.75 }}>
              “To them gave he power to become the sons of God…”
            </div>
          </div>

          {/* Romans 10:9 */}
          <div className="card" style={{ flex: "1 1 220px" }}>
            <a href="/bible/romans-10-9" style={{ textDecoration: "none" }}>
              <span className="badge">EXPLORE</span>
            </a>

            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
              Romans 10:9
            </div>

            <div style={{ marginTop: 8, opacity: 0.75 }}>
              “If thou shalt confess with thy mouth…”
            </div>
          </div>
        </div>
      </div>

      {/* REFLECT */}
      <h2 style={{ marginTop: 24 }}>Reflect</h2>

      <div className="card" style={{ marginTop: 10 }}>
        <ul className="list" style={{ marginBottom: 0 }}>
          <li>What has stood out most to you in this journey so far?</li>
          <li>What would it look like for you to take a real step toward Jesus?</li>
          <li>If this story is true, what response makes sense?</li>
        </ul>
      </div>

      <div style={{ marginTop: 18 }}>
       
      </div>
    </main>
  );
}
