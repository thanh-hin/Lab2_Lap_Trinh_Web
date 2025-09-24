import "./globals.css";

export const metadata = {
  title: "Music App",
  description: "A simple music app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
