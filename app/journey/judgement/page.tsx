"use client";

export default function Judgement() {
  return (
    <main className="container">
     

      {/* HERO IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/judgement-header.png"
          alt="Judgement"
          style={{ width: "100%", height: 240, objectFit: "cover", objectPosition: "center 72%", display: "block" }}
        />
        <div style={{ padding: 18 }}>
          <span className="badge">Window 3</span>
          <h1 className="h1" style={{ marginTop: 10 }}>JUDGEMENT</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            God is just. Sin has consequences—and we cannot rescue ourselves.
          </div>
        </div>
      </div>

      {/* MAIN PARAGRAPH */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ marginBottom: 0 }}>
          Judgement is not God being cruel—it is God being righteous. If God is truly good, He cannot pretend evil
          doesn’t matter. Sin doesn’t only harm individuals; it fractures creation, destroys trust, and spreads
          injustice. Scripture shows that God will hold the world accountable, not because He enjoys punishment,
          but because justice is part of His nature. This window forces the honest question: if God is holy and
          we are not, what hope is left?
        </p>
      </div>

      {/* SCRIPTURE (FEATURED) */}
      <div style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Scripture</h2>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {/* Romans 6:23 */}
          <div className="card" style={{ flex: "1 1 220px" }}>
            <a href="/bible/romans-6-23" style={{ textDecoration: "none" }}>
              <span className="badge">EXPLORE</span>
            </a>

            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
              Romans 6:23
            </div>

            <div style={{ marginTop: 8, opacity: 0.75 }}>
              “For the wages of sin is death; but the gift of God is eternal life…”
            </div>
          </div>

          {/* Hebrews 9:27 */}
          <div className="card" style={{ flex: "1 1 220px" }}>
            <a href="/bible/hebrews-9-27" style={{ textDecoration: "none" }}>
              <span className="badge">EXPLORE</span>
            </a>

            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
              Hebrews 9:27
            </div>

            <div style={{ marginTop: 8, opacity: 0.75 }}>
              “It is appointed unto men once to die, but after this the judgment.”
            </div>
          </div>

          {/* Romans 3:10–12 */}
          <div className="card" style={{ flex: "1 1 220px" }}>
            <a href="/bible/romans-3-10-12" style={{ textDecoration: "none" }}>
              <span className="badge">EXPLORE</span>
            </a>

            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
              Romans 3:10–12
            </div>

            <div style={{ marginTop: 8, opacity: 0.75 }}>
              “There is none righteous, no, not one…”
            </div>
          </div>
        </div>
      </div>

      {/* REFLECT */}
      <h2 style={{ marginTop: 24 }}>Reflect</h2>

      <div className="card" style={{ marginTop: 10 }}>
        <ul className="list" style={{ marginBottom: 0 }}>
          <li>When you hear “judgement,” what feelings come up—and why?</li>
          <li>If God is truly just, what would justice require in a world full of sin?</li>
        </ul>
      </div>

      {/* NEXT WINDOW */}
      <div className="card episodeCard" style={{ marginTop: 24 }}>
        <img
          className="episodeThumb"
          src="/images/cross.jpg"
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


    </main>
  );
}
