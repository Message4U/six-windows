export default function Creation() {
  return (
    <main className="container">
      <a className="back" href="/">← Back</a>

      {/* HERO IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/creation.jpg"
          alt="Creation"
          style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
        />
        <div style={{ padding: 18 }}>
          <span className="badge">Window 1</span>
          <h1 className="h1" style={{ marginTop: 10 }}>CREATION</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Every breath points back to an original design, full of real purpose.
          </div>
        </div>
      </div>

      {/* MAIN PARAGRAPH */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ marginBottom: 0 }}>
          The Bible begins with a clear and foundational claim: God created the world, and He did so intentionally.
          Life is not self-made, random, or directionless—it exists because God chose to give it life.
          Before choices, failures, questions, or beliefs, there is a Creator who brings meaning to life by creating it with purpose.
          You may still be exploring what you believe, but this journey starts here—with the understanding that the world
          and human life are designed, not accidental. From this starting point, everything else in the story begins to make sense.
        </p>
      </div>

    {/* SCRIPTURE (FEATURED) */}
<div style={{ marginTop: 14 }}>
  <h2 style={{ marginTop: 0 }}>Scripture</h2>

  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
    {/* Genesis 1:1 */}
    <div className="card" style={{ flex: "1 1 220px" }}>
      <a href="/bible/genesis-1-1" style={{ textDecoration: "none" }}>
        <span className="badge">EXPLORE</span>
      </a>

      <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
        Genesis 1:1
      </div>

      <div style={{ marginTop: 8, opacity: 0.75 }}>
        “In the beginning God created the heaven and the earth.”
      </div>
    </div>

    {/* Revelation 4:11 */}
    <div className="card" style={{ flex: "1 1 220px" }}>
      <a href="/bible/revelation-4-11" style={{ textDecoration: "none" }}>
        <span className="badge">EXPLORE</span>
      </a>

      <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
        Revelation 4:11
      </div>

      <div style={{ marginTop: 8, opacity: 0.75 }}>
        “Thou art worthy, O Lord… for thou hast created all things…”
      </div>
    </div>

    {/* Colossians 1:15–17 */}
    <div className="card" style={{ flex: "1 1 220px" }}>
      <a href="/bible/colossians-1-15-17" style={{ textDecoration: "none" }}>
        <span className="badge">EXPLORE</span>
      </a>

      <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
        Colossians 1:15–17
      </div>

      <div style={{ marginTop: 8, opacity: 0.75 }}>
        “By him were all things created… and by him all things consist.”
      </div>
    </div>
  </div>
</div>


<h2 style={{ marginTop: 24 }}>Reflect</h2>

<div className="card" style={{ marginTop: 10 }}>
  <ul className="list" style={{ marginBottom: 0 }}>
    <li>If your life was created with purpose, how might that change the way you see yourself?</li>
    <li>What does it mean for you to consider that your life began with intention, not accident?</li>
  </ul>
</div>



    </main>
  );
}
