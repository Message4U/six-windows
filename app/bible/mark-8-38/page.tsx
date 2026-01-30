"use client";

export default function MarkEightThirtyEight() {
  return (
    <main className="container">
      <a className="back" href="/journey/sin">← Back</a>

      {/* HEADER IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/sin-explore-header.jpg"
          alt="Mark 8:38"
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            objectPosition: "center 35%",
            display: "block",
          }}
        />
        <div style={{ padding: 18 }}>
          <h1 className="h1" style={{ marginTop: 10 }}>Mark 8:38</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Jesus calls for public allegiance—not hidden faith.
          </div>
        </div>
      </div>

      {/* VERSE */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “Whosoever therefore shall be ashamed of me and of my words in this adulterous and sinful generation;
          of him also shall the Son of man be ashamed, when he cometh in the glory of his Father with the holy angels.”
        </p>
      </div>

      {/* WHAT THIS VERSE IS SAYING */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Mark 8:38 is a warning and an invitation. Jesus is saying that following Him is not a private preference
          or a quiet identity—it’s a real allegiance. To be “ashamed” of Jesus means distancing yourself from Him
          to gain acceptance, safety, or approval in a world that resists God. Jesus connects our response to Him
          now with His response to us later. This isn’t about momentary fear; it’s about the direction of loyalty:
          will we stand with Him, or blend in without Him?
        </p>
      </div>

      {/* WHY THIS MATTERS */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Shame is one of the strongest forces shaping human behavior. It can silence faith, soften convictions,
          and keep people from living honestly. Jesus names this pressure directly: the world will try to make His
          words feel embarrassing, outdated, or “too intense.” This verse challenges the instinct to edit your
          discipleship to stay comfortable. Following Jesus means choosing truth over image, and God’s approval
          over crowds.
        </p>
      </div>

      {/* BIG FORWARD QUESTION */}
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
          Where are you most tempted to hide your connection to Jesus—and what would bold allegiance look like there?
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
