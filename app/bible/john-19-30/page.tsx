"use client";

export default function JohnNineteenThirty() {
  return (
    <main className="container">
      <a className="back" href="/journey/cross">← Back to CROSS</a>

      {/* HEADER IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/cross-header.png"
          alt="John 19:30"
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            objectPosition: "center 55%",
            display: "block",
          }}
        />
        <div style={{ padding: 18 }}>
          <h1 className="h1" style={{ marginTop: 10 }}>John 19:30</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            The work of salvation is complete.
          </div>
        </div>
      </div>

      {/* VERSE */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “When Jesus therefore had received the vinegar, he said, It is finished:
          and he bowed his head, and gave up the ghost.”
        </p>
      </div>

      {/* WHAT THIS VERSE IS SAYING */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          John 19:30 records the final words of Jesus on the cross: “It is finished.” This was not a cry of defeat,
          but a declaration of completion. The mission was accomplished. The debt of sin was paid. Everything needed
          for salvation had been fully carried out. Jesus did not leave redemption half-done—He finished it completely.
        </p>
      </div>

      {/* WHY THIS MATTERS */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Many people live under constant pressure: to prove themselves, to fix their failures, to earn love, to make up
          for the past. Jesus’ words cut through all of that: the work is finished. You do not add to what He completed.
          Faith is not striving to become worthy—it is resting in what Christ has already done. The cross means the
          payment is not pending. It is complete.
        </p>
      </div>

      {/* BIG FORWARD QUESTION */}
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
          If Jesus has finished the work, what are you still trying to carry on your own?
        </div>
      </div>

      {/* NEXT */}
      <div className="card episodeCard" style={{ marginTop: 24 }}>
        <img
          className="episodeThumb"
          src="/images/resurrection.png"
          alt="RESURRECTION"
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
            Death was not the end—what happened next?
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <a href="/journey/cross">← Back to CROSS</a>
      </div>

  

    </main>
  );
}
