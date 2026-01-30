"use client";

export default function RomansSixTwentyThree() {
  return (
    <main className="container">
      <a className="back" href="/journey/judgement">← Back</a>

      {/* HEADER IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/judgement-header.png"
          alt="Romans 6:23"
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            objectPosition: "center 50%",
            display: "block",
          }}
        />
        <div style={{ padding: 18 }}>
          <h1 className="h1" style={{ marginTop: 10 }}>Romans 6:23</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Sin earns a wage. God offers a gift.
          </div>
        </div>
      </div>

      {/* VERSE */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.”
        </p>
      </div>

      {/* WHAT THIS VERSE IS SAYING */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Romans 6:23 draws a sharp contrast between what sin produces and what God provides. A “wage” is earned—
          it is the fair outcome of what you’ve worked for. Sin leads to death because separation from God is the
          natural result of rejecting the Source of life. But God responds with something we cannot earn: a gift.
          Eternal life is not payment for good behavior; it is given through Jesus Christ.
        </p>
      </div>

      {/* WHY THIS MATTERS */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Most people live as if their choices don’t really add up to anything. This verse says they do. Sin isn’t
          harmless—it leads somewhere. At the same time, this isn’t meant to leave you hopeless. God doesn’t only
          announce the consequences; He offers an escape. The difference is huge: wages are earned, but gifts are
          received. This verse invites you to stop negotiating your way into God’s favor and instead receive what
          you could never produce on your own.
        </p>
      </div>

      {/* BIG FORWARD QUESTION */}
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
          If eternal life is a gift, what is keeping you from receiving it instead of trying to earn your way forward?
        </div>
      </div>

      {/* NEXT */}
      <div className="card episodeCard" style={{ marginTop: 24 }}>
        <img
          className="episodeThumb"
          src="/images/cross.png"
          alt="NEXT"
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
            Life is not endless—what comes after death?
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <a href="/journey/judgement">← Back to JUDGEMENT</a>
      </div>
    </main>
  );
}
