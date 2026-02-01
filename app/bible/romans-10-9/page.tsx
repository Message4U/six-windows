"use client";

export default function RomansTenNine() {
  return (
    <main className="container">
      

      {/* HEADER IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/response-header.png"
          alt="Romans 10:9"
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            objectPosition: "center 55%",
            display: "block",
          }}
        />
        <div style={{ padding: 18 }}>
          <h1 className="h1" style={{ marginTop: 10 }}>Romans 10:9</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Faith becomes real when it’s trusted and confessed.
          </div>
        </div>
      </div>

      {/* VERSE */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.”
        </p>
      </div>

      {/* WHAT THIS VERSE IS SAYING */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Romans 10:9 connects two parts of response: believing in your heart and confessing with your mouth. Belief is
          inward trust that Jesus is truly risen and truly Lord. Confession is outward acknowledgment—owning Jesus openly
          as your King. This isn’t about perfect wording; it’s about surrender. Salvation is not earned by moral effort,
          but received by faith in the risen Jesus.
        </p>
      </div>

      {/* WHY THIS MATTERS */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Many people keep faith private because it feels safer. But Jesus isn’t just a personal helper—He is Lord.
          This verse invites a decisive moment: trust Him, then acknowledge Him. Confession isn’t about showing off;
          it’s about stepping into the light. When you name Jesus as Lord, you’re choosing a new allegiance and a new life.
        </p>
      </div>

      {/* BIG FORWARD QUESTION */}
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
          If Jesus is truly Lord and truly risen, what would it look like for you to openly trust Him today?
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <a href="/journey/response">← Back to RESPONSE</a>
      </div>
    </main>
  );
}
