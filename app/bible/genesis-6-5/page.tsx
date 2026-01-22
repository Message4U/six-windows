export default function GenesisSixFive() {
  return (
    <main className="container">
      <a className="back" href="/journey/sin">← Back</a>

      {/* HEADER IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/sin-header-wide.jpg"
          alt="Genesis 6:5"
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            objectPosition: "center 35%",
            display: "block",
          }}
        />
        <div style={{ padding: 18 }}>
          
          <h1 className="h1" style={{ marginTop: 10 }}>Genesis 6:5</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            God sees the condition of the human heart.
          </div>
        </div>
      </div>

      {/* VERSE */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “The LORD saw how great the wickedness of the human race had become on the earth,
          and that every inclination of the thoughts of the human heart was only evil all the time.”
        </p>
</div>



{/* WHAT THIS VERSE IS SAYING */}
<div className="card" style={{ marginTop: 14 }}>
  <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
  <p className="p" style={{ marginBottom: 0 }}>
    Genesis 6:5 is not describing a few extreme sinners—it describes what sin does to the human heart over time.
    God looks beneath behavior and sees the inner source: thoughts, desires, and inclinations. The problem is not only
    that people sometimes choose wrong, but that something inside us becomes bent away from God. This is why the Bible
    treats sin as deeper than rule-breaking: it’s a heart-level drift from the Creator.
  </p>
</div>

{/* WHY THIS MATTERS */}
<div className="card" style={{ marginTop: 14 }}>
  <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
  <p className="p" style={{ marginBottom: 0 }}>
    Many of us judge ourselves by our best moments and excuse our worst as “not the real me.” But this verse suggests a
    harder truth: what consistently shapes our thoughts will eventually shape our choices. Sin isn’t only seen in public
    failures—it’s seen in private habits of the mind, quiet compromises, and the slow rejection of God’s authority.
    This verse invites honesty, because God already sees what’s happening inside—and He doesn’t look away.
  </p>
</div>

{/* BIG FORWARD QUESTION */}
<div className="card" style={{ marginTop: 14 }}>
  <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
    If God sees the heart, not just the behavior, what would He see shaping your thoughts when no one else is watching?
  </div>
</div>
{/* NEXT WINDOW */}
<div className="card" style={{ marginTop: 24 }}>
  <div className="episodeTitleRow">
    <div>
      <div style={{ opacity: 0.6, fontSize: 12, letterSpacing: 1 }}>
        NEXT
      </div>
      <h3 className="episodeTitle">SEPARATION</h3>
    </div>

    <a className="playNext" href="/journey/separation">
      <span>▶ Play Next</span>
    </a>
  </div>

  <div style={{ marginTop: 6, opacity: 0.85 }}>
    What happens when sin breaks our connection with God?
  </div>
</div>

    </main>
  );
}
