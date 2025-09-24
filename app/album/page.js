import Header from "../components/Header";
import TrackList from "../components/TrackList"; // Bạn có thể tái sử dụng TrackList nếu cần

export default function AlbumPage() {
  return (
    <main>
      <Header />
      <h1>🎶 Album của bạn</h1>
      <TrackList /> {/* Bạn có thể tùy chỉnh TrackList hoặc tạo một component mới cho Album */}
    </main>
  );
}
