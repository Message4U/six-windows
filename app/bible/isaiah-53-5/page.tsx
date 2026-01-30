"use client";

export default function IsaiahFiftyThreeFive() {
  return (
    <main className="container">
      <a className="back" href="/journey/cross">← Back</a>

      {/* HEADER IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/cross-header.png"
          alt="Isaiah 53:5"
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            objectPosition: "center 43%",
            display: "block",
          }}
        />
        <div style={{ padding: 18 }}>
          <h1 className="h1" style={{ marginTop: 10 }}>Isaiah 53:5</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Jesus suffered in our place.
          </div>
        </div>
      </div>

      {/* VERSE */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “But he was wounded for our transgressions, he was bruised for our iniquities:
          the chastisement of our peace was upon him; and with his stripes we are healed.”
        </p>
      </div>

      {/* WHAT THIS VERSE IS SAYING */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Isaiah 53:5 is one of the clearest prophecies of the cross in the entire Bible. It explains that the
          suffering of Jesus was not accidental or meaningless—it was substitution. He was wounded not for His own
          sins, but for ours. The punishment that should have fallen on humanity fell on Him instead. The cross is
          where God confronts sin seriously, but also provides healing through sacrifice.
        </p>
      </div>

      {/* WHY THIS MATTERS */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Many people carry guilt, shame, and the sense that they must fix themselves before coming to God. This
          verse flips that idea completely. Jesus did not come for the worthy—He came for the wounded. The cross
          means you are not asked to pay for your sins twice. Healing begins not by pretending you are okay, but by
          trusting the One who was crushed to bring you peace.
        </p>
      </div>

      {/* BIG FORWARD QUESTION */}
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
          If Jesus suffered for what you deserve, what keeps you from receiving the peace He purchased?
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
            How did Jesus take our place completely?
          </div>
        </div>
      </div>

      
    </main>
  );
}
