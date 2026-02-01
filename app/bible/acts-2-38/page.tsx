"use client";

export default function ActsTwoThirtyEight() {
  return (
    <main className="container">
      

      {/* HEADER IMAGE */}
      <div className="card" style={{ overflow: "hidden", padding: 0, marginTop: 14 }}>
        <img
          src="/images/response-header.png"
          alt="Acts 2:38"
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            objectPosition: "center 55%",
            display: "block",
          }}
        />
        <div style={{ padding: 18 }}>
          <h1 className="h1" style={{ marginTop: 10 }}>Acts 2:38</h1>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Turn to Jesus—repent and begin a new life.
          </div>
        </div>
      </div>

      {/* VERSE */}
      <div className="card" style={{ marginTop: 14 }}>
        <p className="p" style={{ fontStyle: "italic" }}>
          “Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the
          remission of sins, and ye shall receive the gift of the Holy Ghost.”
        </p>
      </div>

      {/* WHAT THIS VERSE IS SAYING */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>What this verse is saying</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Acts 2:38 is Peter’s direct answer to people asking what they should do after hearing the gospel. “Repent”
          means to turn—away from sin and toward God. Baptism is the public step that shows you’re identifying with
          Jesus: His death, burial, and resurrection. Peter connects this response to forgiveness and the gift of the
          Holy Spirit, meaning God doesn’t only pardon you—He comes to live in you and lead you.
        </p>
      </div>

      {/* WHY THIS MATTERS */}
      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>Why this matters for real life</h2>
        <p className="p" style={{ marginBottom: 0 }}>
          Many people want change without surrender. This verse shows that response is not vague or private only—it’s
          a real turning and a real step forward. Repentance isn’t just feeling bad; it’s choosing a new direction.
          Baptism isn’t a trophy for “good Christians”; it’s the starting line of obedience. God meets honest faith
          with real forgiveness and real help.
        </p>
      </div>

      {/* BIG FORWARD QUESTION */}
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.35 }}>
          What would it look like for you to turn toward Jesus with your whole life—not just your thoughts?
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <a href="/journey/response">← Back to RESPONSE</a>
      </div>
    </main>
  );
}
