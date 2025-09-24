export default function SongCard({ title, artist, cover }) {
  const coverSrc = cover && cover.trim() !== "" ? cover : "/default.jpg";

  return (
    <div className="song-card">
      <img src={coverSrc} alt={title} />
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
}
