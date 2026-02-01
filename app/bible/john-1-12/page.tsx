"use client";

export default function JohnOneTwelve() {
  return (
    <main className="container">
      

      {/* HEADER IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/response-header.png"
          alt="John 1:12"
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            objectPosition: "center 55%",
            display: "block",
          }}
        />
        <div style={{ padding: 18 }}>
          <h1 className="h1" style={{ marginTop: 10 }}>John 1:12</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Receiving Jesus changes your identity.
          </div>
        </div>
      </div>

      {/* VERSE */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:”
        </p>
      </div>

      {/* WHAT THIS VERSE IS SAYING */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          John 1:12 describes the core response to Jesus: receive Him and believe in His name. This isn’t just agreeing
          with facts—it’s welcoming Jesus with trust. The result is astonishing: God gives you the right to become His
          child. “Power” here is authority—new status, new relationship, new belonging. You’re not merely forgiven; you’re adopted.
        </p>
      </div>

      {/* WHY THIS MATTERS */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Many people live defined by performance, past mistakes, or other people’s labels. This verse says identity can
          be replaced at the deepest level. Becoming God’s child doesn’t come from being “religious enough”—it comes from
          receiving Jesus. When you belong to God, your story is no longer driven by shame or earning, but by relationship.
        </p>
      </div>

      {/* BIG FORWARD QUESTION */}
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
          If God is offering you a new identity as His child, what is holding you back from receiving Jesus?
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <a href="/journey/response">← Back to RESPONSE</a>
      </div>
    </main>
  );
}
