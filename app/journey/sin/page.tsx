export default function Sin() {
  return (
    <main className="container">
      <a className="back" href="/">← Back</a>

      {/* HERO IMAGE (same structure as Creation) */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/sin-header-wide.jpg"
          alt="Sin"
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            objectPosition: "center 35%",
            display: "block",
          }}
        />
        <div style={{ padding: 18 }}>
          <span className="badge">Window 2</span>
          <h1 className="h1" style={{ marginTop: 10 }}>SIN</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Sin begins when we turn away from trusting God and choose to live life on our own terms instead of His.
          </div>
        </div>
      </div>

      {/* DESCRIPTION BOX (same as Creation) */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ marginBottom: 0 }}>
          Sin is not simply about making bad choices or breaking moral rules—it is about direction and trust.
          When humanity chose to live independently from God, something deeper than behavior was affected.
          Trust was replaced with self-reliance, and God’s design was exchanged for personal control.
          Even when life appears normal, successful, or well-intentioned, living apart from God slowly
          reshapes how we see ourselves, others, and the world. Sin distorts what was created good,
          not because God failed, but because trust was broken.
        </p>
      </div>

     {/* SCRIPTURE (FEATURED) */}
<div style={{ marginTop: 14 }}>
  <h2 style={{ marginTop: 0 }}>Scripture</h2>

  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
    {/* Genesis 6:5 */}
    <div className="card" style={{ flex: "1 1 220px" }}>
      <a href="/bible/genesis-6-5" style={{ textDecoration: "none" }}>
        <span className="badge">EXPLORE</span>
      </a>

      <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
        Genesis 6:5
      </div>

      <div style={{ marginTop: 8, opacity: 0.75 }}>
        “Every inclination of the human heart was only evil all the time.”
      </div>
    </div>

    {/* Romans 3:10–12 */}
    <div className="card" style={{ flex: "1 1 220px" }}>
      <a href="/bible/romans-3-10-12" style={{ textDecoration: "none" }}>
        <span className="badge">EXPLORE</span>
      </a>

      <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
        Romans 3:10–12
      </div>

      <div style={{ marginTop: 8, opacity: 0.75 }}>
        “There is no one righteous, not even one…”
      </div>
    </div>

    {/* Mark 8:38 */}
    <div className="card" style={{ flex: "1 1 220px" }}>
      <a href="/bible/mark-8-38" style={{ textDecoration: "none" }}>
        <span className="badge">EXPLORE</span>
      </a>

      <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
        Mark 8:38
      </div>

      <div style={{ marginTop: 8, opacity: 0.75 }}>
        “If anyone is ashamed of me… the Son of Man will be ashamed of them.”
      </div>
    </div>
  </div>
</div>


      {/* REFLECT (same style as Creation: title outside box) */}
      <h2 style={{ marginTop: 24 }}>Reflect</h2>
      <div className="card" style={{ marginTop: 10 }}>
        <ul className="list" style={{ marginBottom: 0 }}>
          <li>In what areas of your life do you tend to rely on yourself more than trusting God?</li>
          <li>How might choosing your own way, even with good intentions, affect your relationship with God over time?</li>
        </ul>
      </div>
    </main>
  );
}
