import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h2>🎶 Music App</h2>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/playlist">Playlist</Link>
        <Link href="/album">Album</Link>
        <Link href="/contact">Contact</Link>
         
      </nav>
    </header>
  );
}
