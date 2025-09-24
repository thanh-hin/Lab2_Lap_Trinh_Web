import SongCard from "./SongCard";

export default function TrackList() {
  const songs = [
    { id: 1, title: "Song One", artist: "Artist A", cover: "/cover1.jpg" },
    { id: 2, title: "Song Two", artist: "Artist B", cover: "/cover2.jpg" },
    { id: 3, title: "Song Three", artist: "Artist C", cover: "" },
  ];

  return (
    <div className="track-list">
      {songs.map((song) => (
        <SongCard
          key={song.id}
          title={song.title}
          artist={song.artist}
          cover={song.cover}
        />
      ))}
    </div>
  );
}
