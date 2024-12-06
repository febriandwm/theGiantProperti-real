// Elemen DOM
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');

// Fungsi untuk mengubah tampilan form
loginBtn.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
});

registerBtn.addEventListener('click', () => {
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
});

// Fungsi Register
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Simpan data ke localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registrasi Berhasil! Silakan Login.');
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
});

// Fungsi Login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login Berhasil!');
        window.location.href = 'index.html'; // Arahkan ke halaman utama setelah login
    } else {
        alert('Username atau Password salah!');
    }
});
