"use client";

export default function LukeTwelveTwoThree() {
  return (
    <main className="container">
      <a className="back" href="/journey/judgement">← Back</a>

      {/* HEADER IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/judgement-header.png"
          alt="Luke 12:2–3"
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            objectPosition: "center 50%",
            display: "block",
          }}
        />
        <div style={{ padding: 18 }}>
          <h1 className="h1" style={{ marginTop: 10 }}>Luke 12:2–3</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Hidden things don’t stay hidden.
          </div>
        </div>
      </div>

      {/* VERSE */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “For there is nothing covered, that shall not be revealed; neither hid, that shall not be known.
          Therefore whatsoever ye have spoken in darkness shall be heard in the light; and that which ye have spoken
          in the ear in closets shall be proclaimed upon the housetops.”
        </p>
      </div>

      {/* WHAT THIS VERSE IS SAYING */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Luke 12:2–3 is Jesus saying that truth wins. What is hidden will be revealed. What is whispered in secret
          will be brought into the open. Jesus is warning against living a divided life—one face in public and another
          in private. God is not fooled by appearances, and the day is coming when reality will be exposed. This is not
          only about scandal; it’s about accountability before God.
        </p>
      </div>

      {/* WHY THIS MATTERS */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          We all have hidden places—thoughts, motives, habits, and compromises we hope no one sees. This passage says
          the safest path is not hiding better, but living honestly. Judgement becomes terrifying when we cling to secrets.
          But it becomes freeing when we bring things into the light now. Jesus is not trying to shame you—He’s trying
          to rescue you from a life built on cover-ups.
        </p>
      </div>

      {/* BIG FORWARD QUESTION */}
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
          What are you most tempted to keep hidden—and what would it look like to bring it into the light before God?
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
