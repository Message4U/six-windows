"use client";

export default function HebrewsNineTwentySeven() {
  return (
    <main className="container">
      <a className="back" href="/journey/judgement">← Back</a>

      {/* HEADER IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/judgement-header.png"
          alt="Hebrews 9:27"
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            objectPosition: "center 50%",
            display: "block",
          }}
        />
        <div style={{ padding: 18 }}>
          <h1 className="h1" style={{ marginTop: 10 }}>Hebrews 9:27</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Life is not endless—accountability is real.
          </div>
        </div>
      </div>

      {/* VERSE */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “And as it is appointed unto men once to die, but after this the judgment:”
        </p>
      </div>

      {/* WHAT THIS VERSE IS SAYING */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Hebrews 9:27 is a simple, sobering statement: every human life moves toward two certainties—death and
          judgment. “Appointed” means this is not random or optional; it is the normal path for everyone. The verse
          does not describe the details of judgment here—it emphasizes the reality of it. Life is not a cycle of endless
          retries. Our choices matter because our lives are moving toward a real encounter with God.
        </p>
      </div>

      {/* WHY THIS MATTERS */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          This verse cuts through denial. We often live like time is unlimited and consequences are distant. Hebrews
          reminds us that life is a gift with an end, and it will be evaluated. That can feel heavy—but it’s also clarifying.
          It exposes the emptiness of “I’ll deal with God later.” If judgment is real, then grace becomes urgent. This verse
          doesn’t exist to produce fear—it exists to produce honesty.
        </p>
      </div>

      {/* BIG FORWARD QUESTION */}
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
          If you knew you would stand before God soon, what would you stop delaying right now?
        </div>
      </div>

      {/* NEXT */}
      <div className="card episodeCard" style={{ marginTop: 24 }}>
        <img
          className="episodeThumb"
          src="/images/cross.png"
          alt="CROSS"
        />

        <div className="episodeMeta">
          <div className="episodeTopline">
            <span>NEXT</span>
            <span></span>
          </div>

          <div className="episodeTitleRow">
            <h3 className="episodeTitle">CROSS</h3>

            <a className="playNext" href="/journey/cross">
              ▶ Play Next
            </a>
          </div>

          <div style={{ marginTop: 6, opacity: 0.85 }}>
            If judgement is deserved, what hope is left?
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <a href="/journey/judgement">← Back to JUDGEMENT</a>
      </div>
    </main>
  );
}
