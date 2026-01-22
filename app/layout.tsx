import "./globals.css";

export const metadata = {
  title: "Six Windows",
  description: "A simple journey to reflect, read Scripture, and encounter Jesus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="homeFab" href="/" aria-label="Home">
          <span className="homeFabIcon">⌂</span>
        </a>

        {children}
      </body>
    </html>
  );
}

