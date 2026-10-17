// เปลี่ยนข้อความเมื่อคลิกปุ่ม Say Hello
document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello from GitHub Pages! (Updated via CI/CD)';
});

// ฟังก์ชัน Toggle Theme (Dark / Light Mode)
const themeBtn = document.querySelector('#themeToggleBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
}); 