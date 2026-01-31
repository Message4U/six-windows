"use client";

export default function SecondCorinthiansFiveTwentyOne() {
  return (
    <main className="container">
      <a className="back" href="/journey/cross">← Back to CROSS</a>

      {/* HEADER IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/cross-header.png"
          alt="2 Corinthians 5:21"
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            objectPosition: "center 55%",
            display: "block",
          }}
        />
        <div style={{ padding: 18 }}>
          <h1 className="h1" style={{ marginTop: 10 }}>2 Corinthians 5:21</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Jesus took our sin so we could receive His righteousness.
          </div>
        </div>
      </div>

      {/* VERSE */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.”
        </p>
      </div>

      {/* WHAT THIS VERSE IS SAYING */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          2 Corinthians 5:21 is the heart of the gospel in one sentence. Jesus “knew no sin”—He was truly innocent.
          Yet God treated Him as the sin-bearer for us. This does not mean Jesus became sinful in character; it means
          our sin was placed on Him as our substitute. In exchange, God offers something we could never produce:
          righteousness. The cross is not only forgiveness—it is a full exchange: our guilt for His right standing.
        </p>
      </div>

      {/* WHY THIS MATTERS */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Many people relate to God through performance: “If I do better, God will accept me.” This verse destroys that
          system. Acceptance with God is not earned; it is received through Jesus. When you trust Christ, you are no longer
          defined by your worst moments, your shame, or your failure. You are given a new identity: righteous in Him.
          That changes how you pray, how you repent, and how you live—because you’re no longer trying to prove you belong.
        </p>
      </div>

      {/* BIG FORWARD QUESTION */}
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
          If God offers you Christ’s righteousness as a gift, what would change if you stopped trying to earn what’s already offered?
        </div>
      </div>

      {/* NEXT */}
      <div className="card episodeCard" style={{ marginTop: 24 }}>
        <img
          className="episodeThumb"
          src="/images/resurrection.png"
          alt="NEXT"
        />

        <div className="episodeMeta">
          <div className="episodeTopline">
            <span>NEXT</span>
            <span></span>
          </div>

          <div className="episodeTitleRow">
            <h3 className="episodeTitle">RESURRECTION</h3>

            <a className="playNext" href="/journey/resurrection">
              ▶ Play Next
            </a>
          </div>

          <div style={{ marginTop: 6, opacity: 0.85 }}>
            What does it mean that the work is finished?
          </div>
        </div>
      </div>

 <a className="back" href="/journey/cross">← Back to CROSS</a>
     
    </main>
  );
}
