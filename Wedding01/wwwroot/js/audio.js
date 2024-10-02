const audioFiles = [
    'Music/y2mate.mp3', // Đảm bảo tệp âm thanh này tồn tại
];

let currentTrack = 0; // Biến lưu trữ chỉ số bài hát hiện tại
const audio = new Audio(audioFiles[currentTrack]); // Khởi tạo đối tượng Audio với bài hát đầu tiên
const playBtn = document.getElementById('play-btn'); // Lấy nút Play từ DOM
const pauseBtn = document.getElementById('pause-btn'); // Lấy nút Pause từ DOM

// Hàm phát nhạc
function playAudio() {
    audio.play().catch(error => {
        console.error('Error playing audio:', error); // Xử lý lỗi nếu có
    });
    playBtn.style.display = 'none'; // Ẩn nút Play
    pauseBtn.style.display = 'inline'; // Hiện nút Pause
}

// Hàm tạm dừng nhạc
function pauseAudio() {
    audio.pause(); // Tạm dừng âm thanh
    playBtn.style.display = 'inline'; // Hiện nút Play
    pauseBtn.style.display = 'none'; // Ẩn nút Pause
}

// Khi bài hát kết thúc, chuyển sang bài tiếp theo
audio.addEventListener('ended', () => {
    currentTrack = (currentTrack + 1) % audioFiles.length; // Chuyển sang bài tiếp theo
    audio.src = audioFiles[currentTrack]; // Cập nhật nguồn âm thanh
    playAudio(); // Tự động phát bài tiếp theo
});

// Lắng nghe sự kiện click trên nút play
playBtn.addEventListener('click', () => {
    playAudio(); // Phát nhạc
});

// Lắng nghe sự kiện click trên nút pause
pauseBtn.addEventListener('click', () => {
    pauseAudio(); // Tạm dừng nhạc
});