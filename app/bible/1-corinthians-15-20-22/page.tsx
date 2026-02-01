"use client";

export default function FirstCorinthiansFifteenTwentyTwo() {
  return (
    <main className="container">
      <a className="back" href="/journey/resurrection">← Back</a>

      {/* HEADER IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/resurrection-header.png"
          alt="1 Corinthians 15:20–22"
          style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
        />
        <div style={{ padding: 18 }}>
          <h1 className="h1" style={{ marginTop: 10 }}>1 Corinthians 15:20–22</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Resurrection is the beginning of a new humanity.
          </div>
        </div>
      </div>

      {/* VERSE */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “But now is Christ risen from the dead, and become the firstfruits of them that slept.
          For since by man came death, by man came also the resurrection of the dead.
          For as in Adam all die, even so in Christ shall all be made alive.”
        </p>
      </div>

      {/* WHAT THIS VERSE IS SAYING */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Paul explains that Jesus’ resurrection is not an isolated miracle—it is the first of many. “Firstfruits”
          means the beginning of a harvest. Christ rising from the dead is God’s promise that death will not have
          the final word for those who belong to Him. Humanity’s story began with Adam and death, but it is being
          rewritten in Christ with life.
        </p>
      </div>

      {/* WHY THIS MATTERS */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          This verse expands resurrection beyond personal comfort—it becomes cosmic hope. Jesus is not only saving
          individuals; He is launching a new creation. If Christ is alive, then your future is not decay or loss,
          but restoration. The resurrection means the brokenness of this world is not permanent, and life in Christ
          is stronger than death itself.
        </p>
      </div>

      {/* BIG QUESTION */}
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
          If Jesus is the beginning of new life for humanity, what would it mean for you to belong to Him?
        </div>
      </div>

      {/* NEXT */}
      <div className="card episodeCard" style={{ marginTop: 24 }}>
        <img
          className="episodeThumb"
          src="/images/response.png"
          alt="RESPONSE"
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
            How do you respond to a risen Jesus?
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <a href="/journey/resurrection">← Back to RESURRECTION</a>
      </div>
    </main>
  );
}
