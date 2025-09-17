Thực hành môn Lập trình Web, yêu cầu:

  Cài đặt Node.js
  
  Tạo project dựa trên framework Next.js
  
  Viết thêm các trang HTML con và CSS cho giao diện đã làm trước đó

🛠️ Công nghệ sử dụng

  Next.js
   (App Router)
  
  React.js (component-based)
  
  CSS thuần (globals.css)

🚀 Chức năng

  Trang chủ với hero section và danh sách nhạc
  
  Trang Playlist hiển thị các bài hát
  
  Trang Contact với thông tin liên hệ
  
  Component hóa (Header, Hero, Section, SongCard, TrackList, Player)
  
  CSS responsive, hỗ trợ dark UI

📂 Cấu trúc thư mục
my-music-app/
 ┣ app/
 ┃ ┣ components/
 ┃ ┃ ┣ Header.js
 ┃ ┃ ┣ Hero.js
 ┃ ┃ ┣ Player.js
 ┃ ┃ ┣ Section.js
 ┃ ┃ ┣ SongCard.js
 ┃ ┃ ┗ TrackList.js
 ┃ ┣ globals.css
 ┃ ┣ layout.js
 ┃ ┣ page.js          # Trang chủ
 ┃ ┣ playlist/
 ┃ ┃ ┗ page.js        # Playlist
 ┃ ┗ contact/
 ┃    ┗ page.js       # Contact
 ┣ public/
 ┃ ┣ cover1.jpg
 ┃ ┣ cover2.jpg
 ┃ ┗ default.jpg
 ┗ package.json
