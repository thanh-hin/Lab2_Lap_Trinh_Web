import React from 'react';
import SongList from './components/SongCard';
import Player from './components/Player';

function MusicApp() {
  const song = {
    id: 1,
    title: "Nhạc Không Lời",
    artist: "Relax Music",
    duration: "3:45"
  };

  return (
    <div>
      <h1>Ứng dụng Nhạc</h1>
      <SongList song={song} />
      <Player song={song} />
    </div>
  );
}

export default MusicApp;