"use client";

export default function RomansSixFour() {
  return (
    <main className="container">
      <a className="back" href="/journey/resurrection">← Back</a>

      {/* HEADER IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/resurrection-header.png"
          alt="Romans 6:4"
          style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
        />
        <div style={{ padding: 18 }}>
          <h1 className="h1" style={{ marginTop: 10 }}>Romans 6:4</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Resurrection means new life now.
          </div>
        </div>
      </div>

      {/* VERSE */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead
          by the glory of the Father, even so we also should walk in newness of life.”
        </p>
      </div>

      {/* WHAT THIS VERSE IS SAYING */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Romans 6:4 teaches that the resurrection is not only something Jesus experienced—it becomes something
          we share in. Through Christ, the old life shaped by sin is buried, and a new life begins. Resurrection
          is not just future hope; it is present transformation. God raises people spiritually even now.
        </p>
      </div>

      {/* WHY THIS MATTERS */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Many people feel trapped by their past—habits, regrets, patterns they can’t break. This verse says
          Jesus offers more than forgiveness; He offers newness. The resurrection means you don’t have to stay
          who you were. A new way of walking is possible, because a new life has begun in Christ.
        </p>
      </div>

      {/* BIG QUESTION */}
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
          What would it look like for your life to actually become new because Jesus is alive?
        </div>
      </div>

      {/* NEXT */}
      <div className="card episodeCard" style={{ marginTop: 24 }}>
        <img
          className="episodeThumb"
          src="/images/response.png"
          alt="NEXT"
        />

        <div className="episodeMeta">
          <div className="episodeTopline">
            <span>NEXT</span>
            <span></span>
          </div>

          <div className="episodeTitleRow">
            <h3 className="episodeTitle">RESPONSE</h3>

            <a className="playNext" href="/journey/response">
              ▶ Play Next
            </a>
          </div>

          <div style={{ marginTop: 6, opacity: 0.85 }}>
            Resurrection is bigger than one person—what does it mean for humanity?
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <a href="/journey/resurrection">← Back to RESURRECTION</a>
      </div>
    </main>
  );
}
