import Header from '../components/Header';
import SongList from '../components/SongList'; // Kiểm tra đường dẫn này kỹ

export default function PlaylistPage() {
  const song = { title: "Nhạc Không Lời", artist: "Relax Music" };

  return (
    <div>
      <Header currentPage="Playlist" />
      <SongList song={song} />
    </div>
  );
}