import React from 'react';

function SongList({ song }) {
  return (
    <div>
      <h2>Danh sách bài hát</h2>
      {song ? (
        <>
          <p>Bài hát: {song.title}</p>
          <p>Nghệ sĩ: {song.artist}</p>
        </>
      ) : (
        <p>Chưa có bài hát để hiển thị.</p>
      )}
    </div>
  );
}

export default SongList;