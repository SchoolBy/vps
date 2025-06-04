// auth.js

// Handle Sign Up
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (localStorage.getItem(username)) {
    alert('Username already exists!');
  } else {
    localStorage.setItem(username, password);
    alert('Account created!');
    window.location.href = 'signin.html';
  }
});

// Handle Sign In
document.getElementById('signinForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const storedPassword = localStorage.getItem(username);
  if (storedPassword === password) {
    alert('Login successful!');
    window.location.href = 'index.html'; // Redirect to homepage
  } else {
    alert('Invalid credentials.');
  }
});
