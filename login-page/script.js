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
    const privilege = document.querySelector('input[name="privilege"]:checked').value; // Get selected privilege

    // Simpan data ke localStorage
    const userData = { username, password, privilege }; // Create user object
    localStorage.setItem('userData', JSON.stringify(userData)); // Save as a string

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
    const storedUserData = JSON.parse(localStorage.getItem('userData')); // Retrieve stored user data

    if (storedUserData && username === storedUserData.username && password === storedUserData.password) {
        alert(`Login Berhasil sebagai ${storedUserData.privilege}!`);
        if (storedUserData.privilege === 'admin') {
            window.location.href = '../dashboard-page/admin.html'; // Redirect admin
        } else {
            window.location.href = 'index.html'; // Redirect user
        }
    } else {
        alert('Username atau Password salah!');
    }
});
