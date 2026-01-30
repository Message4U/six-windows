"use client";

export default function RomansThreeTenTwelve() {
  return (
    <main className="container">
      <a className="back" href="/journey/sin">← Back</a>

      {/* HEADER IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/sin-explore-header.jpg"
          alt="Romans 3:10–12"
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            objectPosition: "center 35%",
            display: "block",
          }}
        />
        <div style={{ padding: 18 }}>
          <h1 className="h1" style={{ marginTop: 10 }}>Romans 3:10–12</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Sin is universal—no one is naturally righteous.
          </div>
        </div>
      </div>

      {/* VERSE */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “As it is written, There is none righteous, no, not one: There is none that understandeth,
          there is none that seeketh after God. They are all gone out of the way, they are together
          become unprofitable; there is none that doeth good, no, not one.”
        </p>
      </div>

      {/* WHAT THIS VERSE IS SAYING */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Romans 3:10–12 is a blunt diagnosis of humanity. Paul isn’t saying people never do anything
          that looks “good” on the surface—he’s saying no one is righteous before God on their own.
          Sin isn’t limited to the worst people; it reaches everyone. Left to ourselves, we drift from
          God rather than toward Him. This exposes sin as a universal condition, not just isolated mistakes.
        </p>
      </div>

      {/* WHY THIS MATTERS */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          This passage removes the illusion that sin is only a problem for “bad” people. It shows that
          every person is affected, even when life looks respectable on the outside. Sin is not just
          about wrongdoing—it’s about separation from God at the deepest level. The verse confronts pride
          and self-reliance, because it reveals that no one can claim righteousness by effort or morality.
          We all need rescue, not just improvement.
        </p>
      </div>

      {/* BIG FORWARD QUESTION */}
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
          If no one is righteous on their own, what does it mean to stop pretending—and finally come to God for mercy?
        </div>
      </div>

      {/* NEXT */}
      <div className="card episodeCard" style={{ marginTop: 24 }}>
        <img
          className="episodeThumb"
          src="/images/judgement.png"
          alt="JUDGEMENT"
        />

        <div className="episodeMeta">
          <div className="episodeTopline">
            <span>NEXT</span>
            <span></span>
          </div>

          <div className="episodeTitleRow">
            <h3 className="episodeTitle">JUDGEMENT</h3>

            <a className="playNext" href="/journey/judgement">
              ▶ Play Next
            </a>
          </div>

          <div style={{ marginTop: 6, opacity: 0.85 }}>
            What happens when God responds to a world filled with sin?
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <a href="/journey/sin">← Back to SIN</a>
      </div>
    </main>
  );
}
