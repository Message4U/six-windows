"use client";

export default function MatthewTwentyEightSix() {
  return (
    <main className="container">
      

      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/resurrection-header.png"
          alt="Matthew 28:6"
          style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
        />
        <div style={{ padding: 18 }}>
          <h1 className="h1" style={{ marginTop: 10 }}>Matthew 28:6</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            The tomb is empty. Jesus is alive.
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “He is not here: for he is risen, as he said. Come, see the place where the Lord lay.”
        </p>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Matthew 28:6 is the announcement that changed everything: Jesus did not remain in the grave.
          The resurrection is not a metaphor—it is a historical claim that death was defeated. The empty tomb
          is God’s confirmation that Christ’s sacrifice was accepted and His power is greater than sin.
        </p>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          If Jesus rose, then hope is not just emotional comfort—it is reality. Nothing is beyond redemption,
          and no darkness is final. The resurrection means God can bring life where there was only loss.
        </p>
      </div>

     {/* BIG FORWARD QUESTION */}
<div className="card" style={{ marginTop: 14 }}>
  <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
    If the tomb is truly empty, what would it look like to live as if Jesus is really alive?
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
      What does resurrection mean for your life now?
    </div>
  </div>
</div>

<div style={{ marginTop: 18 }}>
  <a href="/journey/resurrection">← Back to RESURRECTION</a>
</div>

    </main>
  );
}
