// Cấu hình Firebase của bạn
const firebaseConfig = {
  apiKey: "AIzaSyAjMVq8cgdhb0vUX3B0TlRrhivFX8k9NUQ",
  authDomain: "myweb-fe12e.firebaseapp.com",
  databaseURL: "https://myweb-fe12e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myweb-fe12e",
  storageBucket: "myweb-fe12e.appspot.com",
  messagingSenderId: "358691647082",
  appId: "1:358691647082:web:8368519f0b819fc0176413",
  measurementId: "G-DW3GVF9KXP"
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Hàm để gửi phản hồi lên Firebase
function submitFeedback(name, email, message) {
    const feedbackRef = database.ref('feedback/' + Date.now());
    return feedbackRef.set({
        name: name,
        email: email,
        message: message
    });
}

// Lắng nghe sự kiện submit của form
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    
    submitFeedback(name, email, message)
        .then(() => {
            alert('Phản hồi của bạn đã được gửi. Cảm ơn!');
            document.querySelector('form').reset();
        })
        .catch((error) => {
            console.error('Lỗi khi gửi phản hồi:', error);
            alert('Đã xảy ra lỗi khi gửi phản hồi. Vui lòng thử lại sau.');
        });
});
